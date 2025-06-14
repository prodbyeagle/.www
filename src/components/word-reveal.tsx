import * as motion from 'motion/react-client';
import type { HTMLAttributes } from 'react';

import { cn } from '@/lib/utils';

/**
 * Animation direction for word entrance.
 */
type Position = 'top' | 'bottom' | 'left' | 'right';

/**
 * Props for the {@link WordReveal} component.
 */
interface WordRevealProps extends HTMLAttributes<HTMLSpanElement> {
	/** The string to animate. Each word will be revealed individually. */
	text: string;
	/** Initial delay before the first word animates (in seconds). Default is `0`. */
	delay?: number;
	/** Animation duration for each word (in seconds). Default is `0.8`. */
	duration?: number;
	/** Time between each word animation (in seconds). Default is `0.2`. */
	speed?: number;
	/** Direction from which the words animate into view. Default is `'top'`. */
	position?: Position;
}

/**
 * `WordReveal` is a React component that animates the entrance of each word in a given string.
 * It splits the text into individual words and reveals them one by one with a sliding and blur-fade animation.
 *
 * The entrance direction, delay, duration, and speed of animation can be customized.
 *
 * @example
 * ```tsx
 * <WordReveal text="Hello world" position="left" delay={0.2} speed={0.1} />
 * ```
 *
 * @param text - The string to animate. Each word will be animated separately.
 * @param delay - The initial delay before the first word starts animating, in seconds. Defaults to `0`.
 * @param duration - Duration of the animation for each word, in seconds. Defaults to `0.8`.
 * @param speed - Incremental delay between each word's animation, in seconds. Defaults to `0.2`.
 * @param position - Direction from which words will animate in. One of `'top' | 'bottom' | 'left' | 'right'`. Defaults to `'top'`.
 * @param props - Standard HTML span attributes to apply to the root span.
 *
 * @returns A `<span>` element with animated child `<span>`s for each word.
 */
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

	return (
		<span className={cn('inline-block overflow-hidden')} {...props}>
			{words.map((word, i) => (
				<motion.span
					key={`${word}-${i}`}
					className='inline-block pr-3'
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
