import { useEffect, useState } from 'react';

/**
 * React hook to determine if the component has been mounted on the client.
 *
 * This is useful for preventing hydration mismatches in Next.js applications
 * by delaying rendering of client-only logic until after the component mounts.
 *
 * @returns {boolean} `true` if the component has mounted on the client, otherwise `false`.
 *
 * @example
 * ```tsx
 * const hasMounted = useHasMounted();
 * if (!hasMounted) return null;
 * return <ClientOnlyComponent />;
 * ```
 *
 * @author prodbyeagle
 */
export function useHasMounted(): boolean {
	const [hasMounted, setHasMounted] = useState(false);

	useEffect(() => {
		setHasMounted(true);
	}, []);

	return hasMounted;
}
