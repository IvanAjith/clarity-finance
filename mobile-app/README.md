# Clarity — Mobile App

Installable (PWA) mobile version of the Clarity finance dashboard. Two versions are kept side by side.

```
mobile-app/
├── model-1/                 ← First mobile version (moved here from app/mobile-layout)
│   ├── index.html
│   ├── manifest.json
│   └── icon-180.png
│
├── model-2-netlify/         ← Second version, deployed on Netlify — LATEST
│   ├── index.html
│   ├── manifest.json
│   ├── sw.js                ← Offline cache (service worker)
│   ├── icon-180.png         ← iOS home-screen icon
│   ├── icon-192.png
│   └── icon-512.png
│
└── README.md                ← This file
```

## Model 1 vs Model 2
| | Model 1 | Model 2 (Netlify) |
|---|---|---|
| Folder | `model-1/` | `model-2-netlify/` |
| Install to home screen | manifest + 180px icon | manifest + 180 / 192 / 512px icons |
| Works offline | no | yes — `sw.js` caches the app files |
| Size of `index.html` | about 54 KB | about 79 KB |
| Status | kept for reference | latest, use this one |

## Deploy model 2 on Netlify
1. Open Netlify, then Sites, then "Add new site", then "Deploy manually".
2. Drag the whole `model-2-netlify/` folder in. It is a static site, with no build step.
3. Open the site on your phone and use "Add to Home Screen".

## Updating model 2
After changing `index.html`, bump the `CACHE` version in `sw.js` (for example `clarity-v1` to `clarity-v2`) so phones pick up the new copy instead of the cached one.

## Data
The app keeps its settings in the browser's `localStorage`, on each device. Nothing is sent to a server.
