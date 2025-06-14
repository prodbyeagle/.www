import { Project } from '@/types';
import { ExternalLink, Github } from 'lucide-react';
import Link from 'next/link';

import { cn } from '@/lib/utils';

import { Badge } from './ui/badge';
import { WordReveal } from './word-reveal';

interface ProjectCardProps {
	project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
	return (
		<div
			className={cn(
				'group relative cursor-default flex flex-col justify-between h-full',
				'shadow-input transition-all duration-200 overflow-hidden rounded-md'
			)}>
			<div className='flex flex-col gap-1 p-4'>
				<h3 className='text-2xl font-semibold'>
					<WordReveal text={project.title} />
				</h3>
				<p className='text-base text-text-secondary line-clamp-3'>
					<WordReveal text={project.description} />
				</p>
				{project.tags?.length > 0 && (
					<div className='flex flex-wrap gap-1 mt-3'>
						{project.tags.slice(0, 5).map((tag) => (
							<Badge
								key={tag}
								variant='outline'
								className={cn(
									tag.toLowerCase() === 'deprecated' &&
										'border-red-500/10'
								)}>
								{tag}
							</Badge>
						))}
					</div>
				)}
			</div>
			{(project.githubUrl || project.url) && (
				<div
					className={cn(
						'absolute top-2 right-2 flex gap-2',
						'opacity-0 group-hover:opacity-100 transition-opacity duration-200'
					)}>
					{project.githubUrl && (
						<Link
							href={project.githubUrl}
							target='_blank'
							rel='noopener noreferrer'
							aria-label='GitHub'>
							<Github
								className={cn(
									'size-4 duration-200 text-muted-foreground hover:text-foreground'
								)}
							/>
						</Link>
					)}
					{project.url && (
						<Link
							href={project.url}
							target='_blank'
							rel='noopener noreferrer'
							aria-label='External Link'>
							<ExternalLink
								className={cn(
									'size-4 duration-200 text-muted-foreground hover:text-foreground'
								)}
							/>
						</Link>
					)}
				</div>
			)}
		</div>
	);
}
