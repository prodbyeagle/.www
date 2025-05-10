'use client';

import NumberFlow, { NumberFlowGroup } from '@number-flow/react';
import * as React from 'react';
import { useEffect, useState } from 'react';

import { generateRandomKey } from '@/lib/utils';

export function Clock() {
	const [hours, setHours] = useState(0);
	const [minutes, setMinutes] = useState(0);
	const [seconds, setSeconds] = useState(0);

	useEffect(() => {
		const updateTime = () => {
			const now = new Date();
			setHours(now.getHours());
			setMinutes(now.getMinutes());
			setSeconds(now.getSeconds());
		};

		updateTime();

		const interval = setInterval(updateTime, 1000);

		return () => clearInterval(interval);
	}, []);

	return (
		<NumberFlowGroup key={generateRandomKey()}>
			<div>
				<NumberFlow
					value={hours}
					format={{ minimumIntegerDigits: 2 }}
				/>
				<NumberFlow
					prefix=':'
					value={minutes}
					format={{ minimumIntegerDigits: 2 }}
				/>
				<NumberFlow
					prefix=':'
					value={seconds}
					format={{ minimumIntegerDigits: 2 }}
				/>
			</div>
		</NumberFlowGroup>
	);
}
