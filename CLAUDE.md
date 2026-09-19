# Yorkshire Fell & Field — website: working instructions

Static marketing site, served by GitHub Pages from `main`. See `README.md` for structure and hosting.

## This repo is PUBLIC

Everything committed here, including this file and the git history, is world-readable, and a push to `main` goes live within minutes. Treat every edit as publishing.

- **Never bring in material from outside this repo** that isn't already meant for the public: no company or registration numbers, legal or trading structure, finances, profit or cost detail, partner agreements, or notes from private planning work.
- Do not add references to any private repo, folder path or planning document.
- Never commit secrets, `.env` files or personal data.

## Copy guardrails

- No invented prices, availability dates, launch date, testimonials or reviews.
- Location stays at "North Yorkshire" / "Yorkshire" — no address or precise location.
- Founders: generic and warm only (e.g. "two lifelong friends with a shared love of the outdoors"). No names, employers, professions or other identifying detail.
- Contact is via the on-site enquiry form only. Do not add an email address or phone number anywhere on the site, and don't invent one. Don't change the form's service or endpoint without being asked.
- No Companies House numbers or legal detail on public pages.
- Anything not yet bookable must say so plainly ("Launching first" / "In development" / "Coming later"). The site states that bookings aren't open; keep that true.
- Out of scope — leave out entirely, don't list as "coming soon": gundog training, falconry, off-road driving experiences, a schools "countryside classroom" package, wellness retreats.
- Tone: country but smart and professional; warm, confident, understated, family-friendly. Nothing gory or trophy-focused — frame fieldsports around skill, stewardship and good food.

## Technical conventions

- Plain HTML, CSS and vanilla JS. No build step, no frameworks, no external fonts, no tracking or cookies.
- Trading name: "Yorkshire Fell & Field". Keep one consistent spelling as plain text/SVG — no raster logos or hard-coded name in image filenames — so any future rename stays a find-and-replace.
- All links relative, so the site works on the custom domain and under the repo sub-path. The custom domain is `yorkshirefellandfield.co.uk` (held in the `CNAME` file) — leave `CNAME` alone unless asked.
- Photography: stock images (Pexels, self-hosted in `images/`) are temporary and each page carries an "illustrative photography" caption. Any new image must be recorded in the `README.md` credits table; don't hotlink third-party images.
- Must stay responsive and mobile-friendly.

## Git

- This repo has a **local** git identity (the GitHub no-reply address). Do not override it with, or copy in, any other/global identity — commits must not carry a work email address.
- If working from another folder, run git against this repo explicitly (`git -C <path-to-this-repo> ...`) so commits and pushes don't land in a different repo.
- Commit only when asked. **Do not push without explicit confirmation** — pushing to `main` deploys the live site. Before a push, show the diff summary and check it against the guardrails above.
- After a push, verify the live site (https://yorkshirefellandfield.co.uk) returns real content; allow a minute or two for Pages to build.
