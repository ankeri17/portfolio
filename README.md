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
- `public/images/art/` - custom artwork as WebP, two sizes each; sources in `assets/img/`
- `src/components/ArtImage.astro` - the one image component for artwork, cards, and case studies
- `public/fonts/` - self-hosted Newsreader and Instrument Sans (woff2, latin subset)
- `public/__forms.html` - Netlify Forms stub; keep its fields in sync with the contact form
- `docs/MISSING_CONTENT.md` - placeholders and questions that need Erin
- `docs/IMAGE_MANIFEST.md` - every image, where it appears, and what should replace it

## Adding a work entry

Copy an existing file in `src/content/work/`, set `category` (`programs` or `websites`), `status`, and `order`, and write the five case study sections in the body. Set `featured: true` to show it on the Home page. Set `caseStudy: false` for work that isn't ready for its own page.

## Replacing artwork

Put the new PNG in `assets/img/`, then regenerate the WebP copies (needs Python with Pillow):

```sh
python3 -c "
from PIL import Image
name = 'hero-home'  # the file's base name
im = Image.open(f'assets/img/{name}.png').convert('RGB')
for w, suffix in ((1600, ''), (800, '-800')):
    out = im.copy(); out.thumbnail((w, w)); out.save(f'public/images/art/{name}{suffix}.webp', 'WEBP', quality=80, method=6)
"
```

Then update the `width` and `height` wherever the image is placed (page component or work entry frontmatter) if the new file's size differs. `docs/IMAGE_MANIFEST.md` lists every placement.
