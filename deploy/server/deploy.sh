#!/usr/bin/env bash
# Build the site and publish it to the server. Safe to run as often as you like:
# it only touches /srv/resbrotherx and the resbrotherx Nginx files.
#   bash deploy/server/deploy.sh
set -euo pipefail
HOST=${RESBROTHERX_HOST:-root@72.62.51.223}
ROOT=$(cd "$(dirname "$0")/../.." && pwd)
HERE="$ROOT/deploy/server"

echo "→ building"
(cd "$ROOT" && npm run build >/dev/null)

echo "→ uploading"
ssh "$HOST" 'mkdir -p /srv/resbrotherx/web'
rsync -az --delete "$ROOT/dist/" "$HOST:/srv/resbrotherx/web/"
scp -q "$HERE/resbrotherx-common.conf" "$HOST:/etc/nginx/snippets/resbrotherx-common.conf"

# First run only: install the HTTP setup. Later runs leave the live config alone.
if ! ssh "$HOST" 'test -e /etc/nginx/sites-available/resbrotherx'; then
  echo "→ first run: installing the Nginx site"
  scp -q "$HERE/resbrotherx.http.conf" "$HOST:/etc/nginx/sites-available/resbrotherx"
  ssh "$HOST" 'ln -sfn /etc/nginx/sites-available/resbrotherx /etc/nginx/sites-enabled/resbrotherx'
fi

echo "→ checking and reloading Nginx"
ssh "$HOST" 'set -e
  chmod -R a+rX /srv/resbrotherx
  if ! nginx -t 2>/tmp/resbrotherx-nginx-test.log; then
    cat /tmp/resbrotherx-nginx-test.log
    echo "Nginx config test failed. Nginx was NOT reloaded; the running sites are untouched."
    exit 1
  fi
  systemctl reload nginx
  sleep 1
  curl -s -o /dev/null -w "server answers for www.resbrotherx.com: %{http_code}\n" -H "Host: www.resbrotherx.com" http://127.0.0.1/'
echo "✓ deployed"
