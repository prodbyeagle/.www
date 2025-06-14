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
