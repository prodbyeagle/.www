import { type Metadata } from 'next';
import { Inter } from 'next/font/google';

import './globals.css';

import { ReactScan } from '@/components';

import { Gradient } from '@/components/mesh-gradient';

export const metadata: Metadata = {
	title: 'eagle',
	description:
		'a passionate developer building performant, accessible, and modern web experiences.',
	icons: {
		icon: {
			url: 'https://cdn.discordapp.com/emojis/1385016033831555233.gif',
			type: 'image/gif',
		},
	},
	metadataBase: new URL('https://prodbyeagle.vercel.app'),
	openGraph: {
		title: 'prodbyeagle',
		description:
			'a passionate developer building performant, accessible, and modern web experiences.',
		url: 'https://prodbyeagle.vercel.app',
		siteName: 'prodbyeagle',
		locale: 'en_US',
		type: 'website',
	},
	twitter: {
		card: 'summary',
		title: 'prodbyeagle',
		description:
			'a passionate developer building performant, accessible, and modern web experiences.',
		creator: 'prodbyeagle',
	},
};

const font = Inter({
	variable: '--font-sans',
	subsets: ['latin'],
});

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en' suppressHydrationWarning>
			<body
				className={`${font.variable} antialiased font-sans tracking-tight cursor-default select-none relative dark`}>
				<div className='fixed inset-0 -z-10 opacity-50'>
					<Gradient
						colors={[
							'#ca9bee',
							'#8b64a8',
							'#523868',
							'#4f2c74',
							'#ff6f61',
							'#ffcc00',
						]}
					/>
				</div>

				<div className='container mx-auto relative z-0'>{children}</div>
				<ReactScan />
			</body>
		</html>
	);
}
