import type { Metadata } from 'next';
import { Geist_Mono } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from 'next-themes';
import { DottedBackground } from '@/components/dotted-background';
import { ReactScan } from '@/components/react-scan';

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
				className={`${geistMono.variable} antialiased font-mono tracking-tight cursor-default select-text`}>
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
			</body>
		</html>
	);
}
