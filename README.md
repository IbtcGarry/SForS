# SForS

A photography portfolio site combining two design references:

- **Steve Carty** ([stevecarty.com](https://stevecarty.com/)) — the base:
  clean white/black layout, generous whitespace, full-bleed portrait
  photography, minimal sans-serif type.
- **Thrasher Magazine** ([thrashermagazine.com](https://www.thrashermagazine.com/)) —
  the accent: bold red, near-black bands, a heavy condensed display font
  for headlines, and a rawer, higher-energy voice layered on top of the
  clean base.

Built with **React** (Vite) + **React Router** + **Tailwind CSS**.

## Pages

- `/` — Home: full-bleed hero, featured work grid, CTA band
- `/gallery` — Gallery: filterable grid by category (Portrait / Action / Editorial)
- `/about` — About: bio, portrait, pull quote
- `/contact` — Contact: info + placeholder form

## Getting started

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
```

## Replacing the placeholder photos

All gallery/home images are placeholders from picsum.photos, defined in
[`src/data/photos.js`](./src/data/photos.js). To use your own photos:

1. Drop your images into `src/assets/` (or host them elsewhere).
2. Update each entry in `src/data/photos.js` — `src`, `alt`, `caption`,
   `category`.
3. The hero image and about-page portrait are set directly in
   `src/pages/Home.jsx` and `src/pages/About.jsx` — swap those `src`
   values too.

## Design tokens

Custom Tailwind theme (`tailwind.config.js`):

- `paper` / `ink` — off-white background / near-black text (Carty base)
- `thrasher.red` / `thrasher.black` — accent red and true-black bands
- `font-sans` (Inter) for body copy, `font-display` (Anton) for bold
  headlines and the logo mark
