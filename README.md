# Wordsmiths: putting it on Cloudflare

You don't need a terminal. These steps use the Cloudflare dashboard in your web browser.

## What's in this folder

| File | What it does |
|---|---|
| `index.html` | The whole Wordsmiths app |
| `manifest.webmanifest`, `icon-*.png`, `apple-touch-icon.png`, `favicon.svg` | The app name and icons, so it can be installed on a board, laptop or tablet like an app |
| `sw.js` | Offline support: once a device has opened Wordsmiths, it keeps working if the internet drops |
| `_headers` | Security settings, and makes sure everyone gets the newest version |
| `wrangler.jsonc`, `.assetsignore` | Only used for the GitHub route (Option B) |

## Option A: drag and drop (quickest)

1. Unzip `wordsmiths-cloudflare.zip` on your computer. You'll get a folder called **wordsmiths**.
2. Go to **dash.cloudflare.com** and sign in.
3. In the left menu, choose **Workers & Pages**, then **Create**.
4. Choose the **Pages** tab, then **Upload assets** (it may say *Use direct upload*).
5. Type a project name, for example **wordsmiths**, and press **Create project**.
6. Drag the **wordsmiths** folder onto the upload box. You can also drag the zip itself.
7. Press **Deploy site**.
8. After a few seconds you'll get a link like **https://wordsmiths.pages.dev**. Open it to check.

### Updating it later

1. In **Workers & Pages**, open the **wordsmiths** project.
2. Press **Create deployment** (or **Upload new version**).
3. Drag in the new **wordsmiths** folder and press **Save and deploy**.

The link stays the same. Teachers get the new version the next time they open it.

## Option B: through GitHub (like the Games Room)

1. Create a new GitHub repository, for example `wordsmiths`, and upload every file in this folder, including `wrangler.jsonc` and `.assetsignore`.
2. In Cloudflare, go to **Workers & Pages → Create → Import a repository**, and choose the repository.
3. Leave the build settings empty and press **Deploy**.
4. To update it, upload the new `index.html` to GitHub. Cloudflare redeploys automatically.

## Optional: staff only

To stop anyone outside school using it, add **Cloudflare Access**:

1. In the Cloudflare dashboard, go to **Zero Trust → Access → Applications → Add an application → Self-hosted**.
2. Enter your Wordsmiths address.
3. Add a policy that allows email addresses ending in your school's domain.

Staff then confirm their school email with a one-time code. They don't need to create an account.

## On the classroom board

- Open the link in Edge or Chrome. Use the install icon in the address bar, **Install Wordsmiths**, to add it like an app.
- **Download** and **Print** on worksheets work fully on the Cloudflare version.
- Words are read aloud using the computer's own English (UK) voice. If nothing is heard, check that the board's speakers are on and that an English (United Kingdom) voice is installed (Windows: **Settings → Time and language → Speech**).
- Light or dark mode, the panel side, sounds and saved dictation sentences are remembered on each device.
