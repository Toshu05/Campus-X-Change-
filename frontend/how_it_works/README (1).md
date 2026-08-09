# CampusXchange — "How it works / Sell an item" page

Standalone HTML + CSS + JS. No build step, no dependencies.

## Files
- `index.html` — page structure: header, "How it works" 6-step panel, safety bar, sell form, preview/tips sidebar, footer.
- `styles.css` — design system (emerald `#12a150`, navy `#123a63`) + responsive layout (3-col steps at <=900px, single column at <=700px).
- `script.js` — all editable content + behaviour.

## Run
Open `index.html` in a browser (or `python3 -m http.server` in this folder).

## Edit content
At the top of `script.js`:
- `STEPS` — the six "How it works" steps (icon, title, text).
- `PHOTOS` — listing photo URLs (max 6 shown).
- `TIPS` — sidebar "Tips to sell faster" entries.
Icons come from the inline `ICONS` SVG map — add your own keys there.

## Interactions included
- Add / remove photos (real file picker, max 6)
- Condition segmented control, negotiable & delivery checkboxes, publish-now / schedule radios
- Live listing **Preview** card (title, price, condition, category, area, description, thumbnails)
- Save-heart toggle, "Save draft" and "Review & publish" with validation toast
