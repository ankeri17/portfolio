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
- `src/layouts/Base.astro` - page shell: head, header, footer
- `src/components/` - header, footer, and the marginalia component
- `src/pages/` - one file per page
- `public/fonts/` - self-hosted Newsreader and Instrument Sans (woff2, latin subset)
