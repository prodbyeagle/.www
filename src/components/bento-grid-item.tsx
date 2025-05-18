'use client';

import confetti from 'canvas-confetti';
import { useEffect, useState, type ReactNode } from 'react';

import { IProject } from '@/lib/projects';
import { cn } from '@/lib/utils';

interface BentoGridItemProps {
	className?: string;
	projectData: IProject;
	children: ReactNode;
}

const getBackgroundClass = (type?: IProject['projectType']) => {
	switch (type) {
		case 'inactive':
			return 'hover:border-amber-300/20 not-dark:hover:bg-amber-300/5';
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

	const [isHighlighted, setIsHighlighted] = useState(false);

	useEffect(() => {
		if (!projectData.isNew) return;

		setIsHighlighted(true);

		const timeoutId = setTimeout(() => {
			setIsHighlighted(false);
		}, 2500);

		const end = Date.now() + 2000;
		const colors = ['#a786ff', '#fd8bbc', '#eca184', '#f8deb1'];

		const frame = () => {
			if (Date.now() > end) return;

			confetti({
				particleCount: 2,
				angle: 60,
				spread: 55,
				startVelocity: 60,
				origin: { x: 0, y: 0.5 },
				colors,
			});
			confetti({
				particleCount: 2,
				angle: 120,
				spread: 55,
				startVelocity: 60,
				origin: { x: 1, y: 0.5 },
				colors,
			});

			requestAnimationFrame(frame);
		};

		frame();

		return () => clearTimeout(timeoutId);
	}, [projectData.isNew]);

	return (
		<div
			className={cn(
				'rounded-none border border-border/70 backdrop-blur-sm p-6 transition-all duration-300 not-dark:hover:shadow-md',
				backgroundClass,
				isHighlighted && 'rounded-sm border-primary/50 border-2',
				className
			)}>
			{children}
		</div>
	);
}
