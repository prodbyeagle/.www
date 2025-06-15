'use client';

import { useHasMounted } from '@/hooks/use-has-mounted';
import { Monitor, Moon, Sun } from 'lucide-react';
import { AnimatePresence, motion, Variants } from 'motion/react';
import { useTheme } from 'next-themes';
import type { JSX } from 'react';

import { Button } from '@/components/ui/button';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const iconVariants: Variants = {
	hidden: {
		rotate: -90,
		scale: 0,
		opacity: 0,
	},
	visible: {
		rotate: 0,
		scale: 1,
		opacity: 1,
		transition: {
			type: 'spring',
			stiffness: 200,
			damping: 15,
		},
	},
	exit: {
		rotate: 90,
		scale: 0,
		opacity: 0,
		transition: {
			duration: 0.15,
		},
	},
};

const menuItemVariants: Variants = {
	hidden: {
		x: -10,
		opacity: 0,
	},
	visible: {
		x: 0,
		opacity: 1,
		transition: {
			type: 'spring',
			stiffness: 300,
			damping: 20,
		},
	},
};

const containerVariants: Variants = {
	hidden: {
		opacity: 0,
	},
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.05,
		},
	},
};

/**
 * A client-side dropdown menu for switching between light, dark, and system themes.
 * Features smooth animations using Framer Motion.
 *
 * @returns A dropdown menu JSX element for toggling the app theme.
 *
 * @author prodbyeagle
 */
export function ThemeToggle(): JSX.Element {
	const { setTheme, resolvedTheme } = useTheme();
	const hasMounted = useHasMounted();

	if (!hasMounted) {
		return (
			<Button variant='ghost' size='icon' disabled>
				<div className='size-4' />
				<span className='sr-only'>Loading theme toggle</span>
			</Button>
		);
	}

	const isDark = resolvedTheme === 'dark';

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button
					variant='ghost'
					size='icon'
					className='relative overflow-hidden'>
					<AnimatePresence mode='wait' initial={false}>
						{isDark ? (
							<motion.div
								key='moon'
								variants={iconVariants}
								initial='hidden'
								animate='visible'
								exit='exit'
								transition={{
									type: 'spring',
									stiffness: 200,
									damping: 15,
								}}
								className='absolute inset-0 flex items-center justify-center'>
								<Moon className='size-4' />
							</motion.div>
						) : (
							<motion.div
								key='sun'
								variants={iconVariants}
								initial='hidden'
								animate='visible'
								exit='exit'
								transition={{
									type: 'spring',
									stiffness: 200,
									damping: 15,
								}}
								className='absolute inset-0 flex items-center justify-center'>
								<Sun className='size-4' />
							</motion.div>
						)}
					</AnimatePresence>
					<span className='sr-only'>Toggle theme</span>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align='end' className='min-w-[140px]'>
				<motion.div
					variants={containerVariants}
					initial='hidden'
					animate='visible'
					transition={{ staggerChildren: 0.05 }}>
					<motion.div
						variants={menuItemVariants}
						transition={{
							type: 'spring',
							stiffness: 300,
							damping: 20,
						}}>
						<DropdownMenuItem
							className='cursor-pointer focus:bg-accent focus:text-accent-foreground'
							onClick={() => setTheme('light')}>
							<Sun className='mr-2 size-4' />
							Light
						</DropdownMenuItem>
					</motion.div>
					<motion.div
						variants={menuItemVariants}
						transition={{
							type: 'spring',
							stiffness: 300,
							damping: 20,
						}}>
						<DropdownMenuItem
							className='cursor-pointer focus:bg-accent focus:text-accent-foreground'
							onClick={() => setTheme('dark')}>
							<Moon className='mr-2 size-4' />
							Dark
						</DropdownMenuItem>
					</motion.div>
					<motion.div
						variants={menuItemVariants}
						transition={{
							type: 'spring',
							stiffness: 300,
							damping: 20,
						}}>
						<DropdownMenuItem
							className='cursor-pointer focus:bg-accent focus:text-accent-foreground'
							onClick={() => setTheme('system')}>
							<Monitor className='mr-2 size-4' />
							System
						</DropdownMenuItem>
					</motion.div>
				</motion.div>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
