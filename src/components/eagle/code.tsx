import * as React from 'react';

import { cn, generateRandomKey } from '@/lib/utils';

export type CodeProps = React.HTMLAttributes<HTMLElement>;

/**
 * A styled <code> block for inline code snippets.
 * @author @prodbyeagle
 */
export function Code({ className, ...props }: CodeProps) {
	return (
		<code
			key={generateRandomKey()}
			className={cn(
				'rounded bg-muted px-1 py-0.5 font-mono text-sm',
				'text-accent-foreground/70 transition',
				className
			)}
			{...props}
		/>
	);
}
