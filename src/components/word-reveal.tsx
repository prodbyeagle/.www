import * as motion from 'motion/react-client';
import type { HTMLAttributes } from 'react';

import { cn } from '@/lib/utils';

type Position = 'top' | 'bottom' | 'left' | 'right';

interface WordRevealProps extends HTMLAttributes<HTMLSpanElement> {
	text: string;
	delay?: number;
	duration?: number;
	speed?: number;
	position?: Position;
	letter?: boolean;
}

export function WordReveal({
	text,
	delay = 0,
	speed = 0.2,
	duration = 0.8,
	position = 'top',
	letter = false,
	...props
}: WordRevealProps) {
	const getInitialOffset = () => {
		switch (position) {
			case 'bottom':
				return { y: -15 };
			case 'left':
				return { x: 15 };
			case 'right':
				return { x: -15 };
			case 'top':
			default:
				return { y: 15 };
		}
	};

	if (letter) {
		const letters = text.split('');

		return (
			<span className={cn('inline-block overflow-hidden')} {...props}>
				{letters.map((letterChar, i) => (
					<motion.span
						key={`${letterChar}-${i}`}
						className='inline-block'
						initial={{
							opacity: 0,
							...getInitialOffset(),
							filter: 'blur(5px)',
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
						{letterChar === ' ' ? '\u00A0' : letterChar}
					</motion.span>
				))}
			</span>
		);
	}

	const words = text.split(' ');

	return (
		<span className={cn('inline-block overflow-hidden')} {...props}>
			{words.map((word, i) => (
				<motion.span
					key={`${word}-${i}`}
					className='inline-block pr-1'
					initial={{
						opacity: 0,
						...getInitialOffset(),
						filter: 'blur(5px)',
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
