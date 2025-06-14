import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	devIndicators: false,
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'kappa.lol',
				port: '',
				pathname: '**',
				search: '',
			},
		],
	},
	async redirects() {
		return [
			{
				source: '/github',
				destination: 'https://github.com/prodbyeagle',
				permanent: true,
			},
			{
				source: '/discord',
				destination: 'https://discord.gg/KNc4bnA2fU',
				permanent: true,
			},
			{
				source: '/socials',
				destination: 'https://eaglelink.vercel.app/prodbyeagle',
				permanent: true,
			},
		];
	},
};

export default nextConfig;
