import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';

interface BentoGridItemProps {
	className?: string;
	children: ReactNode;
	index?: number;
}

export function BentoGridItem({ className, children }: BentoGridItemProps) {
	return (
		<div
			className={cn(
				'rounded-none border border-border/70 bg-background p-6 shadow-sm transition-all duration-300 hover:border-accent hover:shadow-md ',
				className
			)}>
			{children}
		</div>
	);
}
