import type { ReactNode } from 'react';

import { cn, generateRandomKey } from '@/lib/utils';

interface BentoGridItemProps {
	className?: string;
	children: ReactNode;
	index?: number;
}

export function BentoGridItem({ className, children }: BentoGridItemProps) {
	return (
		<div
			key={generateRandomKey()}
			className={cn(
				'rounded-none border border-border/70 bg-background p-6 transition-all duration-100 dark:hover:border-accent not-dark:hover:shadow-md',
				className
			)}>
			{children}
		</div>
	);
}
