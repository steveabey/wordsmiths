# Wordsmiths on Cloudflare Workers

The repository needs exactly this layout at the top level:

```
wrangler.jsonc        ← Cloudflare settings
public/               ← the website (index.html, sw.js, icons …)
README.md             ← this file (not published)
```

Only the `public` folder is published, so this README and the settings file stay private.

## Updating to a new version

1. On GitHub, open the **public** folder in the repository.
2. Press **Add file → Upload files**.
3. Drag in the new `index.html` (and `sw.js` if I say it has changed).
4. Press **Commit changes**. Cloudflare redeploys automatically within about a minute.
