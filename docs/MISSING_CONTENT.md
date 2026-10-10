# Open questions for Erin

The October 2026 content brief resolved every placeholder. The site carries no visible editorial markers. What remains is a short list of facts where the brief and earlier notes disagreed, or where an assumption was made.

## Dates that differ from what Erin said earlier

The brief's dates were used on the site because it is sourced from uploaded records. Confirm them, and the timeline in `src/pages/about.astro` is a one-line change each.

| Role | Erin said earlier | Brief says (now on site) |
|---|---|---|
| Humana, agile coach | 2023 to 2024 | January 2024 to April 2025 |
| Raytheon Solipsys | 2007 to 2011 | July 2006 to March 2011 |

## Assumptions made

- **Bayer Crop Science** has no dates in the brief and is described as consulting work. It appears as an engagement note under Project 3 Consulting on the About timeline, not as its own entry. Move it if it was a separate contract.
- **TD Ameritrade "more than 100 digital properties" and OneTrust.** The brief says to keep the 100-plus figure only if existing project material supports it. It came from the copy Erin wrote for the previous version of the site, so it stays, with OneTrust alongside Tealium as before. Say the word to drop either.
- **Date style.** The brief writes ranges with an en dash (2021–2026). The site uses "2021 to 2026" throughout, matching BRAND.md's no-dash rule and the existing voice.
- **Page titles** follow the brief's capitalization ("Program & Operations Leadership") in the browser tab and search results only. Visible headings stay in sentence case per BRAND.md.

## Still to do when ready

- **Photographer site.** Launch date and URL, then set `status: 'complete'` and add `link` in `src/content/work/photographer-site.md`.
- **Contact form delivery.** Send a test message on the deployed site and confirm it arrives. Form detection may need enabling in the Netlify dashboard.
- **Gloto artwork.** See `docs/IMAGE_MANIFEST.md`.
