'use client';

import type React from 'react';

import { cn } from '@/lib/utils';

interface DottedBackgroundProps {
	dotColor?: string;
	dotSize?: number;
	spacing?: number;
	className?: string;
}

export function DottedBackground({
	dotColor = 'var(--muted-foreground)',
	dotSize = 1,
	spacing = 30,
	className,
}: DottedBackgroundProps = {}) {
	return (
		<div
			className={cn('absolute inset-0 -z-10 h-full w-full', className)}
			aria-hidden='true'>
			<div
				className={cn(
					'absolute inset-0',
					'mask-x-from-0%',
					'mask-radial-to-transparent',
					'mask-radial-at-center'
				)}
				style={
					{
						backgroundImage: `radial-gradient(circle at center, ${dotColor} ${dotSize}px, transparent ${dotSize}px)`,
						backgroundSize: `${spacing}px ${spacing}px`,
					} as React.CSSProperties
				}
			/>
		</div>
	);
}
