import type { ReactNode } from 'react';

import { IProject } from '@/lib/projects';
import { cn } from '@/lib/utils';

interface BentoGridItemProps {
	className?: string;
	projectData: IProject;
	children: ReactNode;
	index?: number;
}

const getBackgroundClass = (type?: IProject['projectType']) => {
	switch (type) {
		case 'inactive':
			return 'hover:border-amber-300/20  not-dark:hover:bg-amber-300/5';
		case 'discontinued':
			return 'hover:border-destructive/20 not-dark:hover:bg-destructive/5';
		case 'active':
		default:
			return 'bg-background dark:hover:border-accent';
	}
};

export function BentoGridItem({
	className,
	children,
	projectData,
}: BentoGridItemProps) {
	const backgroundClass = getBackgroundClass(projectData.projectType);

	return (
		<div
			className={cn(
				'rounded-none border border-border/70 backdrop-blur-sm p-6 transition-all duration-100 not-dark:hover:shadow-md',
				backgroundClass,
				className
			)}>
			{children}
		</div>
	);
}
