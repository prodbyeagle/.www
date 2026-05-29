import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: 'https://prodbyeagle.dev',
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 1,
		},
		{
			url: 'https://prodbyeagle.dev/psychiatrie',
			lastModified: new Date('2026-05-29'),
			changeFrequency: 'monthly',
			priority: 0.8,
		},
		{
			url: 'https://prodbyeagle.dev/psychiatrie/privacy-policy',
			lastModified: new Date('2026-05-29'),
			changeFrequency: 'yearly',
			priority: 0.7,
		},
	];
}
