import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

// Sitemap generated at build time so case study pages are never missing
// from it. No dependency needed. /thanks/ and /404 are left out on
// purpose. The site URL comes from astro.config.mjs.
export const GET: APIRoute = async ({ site }) => {
  const base = site ?? new URL('https://erinankeny.com');
  const caseStudies = await getCollection('work', (entry) => entry.data.caseStudy);

  const paths = [
    '/',
    '/about/',
    '/work/',
    ...caseStudies.map((entry) => `/work/${entry.id}/`),
    '/contact/',
  ];

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${paths.map((path) => `  <url><loc>${new URL(path, base).href}</loc></url>`).join('\n')}
</urlset>
`;

  return new Response(body, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
