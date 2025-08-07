import { useSyncExternalStore } from 'react';

/**
 * Detects whether the component is mounted on the client side.
 * Returns `false` during SSR and `true` after hydration.
 *
 * @returns {boolean} `true` on client, `false` on server
 *
 * @example
 * ```tsx
 * const hasMounted = useHasMounted();
 * if (!hasMounted) return null;
 * return <ClientOnlyComponent />;
 * ```
 */
export function useHasMounted(): boolean {
	return useSyncExternalStore(
		// subscribe: no-op since the mounted state never changes after hydration
		() => () => {},
		// snapshot on client
		() => true,
		// snapshot on server
		() => false
	);
}
