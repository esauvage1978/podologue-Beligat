/**
 * Données du cabinet — mentions légales, SEO, carte.
 * Mettre à jour siteUrl / astro.config site en même temps.
 */
export const siteConfig = {
	/** Nom d’affichage court */
	brandName: 'Cabinet Beligat',
	siteName: 'Cabinet Beligat — Podologie',
	shortTitle: 'Podologie — Armentières',
	siteUrl: 'https://www.example.com',

	structure: {
		name: 'Pôle Santé Armentières',
		street: '1 rue de Strasbourg',
		postalCode: '59280',
		city: 'Armentières',
		country: 'France',
	},

	/** Repère carte (OpenStreetMap) — immeuble cabinet */
	geo: {
		lat: 50.68565,
		lng: 2.88185,
		/** Cercle indicatif pour les visites à domicile (mètres) — à ajuster avec le cabinet */
		homeVisitRadiusM: 11000,
	},

	practitioners: {
		publicationDirector: {
			civility: 'M.',
			firstName: 'Julien',
			lastName: 'Beligat',
			title: 'Pédicure-podologue',
			rpps: '10101583820',
		},
		associate: {
			firstName: 'Margot',
			lastName: 'Lecomte',
			title: 'Pédicure-podologue',
			rpps: undefined as string | undefined,
		},
	},

	doctolibUrl: 'https://www.doctolib.fr/pedicure-podologue/armentieres/julien-beligat',
	/** Annuaire santé (information publique) */
	leMedecinUrl:
		'https://lemedecin.fr/armentieres/cabinet-beligat-julien/pedicure-podologue/beligat-julien/d042cb7b914c9d5513dfc8de4bc6cb2e/pro/',

	contactEmail: 'contact@example.com',
	/** Si renseigné, affiche le bouton d’appel (format international conseillé, ex. +33320…) */
	phone: '' as string,

	hosting: {
		name: 'À renseigner',
		address: 'Adresse de l’hébergeur',
		phone: '',
	},

	seo: {
		defaultDescription:
			'Pédicures-podologues à Armentières (Pôle Santé) : bilan podologique, semelles orthopédiques sur mesure, podologie du sport, pédicurie. Rendez-vous en ligne.',
		keywords: [
			'pédicure-podologue Armentières',
			'semelles orthopédiques Armentières',
			'bilan podologique',
			'bilan postural',
			'podologie du sport',
			'orthèses plantaires',
			'pédicurie Armentières',
			'cabinet podologie 59280',
		],
	},
} as const;

export const colors = {
	primary: '#2E5262',
	accent: '#CC8233',
} as const;

export function formatStructureAddress(): string {
	const { structure } = siteConfig;
	return `${structure.name}, ${structure.street}, ${structure.postalCode} ${structure.city}, ${structure.country}`;
}

export function formatStreetLine(): string {
	const { structure } = siteConfig;
	return `${structure.street}, ${structure.postalCode} ${structure.city}`;
}
