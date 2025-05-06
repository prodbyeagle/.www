'use client';

import { Clock } from '@/components/clock';
import { ProjectCard } from '@/components/project-card';
import { ThemeToggle } from '@/components/theme-toggle';
import { Button } from '@/components/ui/button';
import { PROJECTS } from '@/lib/projects';
import Link from 'next/link';
import { motion } from 'motion/react';
import { containerVariants } from '@/lib/animations/variants';
import { WordReveal } from '@/components/word-reveal';
import { BentoGridItem } from '@/components/ui/bento-grid-item';
import { BentoGrid } from '@/components/ui/bento-grid';
import { Separator } from '@/components/ui/separator';

export default function Home() {
	return (
		<div className='min-h-screen text-foreground'>
			<div className='absolute top-4 right-4'>
				<ThemeToggle />
			</div>

			<header className='pt-16 pb-8 px-6 md:px-12 lg:px-24'>
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
				<section className='mb-16'>
					<h2 className='text-xl font-medium mb-6 border-b pb-2 select-none'>
						About Me
					</h2>

					<Separator className='my-6' />

					<div className='max-w-2xl space-y-4'>
						<p className='leading-relaxed flex flex-wrap gap-x-1'>
							<WordReveal text='A passionate developer focused on modern web technologies — specializing in Next.js with TypeScript — to build performant, and user-friendly applications.' />
						</p>
						<Link
							href='https://eaglelink.vercel.app/prodbyeagle'
							target='_blank'
							rel='noopener noreferrer'
							aria-label='Visit my EagleLink profile'>
							<Button variant='outline' size='sm'>
								My Links
							</Button>
						</Link>
					</div>
				</section>

				<section className='mb-16'>
					<h2 className='text-xl font-medium'>Projects</h2>

					<Separator className='my-6' />

					<motion.div
						variants={containerVariants}
						initial='hidden'
						animate='show'>
						<BentoGrid>
							{PROJECTS.map((project, i) => (
								<BentoGridItem
									key={project.projectId}
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
