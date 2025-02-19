import { writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const baseUrl = 'https://walydentalclinic.vercel.app';
const currentDate = new Date().toISOString().split('T')[0];

const pages = [
  {
    url: '/',
    changefreq: 'weekly',
    priority: '1.0'
  },
  {
    url: '/#services',
    changefreq: 'monthly',
    priority: '0.8'
  },
  {
    url: '/#booking-form',
    changefreq: 'monthly',
    priority: '0.9'
  },
  {
    url: '/#footer',
    changefreq: 'monthly',
    priority: '0.7'
  }
];

const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${pages.map(page => `
  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('')}
</urlset>`;

const outputPath = join(__dirname, 'public', 'sitemap.xml');
writeFileSync(outputPath, sitemapContent);
console.log('Sitemap generated successfully!'); 