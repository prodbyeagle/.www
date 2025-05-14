import * as motion from 'motion/react-client';
import type { HTMLAttributes } from 'react';

import { cn, generateRandomKey } from '@/lib/utils';

/**
 * Animation direction for word entrance.
 */
type Position = 'top' | 'bottom' | 'left' | 'right';

/**
 * Props for the {@link WordReveal} component.
 */
interface WordRevealProps extends HTMLAttributes<HTMLSpanElement> {
	text: string;
	delay?: number;
	duration?: number;
	speed?: number;
	position?: Position;
}

export function WordReveal({
	text,
	delay = 0,
	speed = 0.2,
	duration = 0.8,
	position = 'top',
	...props
}: WordRevealProps) {
	const words = text.split(' ');

	const getInitialOffset = () => {
		switch (position) {
			case 'bottom':
				return { y: -10 };
			case 'left':
				return { x: 10 };
			case 'right':
				return { x: -10 };
			case 'top':
			default:
				return { y: 10 };
		}
	};

	return (
		<span className={cn('inline-block overflow-hidden')} {...props}>
			{words.map((word, i) => (
				<motion.span
					key={generateRandomKey()}
					className='inline-block pr-3'
					initial={{
						opacity: 0,
						...getInitialOffset(),
						filter: 'blur(6px)',
					}}
					animate={{
						opacity: 1,
						x: 0,
						y: 0,
						filter: 'blur(0px)',
					}}
					transition={{
						duration,
						delay: delay + i * speed,
						ease: [0.4, 0, 0.2, 1],
					}}>
					{word}
				</motion.span>
			))}
		</span>
	);
}
