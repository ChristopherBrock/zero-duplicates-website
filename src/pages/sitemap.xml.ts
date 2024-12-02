// File: pages/sitemap.xml.ts
import { supportedLanguages } from '../i18n/config';
import type { APIRoute } from 'astro';

const baseUrl = 'https://zeroduplicates.com';

function getPages() {
  const pages = [
    '', // home page
    '/privacy',
    '/terms',
    '/imprint'
  ];

  // Generate language-specific URLs
  const allUrls = supportedLanguages.flatMap(lang => 
    pages.map(page => ({
      url: `${baseUrl}/${lang}${page}`,
      lastmod: new Date().toISOString().split('T')[0],
      // Higher priority for home pages
      priority: page === '' ? '1.0' : '0.8',
      // More frequent changes for home pages
      changefreq: page === '' ? 'weekly' : 'monthly'
    }))
  );

  return allUrls;
}

export const GET: APIRoute = async () => {
  const pages = getPages();
  
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
            xmlns:xhtml="http://www.w3.org/1999/xhtml">
      ${pages.map(page => `
        <url>
          <loc>${page.url}</loc>
          <lastmod>${page.lastmod}</lastmod>
          <changefreq>${page.changefreq}</changefreq>
          <priority>${page.priority}</priority>
          ${supportedLanguages.map(lang => `
            <xhtml:link 
              rel="alternate" 
              hreflang="${lang}" 
              href="${page.url.replace(/\/(en|de)/, `/${lang}`)}"
            />`).join('')}
        </url>
      `).join('')}
    </urlset>`.trim(),
    {
      headers: {
        'Content-Type': 'application/xml',
      },
    }
  );
};