import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Merges Tailwind CSS class names conditionally.
 *
 * @param inputs - A list of class values (strings, arrays, conditionals) to be merged.
 * @returns A single merged class name string.
 *
 * @example
 * ```ts
 * cn('p-2', 'bg-red-500', { 'text-white': true, 'hidden': false });
 * // => 'p-2 bg-red-500 text-white'
 * ```
 *
 * @author shadcn
 */
export function cn(...inputs: ClassValue[]): string {
	return twMerge(clsx(inputs));
}

/**
 * Creates a debounced function that delays invoking the provided function until after
 * the specified wait time has elapsed since the last time the debounced function was invoked.
 *
 * @param func - The function to debounce.
 * @param wait - The number of milliseconds to delay.
 * @returns A new debounced function.
 */
export function debounce<T extends (...args: unknown[]) => unknown>(
	func: T,
	wait: number
) {
	let timeout: ReturnType<typeof setTimeout>;
	return function (...args: Parameters<T>) {
		clearTimeout(timeout);
		timeout = setTimeout(() => {
			func(...args);
		}, wait);
	};
}
