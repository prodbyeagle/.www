import Link from 'next/link';
import { WordReveal } from '@/components/word-reveal';

const SOCIALS = [
        { title: 'YouTube', url: 'https://youtube.com/@prodbyeagle' },
        { title: 'GitHub', url: 'https://github.com/prodbyeagle' },
        { title: 'Threads', url: 'https://www.threads.net/@prodbyeagle' },
].map((social) => ({
	...social,
	speed: 0.03 + Math.random() * 0.07,
}));

export default function SocialsPage() {
	return (
		<div className="min-h-screen flex flex-col px-6 md:px-12 lg:px-24">
			{/* Back button at the very top */}
			<div className="pt-14">
				<Link
					href="/"
					className="text-text-primary hover:text-text-secondary hover:underline transition-all"
				>
					← @home
				</Link>
			</div>

			{/* Main content vertically centered */}
			<div className="flex flex-col items-center justify-center flex-1 gap-6">
				<h1 className="text-4xl md:text-5xl font-bold">
					<WordReveal text="socials" speed={0.05} letter position="bottom" />
				</h1>

				<div className="flex flex-col gap-4 text-center">
					{SOCIALS.map((social) => (
						<a
							key={social.title}
							href={social.url}
							target="_blank"
							rel="noopener noreferrer"
							className="text-xl md:text-2xl text-text-primary hover:underline hover:scale-105 hover:font-medium transition-all duration-300"
						>
							<WordReveal
								text={social.title}
								speed={social.speed}
								letter
								position="left"
							/>
						</a>
					))}

					<p className="text-sm text-text-secondary mt-6">
						all other pages are not me.
					</p>
				</div>
			</div>
		</div>
	);
}
