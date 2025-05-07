'use client';

import { JSX, useEffect } from 'react';
import { scan } from 'react-scan';

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
