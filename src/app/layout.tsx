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
	title: 'prodbyeagle',
	description: '@prodbyeagle 🦅',
	icons: 'https://kappa.lol/WTiY5',
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
							spacing={14}
							dotSize={1}
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
