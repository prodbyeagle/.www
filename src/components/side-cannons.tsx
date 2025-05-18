'use client';

import confetti from 'canvas-confetti';

import { Button } from '@/components/ui/button';

export function ConfettiSideCannons() {
	const handleClick = () => {};

	return (
		<div className='relative'>
			<Button onClick={handleClick}>Trigger Side Cannons</Button>
		</div>
	);
}
