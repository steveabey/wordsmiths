# Wordsmiths: putting it on Cloudflare Workers

You don't need a terminal. These steps use GitHub and the Cloudflare dashboard in your web browser, the same way as the Games Room.

## What's in this folder

| File | What it does |
|---|---|
| `wrangler.jsonc` | Tells Cloudflare Workers to serve this folder as a website |
| `.assetsignore` | Stops `wrangler.jsonc` and this README being published |
| `index.html` | The whole Wordsmiths app |
| `manifest.webmanifest`, `icon-*.png`, `apple-touch-icon.png`, `favicon.svg` | The app name and icons, so it can be installed on a board, laptop or tablet like an app |
| `sw.js` | Offline support: once a device has opened Wordsmiths, it keeps working if the internet drops |
| `_headers` | Security settings, and makes sure everyone gets the newest version |

## First time: set it up

### 1. Put the files on GitHub

1. Unzip `wordsmiths-cloudflare.zip`. You'll get a folder called **wordsmiths**.
2. On **github.com**, press **New** to create a repository. Call it **wordsmiths**. It can be private.
3. On the new repository page, choose **uploading an existing file**.
4. Open the **wordsmiths** folder on your computer, select **everything inside it** and drag it onto the page.
   - Drag the files, not the folder, so `index.html` sits at the top level of the repository.
   - `.assetsignore` is a hidden file. On Windows, tick **View → Hidden items** in File Explorer. On a Mac, press **Cmd + Shift + .** in Finder to see it.
5. Press **Commit changes**.

### 2. Connect it to Cloudflare Workers

1. Go to **dash.cloudflare.com** and sign in.
2. In the left menu, choose **Workers & Pages**, then **Create**.
3. On the **Workers** tab, choose **Import a repository**.
4. Choose your GitHub account and the **wordsmiths** repository. If it isn't listed, use **Configure GitHub app** to give Cloudflare access to it.
5. Check the settings:
   - **Project name:** `wordsmiths`
   - **Build command:** leave empty
   - **Deploy command:** `npx wrangler deploy` (usually filled in for you)
6. Press **Deploy**.
7. After about a minute, you'll get a link like **https://wordsmiths.YOUR-NAME.workers.dev**. Open it to check.

## Updating it later

When I send you a new version:

1. Open the **wordsmiths** repository on GitHub.
2. Press **Add file → Upload files**, drag in the new `index.html`, and press **Commit changes**.
3. Cloudflare redeploys automatically within about a minute. The link stays the same.

Only `index.html` usually changes. If other files change, I'll say so.

## Optional: your own address

To use an address like `wordsmiths.lionelwaldenps.co.uk`, open the Worker in Cloudflare, then go to **Settings → Domains & Routes → Add → Custom domain**.

## Optional: staff only

To stop anyone outside school using it, add **Cloudflare Access**:

1. In the Cloudflare dashboard, go to **Zero Trust → Access → Applications → Add an application → Self-hosted**.
2. Enter your Wordsmiths address.
3. Add a policy that allows email addresses ending in your school's domain.

Staff then confirm their school email with a one-time code. They don't need to create an account.

## On the classroom board

- Open the link in Edge or Chrome. Use the install icon in the address bar, **Install Wordsmiths**, to add it like an app.
- **Download** and **Print** on worksheets and lesson plans work fully on the Cloudflare version.
- Words are read aloud using the computer's own English (UK) voice. If nothing is heard, check that the board's speakers are on and that an English (United Kingdom) voice is installed (Windows: **Settings → Time and language → Speech**).
- Light or dark mode, the panel side, sounds and saved dictation sentences are remembered on each device.
