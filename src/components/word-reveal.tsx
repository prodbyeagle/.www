import * as motion from 'motion/react-client';
import type { HTMLAttributes } from 'react';

import { cn, generateRandomKey } from '@/lib/utils';

/**
 * Props for the {@link WordReveal} component.
 */
interface WordRevealProps extends HTMLAttributes<HTMLSpanElement> {
	/**
	 * The full text string to animate.
	 * Each word will be animated individually in a staggered sequence.
	 */
	text: string;

	/**
	 * Delay (in seconds) before the animation sequence begins.
	 * @default 0
	 */
	delay?: number;

	/**
	 * Duration (in seconds) of the animation for each word.
	 * @default 0.8
	 */
	duration?: number;

	/**
	 * Time (in seconds) to wait between animating each word.
	 * Controls the stagger effect.
	 * @default 0.2
	 */
	speed?: number;
}

/**
 * WordReveal is a UI animation component that reveals text one word at a time.
 * It animates each word using a vertical motion, fade-in, and blur reduction effect.
 *
 * Useful for headings, intros, and dynamic visual effects in landing pages or hero sections.
 *
 * @example
 * ```tsx
 * <WordReveal text="Hello world from the future" />
 * ```
 *
 * @param props - {@link WordRevealProps} component props
 * @returns A span element with individually animated word elements.
 */
export function WordReveal({
	text,
	delay = 0,
	speed = 0.2,
	duration = 0.8,
	...props
}: WordRevealProps) {
	const words = text.split(' ');

	return (
		<span className={cn('inline-block overflow-hidden')} {...props}>
			{words.map((word, i) => (
				<motion.span
					key={generateRandomKey()}
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
