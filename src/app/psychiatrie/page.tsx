import type { Metadata } from 'next';
import Link from 'next/link';
import * as motion from 'motion/react-client';

const FADE_EASE = [0.4, 0, 0.2, 1] as const;

export const metadata: Metadata = {
	title: 'psychiatrie',
	description:
		'A private iOS app for archived rules, speech mistakes, gallery moments, and leaderboard data.',
	alternates: {
		canonical: '/psychiatrie',
	},
	openGraph: {
		title: 'psychiatrie',
		description:
			'A private iOS app for archived rules, speech mistakes, gallery moments, and leaderboard data.',
		url: '/psychiatrie',
		type: 'website',
	},
};

const FEATURES = [
	{
		title: 'Versprecher',
		description:
			'Browse and preserve old speech mistake entries from the private archive.',
	},
	{
		title: 'Regeln',
		description:
			'Keep archived rules available in one private place.',
	},
	{
		title: 'Rangliste',
		description:
			'View historical leaderboard standings with animated podium visuals.',
	},
	{
		title: 'Galerie',
		description:
			'Keep private gallery moments available on device with cached loading.',
	},
];

const PREVIEW_ROWS = [
	['Versprecher', '42 neue Einträge'],
	['Rangliste', 'Top 3 aktualisiert'],
	['Regeln', 'Live synchronisiert'],
];

export default function PsychiatrieHomePage() {
	return (
		<main className='min-h-screen overflow-hidden'>
			<section className='px-6 py-16 sm:px-10 sm:py-20 md:px-16 lg:px-24'>
				<div className='mx-auto grid max-w-6xl gap-14 lg:grid-cols-[1fr_390px] lg:items-center'>
					<motion.div
						initial={{ opacity: 0, y: 8 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, ease: FADE_EASE }}>
						<Link
							href='/'
							className='text-sm text-text-tertiary transition-colors hover:text-text'>
							prodbyeagle.dev
						</Link>
						<p className='mt-16 text-sm uppercase tracking-widest text-text-tertiary'>
							private ios app
						</p>
						<h1 className='mt-5 text-5xl font-semibold leading-none text-text sm:text-7xl'>
							psychiatrie
						</h1>
						<p className='mt-7 max-w-xl text-lg leading-relaxed text-text-secondary'>
							A private iOS app for archived speech mistakes, rules,
							gallery moments, and leaderboard data. It is not publicly
							available and has no live Discord server connection.
						</p>
						<div className='mt-10 flex flex-wrap gap-3'>
							<Link
								href='/psychiatrie/privacy-policy'
								className='border border-text/20 px-5 py-3 text-sm text-text transition-colors hover:border-text/50'>
								Privacy Policy
							</Link>
							<a
								href='mailto:hello@prodbyeagle.dev'
								className='px-5 py-3 text-sm text-text-tertiary transition-colors hover:text-text'>
								Contact
							</a>
						</div>
					</motion.div>

					<motion.div
						className='relative mx-auto aspect-[9/19] w-full max-w-[300px] rounded-[2.25rem] border border-text/15 bg-text p-3 shadow-2xl shadow-black/20 dark:bg-black'
						initial={{ opacity: 0, y: 12 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.15, ease: FADE_EASE }}>
						<div className='h-full overflow-hidden rounded-[1.75rem] bg-background'>
							<div className='flex items-center justify-between border-b border-text-tertiary/15 px-5 py-4'>
								<div>
									<p className='text-xs text-text-tertiary'>Heute</p>
									<p className='text-lg font-semibold text-text'>
										psychiatrie
									</p>
								</div>
								<div className='grid h-9 w-9 place-items-center rounded-full bg-text text-sm text-background'>
									p
								</div>
							</div>

							<div className='space-y-4 p-5'>
								<div className='border border-text-tertiary/15 p-4'>
									<p className='text-xs uppercase tracking-widest text-text-tertiary'>
										rangliste
									</p>
									<div className='mt-4 flex items-end gap-3'>
										<div className='h-20 flex-1 bg-text/20' />
										<div className='h-28 flex-1 bg-text' />
										<div className='h-16 flex-1 bg-text/40' />
									</div>
								</div>

								<div className='space-y-3'>
									{PREVIEW_ROWS.map(([title, meta]) => (
										<div
											key={title}
											className='flex items-center justify-between border border-text-tertiary/15 px-4 py-3'>
											<div>
												<p className='text-sm font-semibold text-text'>
													{title}
												</p>
												<p className='mt-1 text-xs text-text-tertiary'>
													{meta}
												</p>
											</div>
											<div className='h-2 w-2 rounded-full bg-text' />
										</div>
									))}
								</div>
							</div>
						</div>
					</motion.div>
				</div>
			</section>

			<motion.section
				className='border-y border-text-tertiary/15 px-6 py-14 sm:px-10 md:px-16 lg:px-24'
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.5, delay: 0.35, ease: FADE_EASE }}>
				<div className='mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-4'>
					{FEATURES.map((feature, i) => (
						<motion.article
							key={feature.title}
							className='py-3'
							initial={{ opacity: 0, y: 10 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{
								duration: 0.5,
								delay: 0.45 + i * 0.06,
								ease: FADE_EASE,
							}}>
							<h2 className='text-base font-semibold text-text'>
								{feature.title}
							</h2>
							<p className='mt-3 text-sm leading-relaxed text-text-secondary'>
								{feature.description}
							</p>
						</motion.article>
					))}
				</div>
			</motion.section>

			<motion.section
				className='px-6 py-14 sm:px-10 md:px-16 lg:px-24'
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.5, delay: 0.65, ease: FADE_EASE }}>
				<div className='mx-auto flex max-w-6xl flex-col gap-4 text-sm text-text-tertiary sm:flex-row sm:items-center sm:justify-between'>
					<p>Private app. No public access.</p>
					<Link
						href='/psychiatrie/privacy-policy'
						className='transition-colors hover:text-text'>
						Privacy Policy
					</Link>
				</div>
			</motion.section>
		</main>
	);
}
