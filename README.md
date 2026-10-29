# UA Securities website

Next.js 16 site for UA Securities LLC (Seattle). Colors come from the company logo: charcoal `#464646` and orange `#f08a44`.

## Run locally

```bash
npm install
npm run dev
```

## Deploy

Import this repository in Vercel. The default settings work.

The quote form at `/contact` emails requests through [Resend](https://resend.com) when these environment variables are set in Vercel:

| Variable | Purpose |
| --- | --- |
| `RESEND_API_KEY` | Resend API key |
| `QUOTE_FROM_EMAIL` | Sender on a domain verified in Resend, e.g. `UA Securities Website <quotes@uasecurities.com>` |
| `QUOTE_TO_EMAIL` | Where requests go (defaults to `info@uasecurities.com`) |

Without `RESEND_API_KEY`, the form opens the visitor's email app with the request filled in.

## Content

Company details, services and the client list live in `lib/site.ts`. Images are in `public/images/`.

`pitch/` holds the one-page robot patrol pitch (in-house, not part of the site).
