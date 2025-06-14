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

export interface Project {
	title: string;
	description: string;
	tags: string[];
	url?: string;
	githubUrl?: string;
	deprecated?: boolean;
}
