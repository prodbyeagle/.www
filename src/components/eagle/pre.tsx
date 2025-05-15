import * as React from 'react';

import { cn } from '@/lib/utils';

export type PreProps = React.HTMLAttributes<HTMLElement>;

/**
 * A styled <pre> component for code blocks.
 * @author @prodbyeagle
 */
export function Pre({ className, ...props }: PreProps) {
	return (
		<pre
			className={cn(
				'overflow-auto rounded-sm p-4 font-mono text-sm',
				'text-muted-foreground transition-all duration-300',
				className
			)}
			{...props}
		/>
	);
}
