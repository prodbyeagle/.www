import { WordReveal } from '@/components';
import Link from 'next/link';

import { Button } from '@/components/ui/button';

export default function NotFound() {
	return (
		<div className='min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-24'>
			<div className='w-full max-w-2xl space-y-12 text-center'>
				<header>
					<h1 className='text-4xl md:text-5xl font-bold tracking-tight'>
						<WordReveal
							text='404 - Page Not Found'
							speed={0.04}
							duration={0.6}
							position='top'
						/>
					</h1>
				</header>

				<main className='space-y-6'>
					<section>
						<WordReveal
							speed={0.03}
							duration={1.2}
							position='left'
							className='text-muted-foreground text-base md:text-lg max-w-prose mx-auto'
							text="Looks like you've reached a dead end. But don't worry, you can head back to safer ground."
						/>
					</section>

					<div className='pt-4'>
						<Button variant='ghost' asChild>
							<Link href='/'>Go back home</Link>
						</Button>
					</div>
				</main>
			</div>
		</div>
	);
}
