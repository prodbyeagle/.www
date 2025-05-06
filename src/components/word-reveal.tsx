'use client';

import { motion } from 'motion/react';
import type { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface WordRevealProps extends HTMLAttributes<HTMLSpanElement> {
	text: string;
	delay?: number;
	duration?: number;
	blur?: number;
}

export function WordReveal({
	text,
	delay = 0,
	duration = 0.6,
	blur = 4,
	className,
	...props
}: WordRevealProps) {
	const words = text.split(' ');

	return (
		<span
			className={cn('inline-block overflow-hidden', className)}
			{...props}>
			{words.map((word, i) => (
				<motion.span
					key={`${word}-${i}`}
					className='inline-block pr-1'
					initial={{
						opacity: 0,
						y: 10,
						filter: `blur(${blur}px)`,
					}}
					animate={{
						opacity: 1,
						y: 0,
						filter: 'blur(0px)',
					}}
					transition={{
						duration,
						delay: delay + i * 0.1,
						ease: [0.4, 0, 0.2, 1],
					}}>
					{word}
				</motion.span>
			))}
		</span>
	);
}
