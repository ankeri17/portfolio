# Missing content that needs Erin

Everything on this list is either a visible `[PLACEHOLDER: ...]` on the site or a fact the site currently works around. Nothing here was invented to fill the gap (BRAND.md section 12). Remove each placeholder from the source file as you supply the content.

Where to edit: case study text lives in `src/content/work/<entry>.md`. The About timeline lives in `src/pages/about.astro`.

## Facts

| Item | Where it shows | What's needed |
|---|---|---|
| Gloto years | `/work/gloto/` facts block, About timeline | Start and end years (you said five years; the dates are not on the site) |
| Hello Again Properties years | `/work/hello-again-properties/` | Year built, and whether it's still maintained |
| Photographer site | Work page card | Launch date and URL when it goes live, then set `status: 'complete'`, add `link`, and consider `caseStudy: true` |

## Case study questions

Each case study has five sections: Overview, Challenge, My role, Approach, Outcome. The ones below have placeholders. A few sentences per question is plenty; I'll fit them to the voice.

### TD Ameritrade and Charles Schwab (`td-ameritrade-schwab.md`)

1. What was the state of things when you arrived? What was inconsistent or at risk?
2. Which decisions were yours: prioritization, vendor coordination, release go/no-go, something else?
3. One concrete example of how the Tealium or OneTrust rollout was sequenced, or how a privacy gap was found and closed.
4. Any verifiable outcome: number of properties migrated, timeline, audit result, or similar.

### Gloto (`gloto.md`)

1. Company and team size, and the kinds of products it built.
2. The specific operational or delivery problems you were brought in to solve.
3. What EVP of operations covered day to day (staffing, delivery process, finance, vendors), and which decisions were yours.
4. How you ran client services and operations: the scoping, status, and escalation process you put in place.
5. Verifiable outcomes: products launched, client retention, team growth over the five years.

### Sentinel Insights (`sentinel-insights.md`)

1. The specific problems product operations and support were set up to solve.
2. What you owned outright: support, onboarding, hiring, internal process.
3. How you built support and operations from nothing, and how customer feedback got back into the product.
4. Verifiable outcomes: team size at departure, customers supported, processes that outlasted you.

### Inside Out Home Inspector (`inside-out-home-inspector.md`)

1. Anything else the role covered: the website, review management, referral relationships with agents.
2. How the brand and outreach were built: channels that mattered, what the content focused on, how reviews were encouraged.

### Hello Again Properties (`hello-again-properties.md`)

1. Platform or build approach, and anything notable about the design decisions.
2. Any verifiable outcome: booking inquiries, owner feedback.

### ShopHappens (`shophappens.md`)

1. How the site has been built and rebuilt over the years, and what the rebrands and pivots responded to.
2. Any outcome you're comfortable sharing: traffic, revenue model, longevity milestones.

## Things to confirm

- **Availability wording.** The Contact page says you're open to conversations about leadership roles, contract and project work, and website and marketing projects. Check it matches what you want to say while at Red Hat.
- **Red Hat.** The About timeline lists it as the current role with no detail. Add a line about the work if you want one, or leave it as is.
- **Humana.** Listed only on the About timeline with the one verified sentence. If you want it as a case study, it needs answers to the five case study questions above.
- **Project 3 Consulting / Northern.** On the timeline as 2021 to 2025 with a general description. Any specific client engagements worth naming would strengthen the Programs and operations section.
- **Contact form delivery.** The form markup is correct for Netlify Forms, but a submission has not been tested end to end from this environment. Check that form detection is enabled in the Netlify dashboard and send a test message once this branch is deployed.
- **Domain.** `astro.config.mjs`, the sitemap, and canonical tags all point to erinankeny.com. Keep it that way for launch; it just means social previews and canonicals name the final domain while the site lives at erinankeny.netlify.app.
