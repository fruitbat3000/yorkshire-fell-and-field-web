# Yorkshire Fell & Field — website

Static marketing site for Yorkshire Fell & Field, a countryside venture in North Yorkshire (fieldsports and country skills, glamping, weddings and events, field-to-fork experiences).

Plain HTML, CSS and a little vanilla JavaScript — no build step, no external fonts, no tracking. Illustrations are hand-drawn inline SVG.

## Structure

- `index.html`, `fieldsports.html`, `glamping.html`, `events.html`, `field-to-fork.html`, `about.html`, `contact.html`, `404.html`
- `css/style.css` — all styling (colour palette defined as CSS variables at the top)
- `js/main.js` — mobile menu and the contact-page email builder
- `favicon.svg`

## Hosting

Served by GitHub Pages from the `main` branch root. All links are relative, so it works under a repository sub-path and will work unchanged on a custom domain (add a `CNAME` file when one is set up).

## To do before launch

- Replace the placeholder contact email (search for `TODO: real contact details`).
- Confirm the final trading name (plain text throughout; no raster logos).
