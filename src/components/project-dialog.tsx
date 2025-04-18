'use client';

import { Project } from '@/lib/data';
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from './ui/badge';
import { ExternalLink } from 'lucide-react';
import Image from 'next/image';

interface ProjectDialogProps {
	project: Project;
	isOpen: boolean;
	onOpenChange: (open: boolean) => void;
}

export function ProjectDialog({
	project,
	isOpen,
	onOpenChange,
}: ProjectDialogProps) {
	return (
		<Dialog open={isOpen} onOpenChange={onOpenChange}>
			<DialogContent className='max-w-2xl'>
				<DialogHeader>
					<DialogTitle className='flex items-center gap-2'>
						{project.title}
					</DialogTitle>
				</DialogHeader>

				<div className='space-y-4'>
					{project.imageUrl && (
						<div className='relative w-full h-48 rounded-md overflow-hidden'>
							<div className='absolute inset-0 bg-muted/20 animate-pulse' />
							<Image
								src={project.imageUrl}
								alt={project.title}
								fill
								className='object-cover'
								sizes='(max-width: 768px) 100vw, 50vw'
							/>
						</div>
					)}

					<div>
						<h3 className='text-sm font-medium mb-2'>About</h3>
						<p className='text-sm text-muted-foreground'>
							{project.longDescription || project.description}
						</p>
					</div>

					<div>
						<h3 className='text-sm font-medium mb-2'>
							Technologies
						</h3>
						<div className='flex flex-wrap gap-2'>
							{project.tags.map((tag) => (
								<Badge key={tag} variant='outline'>
									{tag}
								</Badge>
							))}
						</div>
					</div>

					<div className='flex flex-row gap-2'>
						{project.url && (
							<Button asChild className='w-full sm:w-auto'>
								<a
									href={project.url}
									target='_blank'
									rel='noopener noreferrer'
									className='flex items-center gap-2'>
									Visit Website{' '}
									<ExternalLink className='h-4 w-4' />
								</a>
							</Button>
						)}

						{project.github && (
							<Button asChild className='w-full sm:w-auto'>
								<a
									href={project.github}
									target='_blank'
									rel='noopener noreferrer'
									className='flex items-center gap-2'>
									Visit Codebase{' '}
									<ExternalLink className='h-4 w-4' />
								</a>
							</Button>
						)}
					</div>
				</div>
			</DialogContent>
		</Dialog>
	);
}
