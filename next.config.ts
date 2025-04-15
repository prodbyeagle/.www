import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
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
