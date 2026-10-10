import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Work entries. Each markdown file in src/content/work/ becomes a card on
// the Work page and, when `caseStudy` is true, a detail page at /work/<id>/.
//
// `category` splits the Work page into its two sections and matches the two
// areas on the Home page. `status` sorts complete work above in-progress
// work and labels it. `order` sorts within a category, lowest first.
// `featured` puts an entry in Selected work on the Home page.
//
// The markdown body is the case study. Use `## ` headings in this order:
// Overview, Challenge, My role, Approach, Outcome. Where a section has no
// verified content yet, leave a visible [PLACEHOLDER: ...] line rather than
// filler (BRAND.md section 12).
const work = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/work' }),
  schema: z.object({
    title: z.string(),
    category: z.enum(['programs', 'websites']),
    kind: z.string(),
    organization: z.string().optional(),
    role: z.string().optional(),
    years: z.string().optional(),
    status: z.enum(['complete', 'in-progress']).default('complete'),
    link: z.string().url().optional(),
    summary: z.string(),
    highlight: z.string().optional(),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    order: z.number(),
    featured: z.boolean().default(false),
    caseStudy: z.boolean().default(true),
  }),
});

export const collections = { work };
