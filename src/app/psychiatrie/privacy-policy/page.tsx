import type { Metadata } from 'next';
import Link from 'next/link';
import * as motion from 'motion/react-client';

const FADE_EASE = [0.4, 0, 0.2, 1] as const;

export const metadata: Metadata = {
	title: 'psychiatrie Privacy Policy',
	description:
		'Privacy Policy for the private psychiatrie iOS app.',
	alternates: {
		canonical: '/psychiatrie/privacy-policy',
	},
	openGraph: {
		title: 'psychiatrie Privacy Policy',
		description:
			'Privacy Policy for the private psychiatrie iOS app.',
		url: '/psychiatrie/privacy-policy',
		type: 'article',
	},
};

const SECTIONS = [
	{
		title: 'Information We Collect',
		items: [
			'Previously imported historical data, which may include old Discord IDs, display names, avatar references, author IDs, and timestamps.',
			'App content, including archived speech mistake entries, rules, gallery entries, and leaderboard-related data.',
			'Local settings, including appearance preference, biometric lock preference, and cache data.',
			'Technical data required to run the private app, keep local settings, and load stored content.',
		],
	},
	{
		title: 'How We Use Information',
		items: [
			'To display archived rules, gallery content, speech mistake entries, and leaderboard data.',
			'To keep the app private and unavailable to the public.',
			'To show local notifications when needed.',
			'To cache data locally so the app loads faster and can display recently loaded content.',
		],
	},
	{
		title: 'Services Used',
		items: [
			'Supabase may be used to store app data.',
			'Discord is not connected to the app anymore. Any Discord-related data is historical data imported earlier.',
			'Apple Face ID or Touch ID is verified locally on the device and is not sent to us.',
		],
	},
	{
		title: 'What We Do Not Do',
		items: [
			'We do not provide public access to the app.',
			'We do not connect the app to a live Discord server anymore.',
			'We do not sell personal data.',
			'We do not use advertising trackers.',
			'We do not share data with third parties except for the services required to run the app.',
		],
	},
	{
		title: 'Local Data',
		items: [
			'Avatars, images, rules, gallery data, and speech mistake entries may be cached on the device.',
			'The local cache can be deleted in the app under Settings > Storage.',
			'Removing the app from the device removes locally stored app data according to iOS behavior.',
		],
	},
	{
		title: 'Deletion and Contact',
		items: [
			'If you want your profile or app content deleted, contact the app operator directly.',
			'After deletion, any remaining local copies can be removed by clearing the app cache.',
		],
	},
];

export default function PsychiatriePrivacyPolicyPage() {
	return (
		<main className='min-h-screen px-6 py-16 sm:px-10 sm:py-20 md:px-16 lg:px-24'>
			<motion.article
				className='mx-auto max-w-2xl'
				initial={{ opacity: 0, y: 8 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6, ease: FADE_EASE }}>
				<Link
					href='/'
					className='text-sm text-text-tertiary transition-colors hover:text-text'>
					prodbyeagle.dev
				</Link>

				<header className='mt-12 border-b border-text-tertiary/15 pb-8'>
					<p className='text-sm uppercase tracking-widest text-text-tertiary'>
						psychiatrie
					</p>
					<h1 className='mt-4 text-3xl font-semibold text-text sm:text-4xl'>
						Privacy Policy
					</h1>
					<p className='mt-4 text-base leading-relaxed text-text-secondary'>
						Last updated: May 29, 2026
					</p>
					<p className='mt-6 text-base leading-relaxed text-text-secondary'>
						psychiatrie is a private iOS app. It is not publicly
						available, cannot be accessed by outside users, and is no
						longer linked with a live Discord server. Old Discord-related
						data may exist only because it was imported earlier.
					</p>
				</header>

				<div className='divide-y divide-text-tertiary/15'>
					{SECTIONS.map((section, i) => (
						<motion.section
							key={section.title}
							className='py-8'
							initial={{ opacity: 0, y: 10 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{
								duration: 0.5,
								delay: 0.25 + i * 0.05,
								ease: FADE_EASE,
							}}>
							<h2 className='text-lg font-semibold text-text'>
								{section.title}
							</h2>
							<ul className='mt-4 space-y-3 text-base leading-relaxed text-text-secondary'>
								{section.items.map((item) => (
									<li key={item} className='pl-5 [text-indent:-1.25rem]'>
										<span className='text-text-tertiary'>- </span>
										{item}
									</li>
								))}
							</ul>
						</motion.section>
					))}
				</div>
			</motion.article>
		</main>
	);
}
