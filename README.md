# resbrotherx.com

The Resbrotherx company website. TypeScript, React and Vite, built on the res-ai template design. Every page is pre-rendered to static HTML, so search engines and AI assistants get real content.

## Commands

| Command | What it does |
|---|---|
| `npm run dev` | Local site at http://localhost:5173 |
| `npm run build` | Type-check, build and pre-render every page into `dist/` |
| `npm run preview` | Serve `dist/` the way the production server does |
| `npm run lint` | ESLint |
| `npm run images` | Rebuild the WebP images from `media-src/` |
| `npm run brand` | Redraw the logo, favicons and social card |

## Where to change things

| To change | Edit |
|---|---|
| Company facts, founder, email, social links | `src/data/site.ts` |
| Products (Apsuni, AnimeDoc, Adorė, Brainbox) | `src/data/products.ts` |
| Services, labs, portfolio | `src/data/services.ts`, `labs.ts`, `projects.ts` |
| Teams, technologies, FAQ | `src/data/company.ts` |
| Blog articles | `src/data/posts.ts` |
| Documentation | `src/data/docs.ts` |
| Founder photo | Put it at `public/assets/media/founder.jpg`, then set `FOUNDER.photo` in `src/data/site.ts` |

Each new article, product or doc gets its own page, a sitemap entry, feed items and a line in `llms.txt` automatically.

## Deploying

The site runs on the shared Ubuntu server, next to Adorė, AnimeDoc and Apsuni, in `/srv/resbrotherx/web` behind Nginx.

```bash
bash deploy/server/deploy.sh        # build and publish (run it after every change)
bash deploy/server/enable-https.sh  # once, after the domain points to the server
```

### Connecting the domain (one time)

The domain is registered at Hostinger. Right now it points to Hostinger's parking page.

1. **Cloudflare.** Choose Add a site, enter `resbrotherx.com` and pick the Free plan. Cloudflare shows you two nameservers.
2. **Hostinger.** Open Domains, then resbrotherx.com, then DNS / Nameservers. Change the nameservers to the two Cloudflare gave you.
3. **Cloudflare DNS.** Delete any imported A records for `@` and `www`, then add:
   - `A` · name `@` · `72.62.51.223` · Proxied
   - `CNAME` · name `www` · `resbrotherx.com` · Proxied
4. Wait until Cloudflare says the site is Active. This usually takes minutes, and can take a few hours.
5. Run `bash deploy/server/enable-https.sh`. It checks that the domain reaches the server, gets a Let's Encrypt certificate and switches the site to HTTPS.
6. **Cloudflare SSL/TLS.** Set the mode to Full (strict) and turn on Always Use HTTPS.

Until then, a preview runs at http://72.62.51.223:8090. It is marked noindex and is removed in step 5.

### After the domain is live

- Add the site to [Google Search Console](https://search.google.com/search-console) and [Bing Webmaster Tools](https://www.bing.com/webmasters), then submit `https://www.resbrotherx.com/sitemap.xml`. Bing can import the site straight from Google Search Console.
- Link to resbrotherx.com from the YouTube, Instagram and GitHub profiles, and from Apsuni, AnimeDoc and Adorė. These links matter most for ranking.
- Set up a mailbox at resbrotherx.com, for example with Zoho like the other products. Then change `SITE.email` in `src/data/site.ts`. Until then, the contact form uses support@apsuni.com.
