# LAYERED. Cafe — Minimal Menu Site

A clean, minimal, text-led menu site for LAYERED. Cafe. React + Vite + Tailwind v4.

## Concept
Minimal & airy — lots of whitespace, no images in the menu, text-only items with descriptions and allergen tags. Single typeface (Cormorant Garamond) throughout. Brand color #00FFFF.

## Run
```bash
npm install
npm run dev
```

## Add the chef photo
Place elena.jpeg in public/images/  →  public/images/elena.jpeg
(The Meet the Chef page uses it; if missing it shows a clean placeholder.)

## Edit the menu
All items live in src/data/menuData.js — organised by section. Each item:
```js
{ name: 'Item Name', detail: 'Description', sizes: 'Hot 12oz', tags: ['DAIRY'] }
```

## Pages
- Menu (home): hero + full text-only menu with section filter
- Meet the Chef: Elena, Head Chef
- Bulk Order: opens the JotForm in a new tab

## Deploy to Vercel
Push to GitHub → import on vercel.com → Deploy.
