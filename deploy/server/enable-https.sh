#!/usr/bin/env bash
# Run once, after resbrotherx.com and www.resbrotherx.com point at the server.
# Gets the Let's Encrypt certificate and switches the site to HTTPS.
#   bash deploy/server/enable-https.sh
set -euo pipefail
HOST=${RESBROTHERX_HOST:-root@72.62.51.223}
HERE=$(cd "$(dirname "$0")" && pwd)

echo "→ checking that the domain reaches this server"
TOKEN="rbx-$(date +%s)"
ssh "$HOST" "mkdir -p /var/www/letsencrypt/.well-known/acme-challenge && echo $TOKEN > /var/www/letsencrypt/.well-known/acme-challenge/$TOKEN"
for name in resbrotherx.com www.resbrotherx.com; do
  got=$(curl -s -m 20 "http://$name/.well-known/acme-challenge/$TOKEN" || true)
  if [ "$got" != "$TOKEN" ]; then
    ssh "$HOST" "rm -f /var/www/letsencrypt/.well-known/acme-challenge/$TOKEN"
    echo "✗ http://$name does not reach the server yet."
    echo "  Add the DNS records in Cloudflare (see deploy/README.md), wait a few minutes and run this again."
    exit 1
  fi
done
ssh "$HOST" "rm -f /var/www/letsencrypt/.well-known/acme-challenge/$TOKEN"

echo "→ requesting the certificate"
ssh "$HOST" 'certbot certonly --webroot -w /var/www/letsencrypt --cert-name resbrotherx.com -d resbrotherx.com -d www.resbrotherx.com --non-interactive --agree-tos --register-unsafely-without-email --keep-until-expiring'

echo "→ switching Nginx to HTTPS"
ssh "$HOST" 'cp /etc/nginx/sites-available/resbrotherx /etc/nginx/sites-available/resbrotherx.http-setup.bak'
scp -q "$HERE/resbrotherx.conf" "$HOST:/etc/nginx/sites-available/resbrotherx"
ssh "$HOST" 'set -e
  if ! nginx -t 2>/tmp/resbrotherx-nginx-test.log; then
    cat /tmp/resbrotherx-nginx-test.log
    cp /etc/nginx/sites-available/resbrotherx.http-setup.bak /etc/nginx/sites-available/resbrotherx
    echo "Config test failed: restored the previous config. Nginx was not reloaded."
    exit 1
  fi
  systemctl reload nginx'
sleep 2
curl -s -o /dev/null -w "https://www.resbrotherx.com answers: %{http_code}\n" https://www.resbrotherx.com/ || true
echo "✓ HTTPS is on. In Cloudflare, set SSL/TLS mode to Full (strict)."
