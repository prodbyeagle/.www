import { BentoGrid } from '@/components/bento-grid';
import { BentoGridItem } from '@/components/bento-grid-item';
import { ProjectCard } from '@/components/project-card';
import { Separator } from '@/components/ui/separator';
import { WordReveal } from '@/components/word-reveal';

import { PROJECTS } from '@/lib/projects';
import { generateRandomKey } from '@/lib/utils';

export default function Home() {
	return (
		<div className='pt-14'>
			<header className='pb-8 px-6 md:px-12 lg:px-24'>
				<div className='flex items-center gap-4'>
					<h1 className='text-4xl md:text-5xl font-bold select-none'>
						<WordReveal duration={2} text='prodbyeagle' />
					</h1>
				</div>
			</header>

			<main className='px-6 md:px-12 lg:px-24 pb-24'>
				<section className='mb-8'>
					<div className='max-w-2xl space-y-4'>
						<WordReveal
							speed={0.05}
							className='text-text-secondary'
							text='a passionate developer focused on modern web technologies specializing in next.js with typescript to build performant, and user-friendly applications.'
						/>
					</div>
				</section>

				<section className='mb-16'>
					<h2 className='text-xl font-medium'>projects</h2>

					<Separator className='my-6' />

					<BentoGrid>
						{PROJECTS.map((project, i) => (
							<BentoGridItem
								key={generateRandomKey()}
								className={i % 4 === 0 ? 'md:col-span-2' : ''}>
								<ProjectCard project={project} />
							</BentoGridItem>
						))}
					</BentoGrid>
				</section>
			</main>
		</div>
	);
}
