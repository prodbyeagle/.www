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
};

export default nextConfig;
