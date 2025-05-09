import * as motion from 'motion/react-client';
import type { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

/**
 * Props for the WordReveal component.
 */
interface WordRevealProps extends HTMLAttributes<HTMLSpanElement> {
	/**
	 * The text content to animate word by word.
	 */
	text: string;

	/**
	 * The initial delay (in seconds) before the animation starts.
	 * Defaults to `0`.
	 */
	delay?: number;

	/**
	 * Duration (in seconds) for each word animation.
	 * Defaults to `0.2`.
	 */
	speed?: number;
}

/**
 * WordReveal animates each word of a given string with a staggered motion effect.
 *
 * @param text - The input text to animate.
 * @param delay - Optional initial delay before animation starts.
 * @param speed - Optional speed for each word's animation duration.
 * @param props - Additional span element props.
 *
 * @returns A span element containing individually animated words.
 */
export function WordReveal({
	text,
	delay = 0,
	speed = 0.2,
	...props
}: WordRevealProps) {
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
						delay: delay + i * speed,
						ease: [0.4, 0, 0.2, 1],
					}}>
					{word}
				</motion.span>
			))}
		</span>
	);
}
