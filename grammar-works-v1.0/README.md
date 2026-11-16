# Grammar Works — Cloudflare Pages package

Everything needed to host Grammar Works on Cloudflare Pages. Upload the folder as it is; there is nothing to build.

## What is in here

| File | What it does |
|---|---|
| `index.html` | The whole app — all six year groups, 103 features, 430 questions |
| `fonts/` | Lilita One, Fredoka and Nunito, bundled. No request leaves the site for fonts |
| `icons/`, `favicon.ico` | App icons, including the one used when it is added to an iPad home screen |
| `manifest.webmanifest` | Lets it install as an app rather than a browser tab |
| `sw.js` | Keeps a copy on the device so it opens with no network |
| `_headers` | Cache rules. The app itself is never cached hard, so updates arrive on reload |
| `_redirects` | Any stray URL lands on the app rather than a 404 |

## Deploying it

**From the dashboard** — the simplest route:

1. Cloudflare dashboard → **Workers & Pages** → **Create** → **Pages** → **Upload assets**
2. Name the project `grammar-works`
3. Drag this whole folder (or the zip) into the upload box
4. **Deploy**

It appears at `grammar-works.pages.dev` within a minute or so.

**From the command line**, if you prefer:

```
npx wrangler pages deploy grammar-works --project-name=grammar-works
```

## Updating it later

Re-upload the folder. `index.html` and `sw.js` are set to `no-cache`, so a teacher who reloads gets the new version straight away — no cache clearing, no asking people to hard-refresh. The service worker is stamped with the build date, so the old offline copy is thrown away and replaced automatically.

## A custom domain

Pages → your project → **Custom domains** → **Set up a domain**. If the school domain is already on Cloudflare, something like `grammar.lionelwalden.cambs.sch.uk` takes a couple of minutes. Otherwise the `.pages.dev` address works fine and needs nothing.

## Offline

Once a device has opened the site once, it will open again with no network at all — the app, the fonts and the icons are all stored on the device.

**The one exception is the videos.** Those are streamed from LGfL's own servers, so Play video needs the internet. Everything else — slides, modelling, practice, independent work, 3 to try, the word wall — works offline.

## On an iPad

Open the site in Safari, then Share → **Add to Home Screen**. It gets the app icon and opens full screen with no browser chrome, which is what you want in front of a class.

## If the school network blocks things

Nothing is fetched from a third party except the LGfL video player, which is on `lgfl.planetestream.com` — already trusted on the school network, since Grammar Explained is an LGfL service. The fonts used to come from Google; they are bundled now precisely so that a filtered network cannot change how the app looks.
