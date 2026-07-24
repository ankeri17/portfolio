# BUILD_BRIEF.md

Build brief for **erinankeny.com**. Hand this to Claude Code alongside `BRAND.md`.

---

## 1. Read first

`BRAND.md` is the source of truth for positioning, voice, color, type, layout, and components. Read it before writing any code, and re-read it at the start of every session. This brief covers scope, stack, and sequence. Where the two overlap, `BRAND.md` wins.

---

## 2. What we're building

A four-page personal site: Home, About, Work, Contact. Static, fast, accessible, no CMS, no login, no database.

The site does two jobs at once. It tells a stranger who Erin is and why to hire her, and it demonstrates the craft it describes, because some visitors arrive from a link in another site's footer specifically wondering who built it.

---

## 3. Stack

**Decision needed from Erin before starting.** The platform is part of the pitch, not just an implementation detail, and it has to be something she can maintain and reproduce for a client a year from now.

Recommended: **Astro**, deployed to Netlify, Vercel, or Cloudflare Pages.

- Ships zero JavaScript by default, which suits a content site and makes the performance floor easy to hit
- Components and layouts without a framework to learn
- Work entries can live as markdown files, so adding one later is editing a file rather than editing a page
- Free hosting with automatic deploys from the repo

Defensible alternatives: plain HTML and CSS with no build step at all (simplest possible thing to maintain, more repetition across pages), or Eleventy (similar to Astro, slightly more configuration).

Whatever is chosen, keep dependencies minimal. No CSS framework, no component library, no animation library. The design system in `BRAND.md` is small enough to write by hand, and hand-written CSS is part of what makes this a work sample.

---

## 4. Content status

**No site copy has been written yet.** Assume every word on every page is unwritten unless it appears in `BRAND.md`.

The hero copy in `BRAND.md` section 2 is the only approved-in-draft text, and it is still subject to change.

Follow the "never invent facts" rule in `BRAND.md` section 12 without exception. Job titles, dates, outcomes, metrics, client names, and testimonials come from Erin or they don't appear. Use visible, clearly marked placeholders for everything else so the gaps are obvious and trackable.

Source material Erin can provide on request: her LinkedIn profile export, and links to sites she has built.

---

## 5. Pages

### Home
State the throughline, then route to Work and Contact. Structure:

1. Hero: headline and supporting line from `BRAND.md` section 2
2. A short passage on what she does, drawn from the three doors
3. Two or three featured work entries linking through to the Work page
4. A closing line and a single primary call to action

Keep it short. This page orients someone in ten seconds.

### About
The most important page after Home. The full arc: technical writing, program and project management, agile and transformation work, MarTech and data governance, founding-team operations, and now contract program management plus independent builds. Written as a narrative, not a résumé.

This page also carries the AI point of view. Not as a claim, but as a short account of how she works with AI, including how this site was planned and built. Draft it, mark it clearly, and expect Erin to rewrite it.

Reserve space for a headshot. None exists yet.

### Work
The proof page. Four to six entries, each structured as what it was, her role, and the outcome. See `BRAND.md` section 11 for which entries to feature and which to hold back.

Build entries as content files rather than hardcoded markup so adding one later is easy.

### Contact
One clear ask, one simple form, and a plain statement of what she's open to. Form handling should be a static-friendly service such as Netlify Forms or Formspree. Confirm the choice before wiring it up. Include a mailto fallback.

---

## 6. Build order

**Milestone 1: foundation.** Project scaffold, design tokens from `BRAND.md` sections 4 through 6 as CSS custom properties, base typography, layout shell, header, footer, and the marginalia component. Build one representative page section to prove the system works. Stop and review before continuing.

**Milestone 2: pages.** Home, then Work, then About, then Contact, with placeholders where copy is missing. Responsive at every step, not as a later pass.

**Milestone 3: polish.** Accessibility audit, keyboard navigation, focus states, performance, metadata and Open Graph tags so shared links preview well, 404 page, and a full pass at 320, 768, 1024, and 1440.

Pause for review at the end of each milestone rather than building all three and presenting at the end.

---

## 7. Definition of done for v1

- Four pages built, responsive from 320px up
- Every token traced to `BRAND.md`, with no stray hex values or extra fonts
- Lighthouse 95+ on performance and accessibility
- Keyboard navigable with visible focus throughout
- All content renders without JavaScript
- Contact form delivers to a real inbox, tested end to end
- Zero placeholders remaining, and zero invented facts
- Deployed with the domain connected and HTTPS working

---

## 8. Out of scope for v1

- A writing page or any link to Inside Ops
- Dark mode
- A blog, CMS, or comment system
- Analytics, until Erin decides on a tool and its privacy tradeoffs
- Any AI consulting service page

---

## 9. How to work with Erin on this

She is hands-on by choice, not just reviewing output. Explain the approach before large changes, keep the code readable, and avoid clever abstractions that would be hard to reproduce on a client project later. The site has to be something she can rebuild and maintain herself, or it fails as a work sample.

Flag copy decisions rather than shipping them. Ask before adding a dependency.

---

## 10. Opening prompt

Paste this to start the first session:

> Read BRAND.md and BUILD_BRIEF.md in full before doing anything.
>
> Then, before writing code, give me: your understanding of what this site is and who it's for, the stack you recommend and why, a proposed file structure, and any questions or contradictions you found in the two documents.
>
> Do not start building until I confirm.
