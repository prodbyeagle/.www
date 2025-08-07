import { type ReactNode } from 'react';

import { cn } from '@/lib/utils';

interface BentoGridItemProps {
	className?: string;
	children: ReactNode;
}

export function BentoGridItem({ className, children }: BentoGridItemProps) {
	return (
		<div
			className={cn(
				'rounded-lg border bg-background dark:hover:border-accent border-border/70 p-6 not-dark:hover:shadow-md',
				className
			)}>
			{children}
		</div>
	);
}
