# BRAND.md

Brand and design guide for **erinankeny.com**.

Read this file before starting any work in this repo. Every color, typeface, and spacing decision comes from here. If something isn't covered, ask rather than inventing a new token.

Status: working draft. Copy in the "Positioning" section is not final and is subject to Erin's approval.

---

## 1. What this site is

A personal site for Erin Ankeny. It is a supplement to her LinkedIn profile, not a lead-generation page for any single service.

LinkedIn holds a chronological list of jobs in a format someone else controls. This site does what that can't: it names the throughline across twenty years, shows the work in depth, and reads in her own voice.

**Audiences, in order:**

1. Hiring managers and contract clients evaluating her for program and operations work
2. People arriving from a link on her LinkedIn, in an email signature, or after a conversation
3. Small-business owners who might hire her to build a site, including referral traffic from a photographer's site footer

**The site is also a work sample.** Visitors from the footer link are people who liked a website enough to wonder who built it. The site itself has to demonstrate the craft it describes. Templated output fails the brief.

---

## 2. Positioning

**Throughline:** Erin is the glue between people with different goals. She gets groups who use different vocabularies for the same thing working from the same page, and the result is that work ships.

This is provable, not aspirational. She was the communications hub between customers, engineering, and management at Gloto, drove communication and collaboration across the enterprise at TD Ameritrade, and spent the first years of her career as a technical writer making what engineers know legible to people who aren't engineers. Same job, different titles.

**Hero copy (draft):**

> I help people who don't speak the same language build things together.
>
> Twenty years getting technical teams and everyone else to understand each other. Lately, one of them isn't human.

**Ways to work with her (three doors, one house):**

1. Program and operations leadership, including transformation work
2. MarTech, data, and privacy and consent governance
3. Web and brand work for small businesses, with property and home services as the area she knows best

Writing is not a door. It's the first job she held and part of why the translation claim holds up, so it belongs in the About page narrative. Her Substack, Inside Ops, is **not linked from this site for now** at her request. Do not add it, reference it, or build a writing page until she says otherwise.

**AI is a point of view, not a service.** Do not build a services page or offer around AI consulting. It shows up instead on the About page and in how this site was made. She planned this project by deciding which work belonged to a human and which to a model, and that judgment is the story. Never write copy that positions her as an "AI enthusiast" or "AI expert." Show the practice, don't claim the title.

**Do not use the phrase "Swiss Army knife" in site copy.** It is true of her and it converts nobody, because a stranger reads it as "no specialty." Her range is a selling point only when the throughline is stated sharply enough that breadth reads as range instead of scatter.

---

## 3. Voice

Direct, warm, understated. She writes like a person talking, not a brand.

**Rules, all enforced:**

- No em dashes anywhere. Use a comma, a period, or a rewrite.
- Never use the word "quietly."
- No corporate jargon or hollow buzzwords. Banned: leverage, seamless, unlock, empower, synergy, best-in-class, passionate about, cutting-edge, solutions (as a noun for work).
- No exclamation points in interface or body copy.
- Sentence case for all headings, buttons, labels, and navigation. Never Title Case.
- Serial comma, always. This is a stated preference.
- Contractions are fine and preferred.
- Active voice, verb first. "Start a project," not "Project inquiry."
- Specific beats clever. Concrete outcomes beat adjectives.
- No "click here." Link text names the destination.

**Length:** short paragraphs, two to four sentences. No walls of text. If a section needs more than four paragraphs, it probably needs a subhead or a cut.

---

## 4. Color

Direction: **Column.** Editorial, near-white, one strong accent used with restraint.

```css
:root {
  --paper:       #FDFDFD;  /* page background */
  --panel:       #EDEBEF;  /* section tint, cards, code blocks */
  --border:      #E2E0E5;  /* hairline rules */
  --ink:         #16151A;  /* headings, primary text */
  --muted:       #6E6A75;  /* secondary text, captions, metadata */
  --plum:        #6B2049;  /* accent: links, buttons, marks */
  --plum-hover:  #551639;  /* accent hover and active */
  --plum-tint:   #F5EDF1;  /* accent wash, used rarely */
}
```

**Rules:**

- Accent is for links, one primary button per view, and small editorial marks. It is not a background color for large areas.
- No gradients, drop shadows, glows, or blur effects anywhere.
- Borders are hairlines. `1px solid var(--border)`, or `0.5px` where the browser supports it.
- Contrast floor is WCAG AA. `--muted` on `--paper` passes for body text; do not lighten it further.
- Never place `--muted` text on `--plum`. White (`--paper`) only.
- No dark mode for v1. Revisit after launch.

---

## 5. Typography

Two families, both from Google Fonts. Self-host or preload; do not add a third family.

- **Display: Newsreader.** Headlines, page titles, pull quotes, and italic asides. Weights 400 and 500 only. Never 600 or 700, the serif gets muddy.
- **Body and UI: Instrument Sans.** Body copy, navigation, buttons, labels, captions. Weights 400 and 500 only.

```css
--font-display: 'Newsreader', Georgia, serif;
--font-body:    'Instrument Sans', system-ui, sans-serif;
```

**Type scale:**

| Role | Family | Size (desktop) | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Hero headline | Display | 52px | 400 | 1.12 | -0.01em |
| Page title | Display | 40px | 400 | 1.15 | -0.01em |
| Section heading | Display | 28px | 400 | 1.25 | 0 |
| Subheading | Body | 18px | 500 | 1.4 | 0 |
| Body | Body | 17px | 400 | 1.65 | 0 |
| Small / caption | Body | 14px | 400 | 1.5 | 0 |
| Eyebrow / aside | Display italic | 15px | 400 | 1.4 | 0 |

Mobile: hero drops to 34px, page title to 28px, section heading to 22px. Body stays 17px. Nothing below 14px anywhere.

**Rules:**

- The serif is for display only. Never set body paragraphs in Newsreader.
- Measure: body copy caps at 68 characters. Wide-open lines are the fastest way to make an editorial site look unedited.
- Newsreader italic is the accent voice, used for eyebrows, asides, and marginalia. Do not italicize whole paragraphs.
- No all-caps anywhere, including eyebrows and labels.

---

## 6. Layout

A single-column editorial page with a margin column for asides at wide viewports.

- Content column: 680px max width, centered.
- Total canvas with margin column: 1040px max.
- Page gutters: 24px mobile, 48px tablet, 64px desktop.
- Spacing scale, use these values only: 4, 8, 12, 16, 24, 32, 48, 64, 96, 128 (px).
- Vertical rhythm between major sections: 96px desktop, 64px mobile.
- Corner radius: 4px for buttons and inputs, 8px for cards. Nothing more rounded. No pills except the primary button.

**Signature element: marginalia.** Short asides set in Newsreader italic, in `--muted`, sitting in the left margin column beside the paragraph they annotate. At viewports under 1040px they collapse inline above the paragraph, indented with a left hairline rule. This is the one memorable device on the site and it is earned: her career started in technical writing, and an annotated page is the honest visual for someone whose job is making things legible.

Use marginalia sparingly. Two or three per page at most. If everything is annotated, nothing is.

---

## 7. Components

**Links.** Two cases, and the distinction is deliberate.

- *In body text:* `--plum` with a resting underline in a softened plum, going full strength on hover, 2px offset. The underline is required. Color alone cannot be the only thing distinguishing a link from surrounding text, and WCAG AA is the floor for this site. Do not remove it.
- *Navigation, buttons, and work cards:* `--plum` with no underline at rest, underline on hover with a 2px offset. These are unambiguous as interactive elements from position and treatment, so the underline isn't needed.

External links get no icon.

**Primary button.** `--plum` fill, `--paper` text, 999px radius, 10px by 20px padding, Instrument Sans 500 at 15px. Hover goes to `--plum-hover`. One per view.

**Secondary button.** Transparent fill, 1px `--border`, `--ink` text, 4px radius. Hover fills `--panel`.

**Cards.** Only for work entries. `--paper` background, 1px `--border`, 8px radius, 24px padding. No shadow. Hover raises the border to `--ink` at 20 percent, nothing else moves.

**Navigation.** Text links, Instrument Sans 500 at 15px, no background, no border. Current page marked with a 2px `--plum` underline. Mobile collapses to a plain stacked menu, not a slide-out drawer.

**Footer.** Hairline rule, then contact and links in `--muted` at 14px. No social icon row.

**Rules:**

- No icons unless one does real work. No decorative icon grids.
- No numbered markers (01 / 02 / 03) unless the content is an actual sequence.
- No stat cards, no big-number-with-small-label hero blocks.
- No stock photography. Real photos only, from the shoot.

---

## 8. Motion

Restrained. Motion should feel like paper settling, not like a product demo.

- Transitions: 150ms ease-out on hover states. That's the default and usually the whole budget.
- One page-load reveal is allowed: hero text fading up 8px over 400ms. Nothing else animates on load.
- No scroll-triggered animation, parallax, counters, or typewriter effects.
- Respect `prefers-reduced-motion: reduce` by disabling all transitions and reveals.

---

## 9. Quality floor

Non-negotiable, and not worth announcing on the site.

- Responsive from 320px up. Test at 320, 768, 1024, 1440.
- Visible keyboard focus on every interactive element. Use a 2px `--plum` outline with 2px offset. Never remove outlines without a replacement.
- Semantic HTML. One `h1` per page, headings in order, real landmarks (`header`, `nav`, `main`, `footer`).
- All images have meaningful alt text. Decorative images get `alt=""`.
- Lighthouse: 95+ on performance and accessibility before launch.
- Fonts preloaded, `font-display: swap`, no layout shift on load.
- Works without JavaScript for all content. JS is progressive enhancement only.

---

## 10. Anti-patterns

Things that would make this site look like every other AI-built site. Avoid all of them.

- Warm cream background with a terracotta or clay accent. This is the current default look and reads as a tell.
- Near-black page with one acid-bright accent.
- Gradient text, gradient buttons, gradient anything.
- Glassmorphism, frosted panels, heavy blur.
- Three-column feature grids with an icon, a bold heading, and two lines of filler.
- Testimonial carousels, especially with placeholder quotes.
- Emoji in headings or body copy.
- "Let's build something amazing together" and its relatives.
- Bolded phrases scattered mid-sentence for emphasis.

---

## 11. Pages

Four pages for v1. The fuller project plan lives alongside this file.

| Page | Job |
|---|---|
| Home | State the throughline, then route to work and contact. |
| About | The full arc and the person. The most important page after Home. |
| Work | Proof. Entries structured as what it was, her role, the outcome. |
| Contact | One clear ask, one simple form, and what she's open to. |

ShopHappens, her affiliate content site, belongs as an entry on the Work page rather than as a page of its own. It is proof that she builds and runs something end to end, and it shares the values thread that runs through her career: helping people navigate complicated systems. Frame it that way. Do not list it as a bare credential.

**Work page curation.** Feature four to six entries, not everything she has ever touched. Quantity dilutes proof. Each featured entry carries real weight: what it was, her role, the outcome. Candidates, strongest first:

- The photographer's site (in progress). Carries design craft and is the source of referral traffic.
- helloagainproperties.com. A complete multi-page site for a vacation rental business, with real photography and copy that has a voice.
- Brand and marketing for a family-owned home inspection business, roughly seven years, now closed. The strongest small-business entry because it covers the whole marketing function rather than a single build.
- ShopHappens. Building and operating something end to end over years.
- One or two enterprise entries from her program and MarTech work.

Weaker material, which may be named in a short "also build and maintain" line but should not be featured: blbrenovations.com (a single-page contact site) and her Etsy shop (a platform storefront, so it demonstrates no build craft). A thin entry sitting next to a strong one lowers the read on both.

A writing page may return later. Leave room for it in the navigation structure, but do not build or stub it now.

**Real estate.** Erin has been a licensed realtor since 2016 and works as a relocation specialist through a nationwide referral network. This is not a fourth door and does not belong on the Home page or as a featured Work entry. It goes in two places: one line in the About narrative with a link, and a link in the footer. Her referral page and her real estate Facebook page are both platform-controlled, so they demonstrate no build craft and should never be presented as portfolio pieces.

It does earn a mention in the framing of her small-business work, though. The property thread runs deep and covers most of the life of a house. She sold residential real estate and still handles relocation referrals, ran branding, social media, and marketing for a family-owned home inspection business for roughly seven years (now closed), and built sites for a renovation company and a vacation rental business. That makes property and home services a real niche rather than a coincidence.

Two things follow from that, and both should shape how the small-business work is described:

- She has worked inside these businesses, not only built pages for them. She is credible with this kind of client before the first meeting.
- The home inspection engagement was the full marketing function over years, not a website. That is a stronger offer than web design, because a small business owner wants customers rather than a site. Describe the work at that level.

Present the home inspection work accurately: consulting for a small family-owned business, past tense, with the years attached. Do not inflate it into arm's-length agency work, and do not name the family member involved. Do not overclaim the niche as a specialization she actively markets, because she has not marketed it that way before.

---

## 12. Working in this repo

- Read this file at the start of every session.
- Derive every color and type value from sections 4 and 5. Do not introduce new hex values or font families.
- When a copy decision comes up that isn't covered here, draft it and flag it rather than shipping it. Copy is Erin's call.
- Do not add analytics, tracking, or third-party embeds without asking.
- Keep the dependency list short. This site should be maintainable by one person a year from now.

**Never invent facts about Erin.** This is the most important rule in the file. Do not write job titles, dates, employers, project outcomes, metrics, percentages, client names, testimonials, or quotes unless they appear in a source she has provided. A plausible-sounding invented number on a credibility site is worse than an empty section, because a serious reader will probe it.

Where real content is missing, write a clearly marked placeholder such as `[PLACEHOLDER: outcome for TD Ameritrade entry, needs Erin]` and keep it visible in the page. Do not fill gaps with generic filler that reads like finished copy. Placeholders are tracked and removed before launch; invented copy is not, because nobody knows it's there.
