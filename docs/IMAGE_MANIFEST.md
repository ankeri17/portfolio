# Image manifest

Every image the site uses, where it appears, and what it should become in the visual-design phase. Swapping an image is a one-line change: each work entry's `image` and `imageAlt` live in its frontmatter in `src/content/work/`, and the components (`WorkCard.astro`, `work/[id].astro`) read from there. Keep new files in `public/images/`.

Illustrations currently follow BRAND.md: palette from section 4 only, no gradients, no photography except the headshot. The Gloto illustration was added in this phase in the same style so the three Home cards don't repeat an image; it is interim.

## Work illustrations

All six use the same frame: 1280 by 800 SVG, 16:10, opaque panel background (`#EDEBEF`). Shown at 640 by 400 on cards and 680 by 425 on case study pages, `object-fit: cover`, so the composition should hold if the edges are cropped slightly.

| File | Appears on | Subject now | Recommended replacement | Size and ratio | Transparent or opaque | Type |
|---|---|---|---|---|---|---|
| `public/images/work/td-ameritrade-schwab.svg` | Home (wide featured card), Work page, `/work/td-ameritrade-schwab/` | Five threads settling into one band | Keep the convergence idea. Could be refined for the wide card, which crops to roughly 5:4 at tablet and up. | 1280 x 800, 16:10 | Opaque | Illustration |
| `public/images/work/gloto.svg` | Home (featured card), Work page, `/work/gloto/` | Three threads crossing through one hub (interim, added this phase) | A hub-and-spokes or translator idea that reads as "the person in the middle." Highest priority to replace. | 1280 x 800, 16:10 | Opaque | Illustration |
| `public/images/work/sentinel-insights.svg` | Home (featured card), Work page, `/work/sentinel-insights/` | Calm lines, one swell circled | Keep. Fits monitoring. | 1280 x 800, 16:10 | Opaque | Illustration |
| `public/images/work/inside-out-home-inspector.svg` | Work page, `/work/inside-out-home-inspector/` | Spiral unwinding from a center point | Something that reads as brand-building or local reputation. Not a house icon. | 1280 x 800, 16:10 | Opaque | Illustration |
| `public/images/work/hello-again-properties.svg` | Work page, `/work/hello-again-properties/` | Rings on still water | Decide between an illustration and a real screenshot of helloagainproperties.com. If a screenshot: full-page capture of the home page at 1280 wide, cropped to 16:10 from the top. | 1280 x 800, 16:10 | Opaque | Illustration or screenshot |
| `public/images/work/shophappens.svg` | Work page, `/work/shophappens/` | One line finding its way between obstacles | Same decision as above: illustration or a screenshot of shophappens.com. | 1280 x 800, 16:10 | Opaque | Illustration or screenshot |
| `public/images/work/photographer-site.svg` | Work page (in-progress card) | Star trails over a prairie horizon | Keep until launch, then a screenshot of the live site. | 1280 x 800, 16:10 | Opaque | Illustration, later screenshot |

## Other images

| File | Appears on | Subject now | Recommended replacement | Size and ratio | Transparent or opaque | Type |
|---|---|---|---|---|---|---|
| `public/images/headshot.webp` | About page intro | Headshot, brick wall background | Keep, or replace with a shot from the planned photo session. Source is `assets/headshot-original.png`. | 400 x 400, 1:1 (displayed at 200 px) | Opaque | Photo |
| `public/og.png` | Social sharing preview on every page (Open Graph and Twitter) | Current generic share image | A share card with name and the hero line. Consider a per-page variant for case studies later; `Base.astro` would need an `ogImage` prop. | 1200 x 630 | Opaque | Illustration or typographic card |
| `public/favicon.svg` | Browser tab, every page | Current mark | Keep unless the brand mark changes. | Square, any size (SVG) | Transparent | Icon |

## Not yet used, but reserved

- **Case study inline images.** The markdown body of each case study can take images (`![alt](/images/work/...)`) if a diagram or screenshot would help the Approach section. None are used now.
- **Home hero.** No image. BRAND.md keeps the hero typographic; the brief doesn't ask for one.
