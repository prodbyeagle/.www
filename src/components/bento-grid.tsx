import { cn, generateRandomKey } from '@/lib/utils';

interface BentoGridProps {
	className?: string;
	children: React.ReactNode;
}

export function BentoGrid({ className, children }: BentoGridProps) {
	return (
		<div
			key={generateRandomKey()}
			className={cn(
				'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 auto-rows-[minmax(10rem,_1fr)] gap-4',
				className
			)}>
			{children}
		</div>
	);
}
