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
				className='hover:border-border hover:scale-[1.03] transition-transform duration-100 cursor-pointer'
				onClick={() => setIsDialogOpen(true)}>
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
