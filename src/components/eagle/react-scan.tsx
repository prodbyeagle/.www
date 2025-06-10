'use client';

import { useEffect, type JSX } from 'react';
import { scan } from 'react-scan';

/**
 * A development-only component that triggers the `react-scan` visual debugger.
 *
 * @repo
 * https://github.com/aidenybai/react-scan
 *
 * @author aidenybai
 */
export function ReactScan(): JSX.Element {
	useEffect(() => {
		if (process.env.NEXT_PUBLIC_DEVELOPMENT === 'true') {
			scan({
				enabled: true,
			});
		}
	}, []);
	return <></>;
}
