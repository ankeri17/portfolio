# erinankeny.com

Personal site for Erin Ankeny. Built with [Astro](https://astro.build), deployed to Netlify.

Read `BRAND.md` (design system, voice, and content rules) and `BUILD_BRIEF.md` (scope, stack, and sequence) before working in this repo.

## Working on the site

```sh
npm install
npm run dev      # local dev server at localhost:4321
npm run build    # static build to dist/
npm run preview  # serve the built site locally
```

## Where things live

- `src/styles/tokens.css` - design tokens, every value traced to BRAND.md
- `src/styles/global.css` - fonts, reset, base typography, buttons, focus states
- `src/layouts/Base.astro` - page shell: head with SEO and social metadata, header, footer
- `src/components/` - header, footer, work card, and the marginalia component
- `src/pages/` - one file per page, plus `work/[id].astro` for case study pages and `sitemap.xml.ts`
- `src/content/work/` - one markdown file per work entry; frontmatter drives the cards, the body is the case study
- `public/fonts/` - self-hosted Newsreader and Instrument Sans (woff2, latin subset)
- `public/__forms.html` - Netlify Forms stub; keep its fields in sync with the contact form
- `docs/MISSING_CONTENT.md` - placeholders and questions that need Erin
- `docs/IMAGE_MANIFEST.md` - every image, where it appears, and what should replace it

## Adding a work entry

Copy an existing file in `src/content/work/`, set `category` (`programs` or `websites`), `status`, and `order`, and write the five case study sections in the body. Set `featured: true` to show it on the Home page. Set `caseStudy: false` for work that isn't ready for its own page.
