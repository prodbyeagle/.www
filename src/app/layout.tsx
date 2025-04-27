import type { Metadata } from 'next';
import { Geist_Mono, Geist } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { Footer } from '@/components/footer';
import { DottedBackground } from '@/components/dotted-background';
import { ReactScan } from '@/components/react-scan';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

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
				className={`${geistMono.variable} ${geistSans.variable} antialiased font-sans tracking-tight cursor-default select-none`}>
				<ThemeProvider
					attribute='class'
					defaultTheme='system'
					enableSystem>
					<div className='container mx-auto'>
						<DottedBackground
							dotColor='var(--ring)'
							spacing={14}
							dotSize={1}
						/>
						{children}
					</div>
				</ThemeProvider>
				<ReactScan />
				<Footer />
			</body>
		</html>
	);
}
