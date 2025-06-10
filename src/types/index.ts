/**
 *! WARNING AND INFO
 * Shared types and interfaces used throughout the application.
 *
 * Define reusable type declarations here to ensure consistent typing
 * and improve maintainability across components and modules.
 *
 * @example
 * ❌ Don't use overly generic or shortcut types like this:
 * export type SomePropsInThisCodeBase = React.HTMLAttributes<HTMLElement>;
 *
 * ✅ Do prefer more explicit, larger types or interfaces
 * that precisely describe the component's expected props:
 * export interface SomePropsInThisCodeBase extends React.HTMLAttributes<HTMLElement> {
 *   className?: string;
 *   children?: React.ReactNode;
 * 	 ... // other specific props
 * }
 */

/**
 * Props for the `DottedBackground` component, which renders a customizable dotted pattern as a background.
 *
 * @property `dotColor` - The CSS color value for each dot. Defaults to `'var(--muted-foreground)'`.
 * @property `dotSize` - The radius of each dot in pixels. Defaults to `1`.
 * @property `spacing` - The distance in pixels between the centers of adjacent dots. Defaults to `30`.
 * @property `className` - Additional CSS class names to apply to the root container for custom styling.
 */
export interface DottedBackgroundProps {
	/**
	 * The color of each dot.
	 * @default 'var(--muted-foreground)'
	 */
	dotColor?: string;

	/**
	 * The radius size of each dot in pixels.
	 * @default 1
	 */
	dotSize?: number;

	/**
	 * The spacing between dots in pixels.
	 * @default 30
	 */
	spacing?: number;

	/**
	 * Additional class names to apply to the root container.
	 */
	className?: string;
}

export interface Project {
	title: string;
	description: string;
	tags: string[];
	url?: string;
	githubUrl?: string;
}
