# 🪐 Centauri Credit

AI-powered FICO credit command center. Single-file app (`index.html`), Centauri Cloud architecture:
Firebase Firestore real-time sync (collection prefix `cc_`), PWA installable, no build step.

**Live:** https://planetxentauri.github.io/centauri-credit/

## Deploy
GitHub Pages → Settings → Pages → Deploy from branch → `main` / `(root)`.
If a deploy stalls ~3 min, edit this README via the web editor to trigger a fresh build,
or re-run the failed `pages-build-deployment` from the Actions tab.

## Sync
Data lives at `cc_spaces/{syncCode}` — the sync code is a private random key generated on
first run. Use ☁️ → "Copy sync link" in-app to connect other devices. Treat the link like a password.

## Notes
- Device-local prefs stay in `localStorage`; shared state syncs via Firestore snapshots.
- No secrets in this repo. Firebase web config is public by design.
