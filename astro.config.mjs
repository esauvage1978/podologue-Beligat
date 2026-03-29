// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	// URL définitive du site (obligatoire pour sitemap.xml et liens absolus en build)
	site: 'https://www.example.com',
	// Options (filtres, i18n…) : https://docs.astro.build/en/guides/integrations-guide/sitemap/
	integrations: [sitemap()],
});
