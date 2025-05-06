import { cn } from '@/lib/utils';

interface BentoGridProps {
	className?: string;
	children: React.ReactNode;
}

export function BentoGrid({ className, children }: BentoGridProps) {
	return (
		<div
			className={cn(
				'grid grid-cols-1 md:grid-cols-3 auto-rows-[14rem] gap-4',
				className
			)}>
			{children}
		</div>
	);
}
