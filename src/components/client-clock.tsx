'use client';

import { useEffect, useState } from 'react';

export function ClientClock() {
	const [time, setTime] = useState<string>('');

	useEffect(() => {
		const updateTime = () => {
			const now = new Date();
			const hours = now.getHours().toString().padStart(2, '0');
			const minutes = now.getMinutes().toString().padStart(2, '0');
			const seconds = now.getSeconds().toString().padStart(2, '0');
			const milliseconds = now
				.getMilliseconds()
				.toString()
				.padStart(3, '0');

			const microseconds = Math.floor(Math.random() * 1000)
				.toString()
				.padStart(3, '0');
			const nanoseconds = Math.floor(Math.random() * 1000)
				.toString()
				.padStart(3, '0');

			setTime(
				`${hours}:${minutes}:${seconds}:${milliseconds}.${microseconds}${nanoseconds}`
			);
		};

		updateTime();

		const interval = setInterval(updateTime, 1);

		return () => clearInterval(interval);
	}, []);

	return <p className='font-mono'>Client time: {time}</p>;
}
