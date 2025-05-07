'use client';

import { Clock } from '@/components/clock';
import { ProjectCard } from '@/components/project-card';
import { ThemeToggle } from '@/components/eagle/theme-toggle';
import { Button } from '@/components/ui/button';
import { PROJECTS } from '@/lib/projects';
import Link from 'next/link';
import { motion } from 'motion/react';
import { containerVariants } from '@/lib/animations/variants';
import { WordReveal } from '@/components/word-reveal';
import { BentoGridItem } from '@/components/bento-grid-item';
import { BentoGrid } from '@/components/bento-grid';
import { Separator } from '@/components/ui/separator';
import { generateRandomKey } from '@/lib/utils';

export default function Home() {
	return (
		<div>
			<div className='absolute top-8 right-8'>
				<ThemeToggle />
			</div>

			<header className='mt-14 pb-8 px-6 md:px-12 lg:px-24'>
				<div className='flex items-center gap-4'>
					<h1 className='text-2xl md:text-3xl font-bold select-none'>
						<WordReveal text='prodbyeagle' />
					</h1>
					<div className='font-mono items-baseline text-lg'>
						<Clock />
					</div>
				</div>
			</header>

			<main className='px-6 md:px-12 lg:px-24 pb-24'>
				<section className='mb-8'>
					<div className='max-w-2xl space-y-4'>
						<p className='leading-relaxed flex flex-wrap gap-x-1'>
							<WordReveal text='a passionate developer focused on modern web technologies — specializing in next.js with typescript — to build performant, and user-friendly applications.' />
						</p>
						<Link
							href='https://eaglelink.vercel.app/prodbyeagle'
							target='_blank'
							rel='noopener noreferrer'
							aria-label='Visit my EagleLink profile'>
							<Button variant='ghost'>my socials</Button>
						</Link>
					</div>
				</section>

				<section className='mb-16'>
					<h2 className='text-xl font-medium'>projects</h2>

					<Separator className='my-6' />

					<motion.div
						variants={containerVariants}
						initial='hidden'
						animate='show'>
						<BentoGrid>
							{PROJECTS.map((project, i) => (
								<BentoGridItem
									key={generateRandomKey()}
									className={
										i % 4 === 0 ? 'md:col-span-2' : ''
									}>
									<ProjectCard project={project} />
								</BentoGridItem>
							))}
						</BentoGrid>
					</motion.div>
				</section>
			</main>
		</div>
	);
}
