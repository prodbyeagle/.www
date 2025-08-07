'use client';

import { useState } from 'react';

import { BentoGrid } from '@/components/bento-grid';
import { BentoGridItem } from '@/components/bento-grid-item';
import { ProjectCard } from '@/components/project-card';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Switch } from '@/components/ui/switch';
import { WordReveal } from '@/components/word-reveal';

import { PROJECTS } from '@/lib/projects';

export default function Home() {
	const [showDeprecated, setShowDeprecated] = useState(false);
	const [hovered, setHovered] = useState(false);

	const filteredProjects = PROJECTS.filter(
		(project) => showDeprecated || !project.deprecated
	);

	return (
		<div className='pt-14'>
			<header className='pb-8 px-6 md:px-12 lg:px-24'>
				<div className='flex items-center gap-4'>
					<h1 className='text-3xl md:text-4xl font-bold'>
						<WordReveal
							onMouseEnter={() => setHovered(true)}
							onMouseLeave={() => setHovered(false)}
							letter={hovered ? true : false}
							position='bottom'
							speed={hovered ? 0.15 : 0.1}
							text={
								hovered
									? 'prodbyeagle.'
									: 'hello, my name is noah ( eagle )'
							}
						/>
					</h1>
				</div>
			</header>

			<main className='px-6 md:px-12 lg:px-24 pb-24'>
				<section className='mb-8'>
					<div className='max-w-2xl space-y-4'>
						<WordReveal
							speed={0.01}
							className='text-foreground'
							text='a hobby frontend developer and music producer passionate about crafting fast, accessible web experiences.'
						/>
					</div>
				</section>

				<section className='mb-16'>
					<div className='flex items-center justify-between mb-6'>
						<h2 className='text-xl font-medium'>active projects</h2>

						<div className='flex items-center gap-2'>
							<Label htmlFor='toggle-deprecated'>
								show deprecated projects
							</Label>
							<Switch
								id='toggle-deprecated'
								checked={showDeprecated}
								onCheckedChange={setShowDeprecated}
							/>
						</div>
					</div>

					<Separator className='my-6' />

					<BentoGrid>
						{filteredProjects.map((project, i) => (
							<BentoGridItem
								key={project.title}
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
