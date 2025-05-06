import { cn, generateRandomKey } from '@/lib/utils';

interface BentoGridItemProps {
	className?: string;
	children: React.ReactNode;
}

export function BentoGridItem({ className, children }: BentoGridItemProps) {
	return (
		<div
			key={generateRandomKey()}
			className={cn(
				'rounded-3xl border border-border bg-background p-6 shadow-sm transition-all hover:shadow-md hover:scale-[1.015]',
				className
			)}>
			{children}
		</div>
	);
}
