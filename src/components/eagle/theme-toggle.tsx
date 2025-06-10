'use client';

import { useHasMounted } from '@/hooks/useHasMounted';
import { Monitor, Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import type { JSX } from 'react';

import { Button } from '@/components/ui/button';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

/**
 * A client-side dropdown menu for switching between light, dark, and system themes.
 *
 * @returns A dropdown menu JSX element for toggling the app theme.
 *
 * @author prodbyeagle
 */
export function ThemeToggle(): JSX.Element {
	const { setTheme } = useTheme();
	const hasMounted = useHasMounted();

	if (!hasMounted) return <></>;

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant='ghost' size='icon'>
					<Sun className='h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition dark:-rotate-90 dark:scale-0' />
					<Moon className='absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100' />
					<span className='sr-only'>Toggle theme</span>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align='end'>
				<DropdownMenuItem
					className='mb-1 duration-150'
					onClick={() => setTheme('light')}>
					<Sun className='mr-2 h-4 w-4' />
					Light
				</DropdownMenuItem>
				<DropdownMenuItem
					className='mb-1 duration-150'
					onClick={() => setTheme('dark')}>
					<Moon className='mr-2 h-4 w-4' />
					Dark
				</DropdownMenuItem>
				<DropdownMenuItem
					className='duration-150'
					onClick={() => setTheme('system')}>
					<Monitor className='mr-2 h-4 w-4' />
					System
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
