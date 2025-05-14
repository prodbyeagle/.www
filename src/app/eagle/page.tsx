'use client';

import * as motion from 'motion/react-client';
import { useState } from 'react';

import { Code } from '@/components/eagle/code';
import { Button } from '@/components/ui/button';
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { WordReveal } from '@/components/word-reveal';

import { fadeUp } from '@/lib/animations/variants';

import { CommandRow } from './components/command-row';

export default function EaglePage() {
	const [copied, setCopied] = useState(false);

	const installCommand = `Invoke-WebRequest -UseBasicParsing https://raw.githubusercontent.com/prodbyeagle/eaglePowerShell/main/installer.ps1 | Invoke-Expression`;

	const handleCopy = async () => {
		try {
			await navigator.clipboard.writeText(installCommand);
			setCopied(true);
			setTimeout(() => setCopied(false), 2000);
		} catch (err) {
			console.error('Copy failed:', err);
		}
	};

	return (
		<div className='min-h-screen flex flex-col'>
			<a
				href='https://github.com/prodbyeagle/eagle'
				target='_blank'
				rel='noopener noreferrer'
				className='fixed bottom-6 right-6 z-50'
				aria-label='View on GitHub'>
				<Button
					variant='outline'
					size='icon'
					className='rounded-md shadow-lg size-10'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						viewBox='0 0 24 24'
						fill='currentColor'
						className='size-5'>
						<path
							fillRule='evenodd'
							d='M12 2C6.477 2 2 6.484 2 12.012c0 4.42 2.867 8.166 6.839 9.489.5.09.683-.217.683-.482 0-.237-.009-.868-.013-1.703-2.782.605-3.369-1.34-3.369-1.34-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.089.637-1.34-2.221-.253-4.555-1.112-4.555-4.944 0-1.092.39-1.986 1.03-2.685-.104-.254-.446-1.273.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.706.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.545 1.377.203 2.396.1 2.65.64.699 1.028 1.593 1.028 2.685 0 3.842-2.337 4.688-4.566 4.936.359.31.678.922.678 1.858 0 1.34-.012 2.419-.012 2.748 0 .268.18.577.688.479A10.013 10.013 0 0 0 22 12.012C22 6.484 17.523 2 12 2Z'
							clipRule='evenodd'
						/>
					</svg>
				</Button>
			</a>

			<section className='relative pt-24 px-6 md:px-12 lg:px-24'>
				<div className='absolute inset-0 -z-10' />

				<motion.div
					className='max-w-5xl mx-auto text-center'
					variants={fadeUp}
					initial='hidden'
					animate='show'>
					<h1 className='text-4xl md:text-6xl font-bold tracking-tight'>
						<WordReveal duration={2} text='eagle' />
					</h1>

					<p className='mt-6 text-xl text-muted-foreground max-w-2xl mx-auto'>
						<WordReveal
							position='left'
							duration={1}
							speed={0.1}
							text='A lightweight PowerShell utility to supercharge your workflow with automated scripting for Spicetify, Vencord, and more.'
						/>
					</p>
				</motion.div>
			</section>

			<section className='py-16 md:py-24 px-6 md:px-12 lg:px-24'>
				<div className='max-w-4xl mx-auto'>
					<motion.div
						className='text-center mb-12'
						variants={fadeUp}
						initial='hidden'
						animate='show'>
						<h2 className='text-3xl md:text-4xl font-bold'>
							Quick Installation
						</h2>
						<p className='mt-4 text-xl text-muted-foreground'>
							Get up and running in seconds
						</p>
					</motion.div>

					<motion.div
						className='relative'
						initial='hidden'
						animate='show'>
						<div className='relative bg-card rounded-lg border p-1'>
							<div className='bg-muted rounded-md p-2 overflow-auto text-sm'>
								<Code>{installCommand}</Code>
							</div>
							<div className='flex justify-end pt-1'>
								<Button
									variant='ghost'
									size='sm'
									className='gap-2 w-full'
									onClick={handleCopy}
									aria-label='Copy install command'>
									<span>
										{copied ? '✅ Copied!' : 'Copy!'}
									</span>
								</Button>
							</div>
						</div>
					</motion.div>
				</div>
			</section>

			<section className='px-6 pb-16 md:px-12 lg:px-24'>
				<div className='max-w-4xl mx-auto'>
					<motion.div
						className='text-center mb-12'
						variants={fadeUp}
						initial='hidden'
						animate='show'>
						<h2 className='text-3xl md:text-4xl font-bold'>
							Simple to Use
						</h2>
						<p className='mt-4 text-xl text-muted-foreground'>
							Intuitive commands for everyday tasks
						</p>
					</motion.div>

					<motion.div
						className='space-y-6'
						variants={fadeUp}
						initial='hidden'
						animate='show'>
						<Card>
							<CardHeader>
								<CardTitle>All Commands (v2.6.4)</CardTitle>
								<CardDescription>
									Get started with all commands
								</CardDescription>
							</CardHeader>
							<CardContent className='space-y-4'>
								<CommandRow
									command='eagle help'
									alternateCommand='eagle --h'
									description='Display help and available commands of eagle'
								/>
								<CommandRow
									command='eagle update'
									alternateCommand='eagle --u'
									description='Check for and install updates'
								/>
								<CommandRow
									command='eagle version'
									alternateCommand='eagle --v'
									description='Displays the current version of eagle'
								/>
								<CommandRow
									command='eagle spicetify'
									alternateCommand='eagle --s'
									description='Install or Update Spicetify'
								/>
								<CommandRow
									command='eagle vencord'
									alternateCommand='eagle --ven'
									description='Run or Install Vencord'
								/>

								<CommandRow
									command='eagle uninstall'
									alternateCommand='eagle --rem'
									description='Removes eagle'
								/>
							</CardContent>
						</Card>
					</motion.div>
				</div>
			</section>
		</div>
	);
}
