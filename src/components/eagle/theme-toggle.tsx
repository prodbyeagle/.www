'use client';

import { Monitor, Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

import { Button } from '@/components/ui/button';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export function ThemeToggle() {
	const { setTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return null;
	}

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant='ghost' size='icon'>
					<Sun className='size-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' />
					<Moon className='absolute size-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100' />
					<span className='sr-only'>toggle theme</span>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align='end'>
				<DropdownMenuItem
					className='mb-1'
					onClick={() => setTheme('light')}>
					<Sun className='mr-2 size-4' />
					light
				</DropdownMenuItem>
				<DropdownMenuItem
					className='mb-1'
					onClick={() => setTheme('dark')}>
					<Moon className='mr-2 size-4' />
					dark
				</DropdownMenuItem>
				<DropdownMenuItem onClick={() => setTheme('system')}>
					<Monitor className='mr-2 size-4' />
					system
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
