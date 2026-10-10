# Image manifest

Every image the site uses, where it appears, how it is rendered, and what should happen to it next. Swapping an image is a frontmatter or one-line change: work entries set `image`, `imageAlt`, `imageWidth`, and `imageHeight` in `src/content/work/`, and page artwork is placed through the `ArtImage` component in `src/components/ArtImage.astro`.

## Custom artwork (October 2026)

Source PNGs live in `assets/img/` as uploaded. The site serves WebP copies from `public/images/art/`: `name.webp` at up to 1600 wide and `name-800.webp` for small screens. To regenerate after replacing a source file, run the conversion in the README.

| File | Source | Appears on | Rendering | Alt |
|---|---|---|---|---|
| `art/hero-home.webp` (1600 x 900) | `hero-home.png` | Home hero, beside the headline | Natural ratio, eager, high priority | Decorative, `alt=""` |
| `art/hero-operations.webp` (1600 x 900) | `hero-enterprise.png` | Home, What I do, Programs and operations | 3:2 frame, cover | Decorative |
| `art/small-business-websites.webp` (1448 x 1086) | `small-business-websites.png` | Home, What I do, Websites and marketing | 3:2 frame, cover | Decorative |
| `art/hero-work.webp` (1600 x 900) | `hero-work.png` | Work page intro, beside the title | Natural ratio, eager | Decorative |
| `art/schwab-martech.webp` (1448 x 1086) | `schwab-martech.png` | TD Ameritrade card (Home, Work) and case study | Card 4:3 cover; case study natural | Descriptive, in frontmatter |
| `art/gloto.webp` (1448 x 1086) | `gloto.png` | Gloto card (Home, Work) and case study | Card 4:3 cover; case study natural | Descriptive, in frontmatter |
| `art/sentinel-insights.webp` (1448 x 1086) | `sentinel-insights.png` | Sentinel Insights card (Home, Work) and case study | Card 4:3 cover; case study natural | Descriptive, in frontmatter |
| `art/inside-out-home-inspector.webp` (1448 x 1086) | `inside-out-home-inspector.png` | Inside Out card and case study | Card 4:3 cover; case study natural | Descriptive, in frontmatter |
| `art/hello-again-properties.webp` (1448 x 1086) | `hello-again-properties.png` | Hello Again card and case study | Card 4:3 cover; case study natural | Descriptive, in frontmatter |
| `art/shophappens.webp` (1448 x 1086) | `shophappens.png` | ShopHappens card and case study | Card 4:3 cover; case study natural | Descriptive, in frontmatter |
| `art/photography-portfolio.webp` (1448 x 1086) | `photography-portfolio.png` | Photographer card (in progress) | Card 4:3 cover | Descriptive, in frontmatter |
| `art/about.webp` (1122 x 1402, portrait) | `about.png` | About, beside How I approach the work | Natural ratio | Decorative |
| `art/services.webp` (1448 x 1086) | `services.png` | Home closing section, beside the call to action | Natural ratio | Decorative |
| `art/contact.webp` (1448 x 1086) | `contact.png` | Contact, beside the form (after it on phones) | Natural ratio | Decorative |

All fourteen supplied images are in use. None were substituted with screenshots or stock.

## Retired SVG illustrations

The six line-drawn SVGs in `public/images/work/` were removed once every work entry had custom artwork. They remain in git history if ever needed.

## Other images

| File | Appears on | Notes |
|---|---|---|
| `images/headshot.webp` (400 x 400) | About intro | Kept, per the brief. Source in `assets/headshot-original.png`. |
| `og.png` (1200 x 630) | Social sharing on every page | Regenerated with the new headline, ivory background, gold rule, and the hero artwork. |
| `favicon.svg` | Browser tab | Recolored to crimson. |
