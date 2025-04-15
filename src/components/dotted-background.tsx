import type React from 'react';
import { cn } from '@/lib/utils';

interface DottedBackgroundProps {
	dotColor?: string;
	dotSize?: number;
	spacing?: number;
	fadePercentage?: number;
	className?: string;
}

export function DottedBackground({
	dotColor = 'oklch(0.28 0.006 285.885)',
	dotSize = 1,
	spacing = 30,
	fadePercentage = 60,
	className,
}: DottedBackgroundProps = {}) {
	return (
		<div
			className={cn('absolute inset-0 -z-10 h-full w-full', className)}
			aria-hidden='true'>
			<div
				className={cn(
					'absolute inset-0',
					'[mask-image:radial-gradient(circle,black_var(--fade-from),transparent_var(--fade-to))]',
					'[--fade-from:0%]',
					'[--fade-to:100%]'
				)}
				style={
					{
						backgroundImage: `radial-gradient(circle at center, ${dotColor} ${dotSize}px, transparent ${dotSize}px)`,
						backgroundSize: `${spacing}px ${spacing}px`,
						'--fade-from': `${100 - fadePercentage}%`,
						'--fade-to': '100%',
					} as React.CSSProperties
				}
			/>
		</div>
	);
}
