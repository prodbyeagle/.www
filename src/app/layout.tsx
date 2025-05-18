import type { Metadata } from 'next';
import { ThemeProvider } from 'next-themes';
import { Geist_Mono } from 'next/font/google';

import './globals.css';

import { DottedBackground } from '@/components/eagle/dotted';
import { ReactScan } from '@/components/eagle/react-scan';
import { ThemeToggle } from '@/components/eagle/theme-toggle';

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: {
		default: 'prodbyeagle',
		template: '%s | prodbyeagle',
	},
	description:
		'Explore creative projects, experiments, and tools by @prodbyeagle — pushing the limits of frontend design and interaction.',
	icons: {
		icon: {
			url: 'https://kappa.lol/WTiY5',
			type: 'image/png',
		},
	},
	metadataBase: new URL('https://prodbyeagle.vercel.app'),
	openGraph: {
		title: 'prodbyeagle',
		description:
			'Explore creative projects, experiments, and tools by @prodbyeagle — pushing the limits of frontend design and interaction.',
		url: 'https://prodbyeagle.vercel.app',
		siteName: 'prodbyeagle',
		images: [
			{
				url: 'https://kappa.lol/WTiY5',
				width: 512,
				height: 512,
				alt: 'prodbyeagle logo',
			},
		],
		locale: 'en_US',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'prodbyeagle',
		description:
			'Explore creative projects, experiments, and tools by @prodbyeagle — pushing the limits of frontend design and interaction.',
		creator: '@prodbyeagle',
		images: ['https://kappa.lol/WTiY5'],
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en' suppressHydrationWarning>
			<body
				className={`${geistMono.variable} antialiased font-mono tracking-tight cursor-default select-none relative`}>
				<ThemeProvider
					attribute='class'
					defaultTheme='system'
					enableSystem>
					<div className='sticky top-4 z-50 w-full px-4 flex justify-end pointer-events-none'>
						<div className='pointer-events-auto'>
							<ThemeToggle />
						</div>
					</div>

					<div className='fixed inset-0 -z-10'>
						<DottedBackground
							dotColor='var(--ring)'
							spacing={28}
							dotSize={2}
						/>
					</div>

					<div className='container mx-auto relative z-0'>
						{children}
					</div>
				</ThemeProvider>
				<ReactScan />
			</body>
		</html>
	);
}
