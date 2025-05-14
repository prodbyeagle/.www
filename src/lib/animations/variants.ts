import type { Variants } from 'motion/react';

export const containerVariants: Variants = {
	hidden: {},
	show: {
		transition: {
			staggerChildren: 0.1,
			delayChildren: 0.2,
		},
	},
};

export const cardVariants: Variants = {
	hidden: { opacity: 0 },
	show: (i: number) => ({
		opacity: 1,
		transition: {
			duration: 0.4,
			delay: i * 0.2,
			ease: [0.4, 0, 0.2, 1],
		},
	}),
};

export const fadeUp: Variants = {
	hidden: { opacity: 0, y: 20 },
	show: (i: number = 0) => ({
		opacity: 1,
		y: 0,
		transition: {
			delay: i * 0.4,
			duration: 0.4,
			ease: 'easeOut',
		},
	}),
};
