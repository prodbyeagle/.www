import type { JSX } from 'react';

import { cn } from '@/lib/utils';

export type CodeProps = React.HTMLAttributes<HTMLElement>;

/**
 * A styled `<code>` component for displaying inline code snippets in a consistent, accessible format.
 *
 * @param props - React props extending `HTMLAttributes<HTMLElement>`. Commonly used: `className`, `children`.
 *
 * @returns A styled inline `<code>` element.
 *
 * @author prodbyeagle
 */
export function Code({ className, ...props }: CodeProps): JSX.Element {
	return (
		<code
			className={cn(
				'rounded-sm bg-muted px-1 py-0.5 font-mono text-sm',
				'text-accent-foreground/70 transition-all duration-300',
				className
			)}
			{...props}
		/>
	);
}
