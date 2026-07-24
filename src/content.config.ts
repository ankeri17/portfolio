import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Work entries. Each markdown file in src/content/work/ becomes an entry on
// the Work page: one paragraph of prose (the markdown body) plus an optional
// `highlight`, a single proof-point line rendered as a plum-ruled callout.
// `featured` puts an entry on the Home page. `order` sorts, lowest first,
// strongest work at the top per BRAND.md section 11.
const work = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/work' }),
  schema: z.object({
    title: z.string(),
    kind: z.string(),
    years: z.string().optional(),
    link: z.string().url().optional(),
    summary: z.string(),
    highlight: z.string().optional(),
    order: z.number(),
    featured: z.boolean().default(false),
  }),
});

export const collections = { work };
