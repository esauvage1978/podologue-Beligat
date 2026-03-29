/**
 * Fichiers dans /public/images/ — préférer le WebP quand il existe.
 */
export const media = {
	julien: {
		webp: '/images/julien_beligat.webp',
		fallback: '/images/julien_beligat.png',
		alt: 'Julien Beligat, pédicure-podologue, au cabinet d’Armentières.',
	},
	/** Photos du lieu / équipement (ordre = galerie) */
	cabinet: [
		{ src: '/images/2025-01-27.webp', alt: 'Cabinet de podologie — espace de soins à Armentières.' },
		{ src: '/images/2025-01-27_2.webp', alt: 'Cabinet de podologie — vue du plateau technique.' },
		{ src: '/images/2025-01-27_3.webp', alt: 'Cabinet de podologie — accueil et environnement de consultation.' },
		{ src: '/images/2025-01-27_4.webp', alt: 'Cabinet de podologie — détail du cabinet.' },
	],
} as const;
