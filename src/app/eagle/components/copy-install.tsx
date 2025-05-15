'use client';

import { useState } from 'react';

import { Pre } from '@/components/eagle/pre';
import { Button } from '@/components/ui/button';

interface CopyInstallCommandProps {
	command: string;
}

export function CopyInstallCommand({ command }: CopyInstallCommandProps) {
	const [copied, setCopied] = useState(false);

	const handleCopy = async () => {
		try {
			await navigator.clipboard.writeText(command);
			setCopied(true);
			setTimeout(() => setCopied(false), 2000);
		} catch (err) {
			console.error('Copy failed:', err);
		}
	};

	return (
		<div className='relative bg-card rounded-lg border p-1'>
			<div className='p-2 overflow-auto text-sm'>
				<Pre>{command}</Pre>
			</div>
			<div className='flex justify-end pt-1'>
				<Button
					variant='ghost'
					className=' w-full'
					onClick={handleCopy}
					aria-label='Copy install command'>
					<span>{copied ? '👀 Have fun.' : 'Copy!'}</span>
				</Button>
			</div>
		</div>
	);
}
