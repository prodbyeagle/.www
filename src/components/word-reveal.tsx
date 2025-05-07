import * as motion from 'motion/react-client';
import type { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface WordRevealProps extends HTMLAttributes<HTMLSpanElement> {
	text: string;
	delay?: number;
}

export function WordReveal({ text, delay = 0, ...props }: WordRevealProps) {
	const words = text.split(' ');

	return (
		<span className={cn('inline-block overflow-hidden')} {...props}>
			{words.map((word, i) => (
				<motion.span
					key={`${word}-${i}`}
					className='inline-block pr-1'
					initial={{
						opacity: 0,
						y: 10,
						filter: 'blur(6px)',
					}}
					animate={{
						opacity: 1,
						y: 0,
						filter: 'blur(0px)',
					}}
					transition={{
						duration: 0.8,
						delay: delay + i * 0.2,
						ease: [0.4, 0, 0.2, 1],
					}}>
					{word}
				</motion.span>
			))}
		</span>
	);
}
