'use client';

import { useState } from 'react';
import {
	Card,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { ProjectDialog } from '@/components/project-dialog';
import type { Project } from '@/lib/projects';

interface ProjectCardProps {
	project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
	const [isDialogOpen, setIsDialogOpen] = useState(false);

	return (
		<>
			<Card
				onClick={() => setIsDialogOpen(true)}
				className='cursor-pointer border transition-all duration-200 will-change-transform hover:scale-[1.015] hover:shadow-md hover:border-border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2'>
				<CardHeader>
					<CardTitle>{project.title}</CardTitle>
					<CardDescription>{project.description}</CardDescription>
				</CardHeader>
			</Card>

			<ProjectDialog
				project={project}
				isOpen={isDialogOpen}
				onOpenChange={setIsDialogOpen}
			/>
		</>
	);
}
