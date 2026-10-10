# Image manifest

Every image the site uses, where it appears, how it is rendered, and what should happen to it next. Swapping an image is a frontmatter or one-line change: work entries set `image`, `imageAlt`, `imageWidth`, and `imageHeight` in `src/content/work/`, and page artwork is placed through the `ArtImage` component in `src/components/ArtImage.astro`.

## Custom artwork (October 2026)

Source PNGs live in `assets/img/` as uploaded. The site serves WebP copies from `public/images/art/`: `name.webp` at up to 1600 wide and `name-800.webp` for small screens. To regenerate after replacing a source file, run the conversion in the README.

| File | Source | Appears on | Rendering | Alt |
|---|---|---|---|---|
| `art/hero-home.webp` (1600 x 900) | `hero-home.png` | Home hero, beside the headline | Natural ratio, eager, high priority | Decorative, `alt=""` |
| `art/hero-operations.webp` (1600 x 900) | `hero-enterprise.png` | Home, What I do, Programs and operations; also the Gloto card and case study until a Gloto piece exists | 3:2 frame, cover; card 4:3 cover; case study natural | Decorative in What I do; descriptive on Gloto |
| `art/small-business-websites.webp` (1448 x 1086) | `small-business-websites.png` | Home, What I do, Websites and marketing | 3:2 frame, cover | Decorative |
| `art/hero-work.webp` (1600 x 900) | `hero-work.png` | Work page intro, beside the title | Natural ratio, eager | Decorative |
| `art/schwab-martech.webp` (1448 x 1086) | `schwab-martech.png` | TD Ameritrade card (Home, Work) and `/work/td-ameritrade-schwab/` | Card 4:3 cover; case study natural | Descriptive, in frontmatter |
| `art/sentinel-insights.webp` (1448 x 1086) | `sentinel-insights.png` | Sentinel Insights card (Home, Work) and `/work/sentinel-insights/` | Card 4:3 cover; case study natural | Descriptive, in frontmatter |
| `art/about.webp` (1122 x 1402, portrait) | `about.png` | About, beside How I approach the work | Natural ratio | Decorative |
| `art/services.webp` (1448 x 1086) | `services.png` | Home closing section, beside the call to action | Natural ratio | Decorative |
| `art/contact.webp` (1448 x 1086) | `contact.png` | Contact, beside the form (after it on phones) | Natural ratio | Decorative |

All nine supplied images are in use. None were substituted with screenshots or stock.

## Recolored SVG illustrations

These predate the custom set and were recolored to the new palette so they sit alongside it. They are thinner in feel than the painterly artwork and are the next candidates for replacement. Each is 1280 x 800, opaque, `#F2ECE1` background.

| File | Appears on | Subject now | Recommended replacement |
|---|---|---|---|
| `work/gloto.svg` | Not used | Three threads through one hub | Gloto currently reuses `hero-operations.webp`. Erin will supply a dedicated Gloto piece; point `image` in `gloto.md` at it when it arrives. |
| `work/inside-out-home-inspector.svg` | Inside Out card, case study | Spiral unwinding | Custom piece on local reputation or brand-building. |
| `work/hello-again-properties.svg` | Hello Again card, case study | Rings on water | Custom piece, or a real screenshot of helloagainproperties.com once that decision is made. |
| `work/shophappens.svg` | ShopHappens card, case study | A line finding its way | Custom piece, or a screenshot of shophappens.com. |
| `work/photographer-site.svg` | Photographer card (in progress) | Star trails over prairie | Keep until launch, then a screenshot. |
| `work/td-ameritrade-schwab.svg`, `work/sentinel-insights.svg` | Not used | Replaced by custom artwork | Can be deleted once the custom set is final. |

## Other images

| File | Appears on | Notes |
|---|---|---|
| `images/headshot.webp` (400 x 400) | About intro | Kept, per the brief. Source in `assets/headshot-original.png`. |
| `og.png` (1200 x 630) | Social sharing on every page | Regenerated with the new headline, ivory background, gold rule, and the hero artwork. |
| `favicon.svg` | Browser tab | Recolored to crimson. |
