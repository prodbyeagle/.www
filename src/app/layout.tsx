import type { Metadata } from 'next';
import { Geist_Mono } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { Footer } from '@/components/footer';

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
				className={`${geistMono.variable} antialiased font-mono cursor-default select-none`}>
				<ThemeProvider
					attribute='class'
					defaultTheme='system'
					enableSystem>
					<div className='container mx-auto'>{children}</div>
				</ThemeProvider>
				<Footer />
			</body>
		</html>
	);
}
