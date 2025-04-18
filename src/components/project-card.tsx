'use client';

import { useState } from 'react';
import {
	Card,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { ProjectDialog } from '@/components/project-dialog';
import { Project } from '@/lib/data';

interface ProjectCardProps extends Omit<Project, 'id'> {
	id: string;
}

export function ProjectCard(props: ProjectCardProps) {
	const { title, description, tags, id, ...projectData } = props;
	const [isDialogOpen, setIsDialogOpen] = useState(false);

	const project: Project = { id, title, description, tags, ...projectData };

	return (
		<>
			<Card
				className='hover:border-primary/30 transition cursor-pointer group'
				onClick={() => setIsDialogOpen(true)}>
				<CardHeader>
					<CardTitle>{title}</CardTitle>
					<CardDescription>{description}</CardDescription>
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
