'use client';

import { scan } from 'react-scan';

import { JSX, useEffect } from 'react';

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
