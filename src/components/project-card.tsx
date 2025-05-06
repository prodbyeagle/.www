import type { Project } from '@/lib/projects';
import Image from 'next/image';
import { Github, ExternalLink } from 'lucide-react';
import { Badge } from './ui/badge';

interface ProjectCardProps {
	project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
	return (
		<div
			role='button'
			tabIndex={0}
			className='group relative cursor-default flex flex-col justify-between h-full shadow-input transition-all duration-200 overflow-hidden rounded-md'>
			{project.imageUrl && (
				<div className='absolute inset-0 -z-1'>
					<Image
						src={project.imageUrl}
						alt={project.title}
						fill
						className='object-cover brightness-60 blur-sm'
						sizes='(max-width: 768px) 100vw, 33vw'
						priority
					/>
					<div className='absolute inset-0 bg-gradient-to-t from-background/80 via-background/60 to-transparent' />
				</div>
			)}

			<div className='flex flex-col gap-1 p-4'>
				<h3 className='text-2xl font-semibold text-foreground group-hover:text-primary transition-colors'>
					{project.title}
				</h3>
				<p className='text-md text-muted-foreground line-clamp-3'>
					{project.description}
				</p>

				{project.tags?.length > 0 && (
					<div className='flex flex-wrap gap-1 mt-3'>
						{project.tags.slice(0, 4).map((tag) => (
							<Badge variant='outline' key={tag}>
								{tag}
							</Badge>
						))}
					</div>
				)}
			</div>

			{/* Icon links (visible on hover) */}
			{(project.github || project.url) && (
				<div className='absolute top-2 right-2 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200'>
					{project.github && (
						<a
							href={project.github}
							onClick={(e) => e.stopPropagation()}
							target='_blank'
							rel='noopener noreferrer'
							aria-label='GitHub'>
							<Github className='size-4 text-muted-foreground hover:text-foreground' />
						</a>
					)}
					{project.url && (
						<a
							href={project.url}
							onClick={(e) => e.stopPropagation()}
							target='_blank'
							rel='noopener noreferrer'
							aria-label='External Link'>
							<ExternalLink className='size-4 text-muted-foreground hover:text-foreground' />
						</a>
					)}
				</div>
			)}
		</div>
	);
}
