import { cn } from '@/lib/utils';
import { motion } from 'motion/react';

interface BentoGridItemProps {
	className?: string;
	children: React.ReactNode;
	index?: number;
}

export function BentoGridItem({
	className,
	children,
	index,
}: BentoGridItemProps) {
	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.4, delay: index ? index * 0.05 : 0 }}
			className={cn(
				'rounded-3xl border border-border bg-background p-6 shadow-sm transition-all hover:shadow-md hover:scale-[1.015]',
				className
			)}>
			{children}
		</motion.div>
	);
}
