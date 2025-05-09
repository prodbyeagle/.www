import type { Metadata } from 'next';
import { Geist_Mono } from 'next/font/google';
import { ThemeProvider } from 'next-themes';

import './globals.css';

import { ReactScan } from '@/components/eagle/react-scan';
import { DottedBackground } from '@/components/eagle/dotted';
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
				className={`${geistMono.variable} antialiased font-mono tracking-tight cursor-default select-none`}>
				<ThemeProvider
					attribute='class'
					defaultTheme='system'
					enableSystem>
					<div className='container mx-auto'>
						<div className='absolute top-4 right-4'>
							<ThemeToggle />
						</div>
						<DottedBackground
							dotColor='var(--ring)'
							spacing={14}
							dotSize={1}
						/>
						{children}
					</div>
				</ThemeProvider>
				<ReactScan />
			</body>
		</html>
	);
}
