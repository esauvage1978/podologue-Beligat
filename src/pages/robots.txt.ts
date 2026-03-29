import type { APIRoute } from 'astro';

/** robots.txt avec Sitemap pointant vers l’URL canonique (dérivée de `site` dans astro.config). */
export const GET: APIRoute = ({ site }) => {
	if (!site) {
		return new Response(
			'User-agent: *\nAllow: /\n\n# Définis `site` dans astro.config.mjs pour générer la ligne Sitemap.\n',
			{ headers: { 'Content-Type': 'text/plain; charset=utf-8' } },
		);
	}
	const sitemapUrl = new URL('sitemap-index.xml', site).href;
	return new Response(
		[
			'User-agent: *',
			'Allow: /',
			'',
			`Sitemap: ${sitemapUrl}`,
			'',
		].join('\n'),
		{ headers: { 'Content-Type': 'text/plain; charset=utf-8' } },
	);
};
