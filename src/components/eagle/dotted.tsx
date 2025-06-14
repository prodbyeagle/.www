import type React from 'react';

import { cn } from '@/lib/utils';

export interface DottedBackgroundProps {
	/**
	 * The color of each dot.
	 * @default 'var(--muted-foreground)'
	 */
	dotColor?: string;

	/**
	 * The radius size of each dot in pixels.
	 * @default 1
	 */
	dotSize?: number;

	/**
	 * The spacing between dots in pixels.
	 * @default 30
	 */
	spacing?: number;

	/**
	 * Additional class names to apply to the root container.
	 */
	className?: string;
}

/**
 * A decorative background component that renders a grid of evenly spaced dots.
 *
 * @param props - Configuration options for dot color, size, spacing, and CSS classes.
 *
 * @returns A `div` element with a dotted background pattern.
 *
 * @example
 * ```tsx
 * <div className="relative h-64 w-64">
 *   <DottedBackground
 *     dotColor="var(--muted-foreground)" // using shadcn-ui CSS variables for consistent theming
 *     dotSize={2}
 *     spacing={20}
 *   />
 *   <p>Content on top of dotted background.</p>
 * </div>
 * ```
 *
 * @author prodbyeagle
 */

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
