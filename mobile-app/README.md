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

**Live (model 2):** https://resonant-smakager-9da5a1.netlify.app/

## Model 1 vs Model 2
| | Model 1 | Model 2 (Netlify) |
|---|---|---|
| Folder | `model-1/` | `model-2-netlify/` |
| Install to home screen | manifest + 180px icon | manifest + 180 / 192 / 512px icons |
| Works offline | no | yes — `sw.js` caches the app files |
| Size of `index.html` | about 54 KB | about 79 KB |
| Status | kept for reference | latest, use this one |

## Deploy model 2 on Netlify
The Netlify site is connected to this GitHub repo. In Netlify, set:
- **Publish directory:** `mobile-app/model-2-netlify`
- **Build command:** none (static site)

Open the site on your phone and use "Add to Home Screen".

To deploy by hand instead, drag the `model-2-netlify/` folder into Netlify ("Add new site", then "Deploy manually").

## Updating model 2
After changing `index.html`, bump the `CACHE` version in `sw.js` (for example `clarity-v1` to `clarity-v2`) so phones pick up the new copy instead of the cached one.

## Data
The app keeps its settings in the browser's `localStorage`, on each device. Nothing is sent to a server.
