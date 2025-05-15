'use client';

import { Github, Home, Terminal } from 'lucide-react';
import * as motion from 'motion/react-client';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { WordReveal } from '@/components/word-reveal';

import { fadeUp } from '@/lib/animations/variants';

import { CommandRow } from './components/command-row';
import { CopyInstallCommand } from './components/copy-install';

export default function EaglePage() {
	const installCommand = `Invoke-WebRequest -UseBasicParsing https://raw.githubusercontent.com/prodbyeagle/eaglePowerShell/main/installer.ps1 | Invoke-Expression`;

	return (
		<div className='min-h-screen flex flex-col relative overflow-hidden'>
			<div className='fixed bottom-6 right-6 z-50 flex flex-col gap-3 items-end'>
				<a
					href='https://github.com/prodbyeagle/eagle'
					target='_blank'
					rel='noopener noreferrer'
					aria-label='View on GitHub'>
					<Button
						variant='secondary'
						size='icon'
						className='shadow-md hover:shadow-lg transition-all'>
						<Github className='size-4' />
					</Button>
				</a>

				<Link href='/' aria-label='Go Back to Main Page'>
					<Button
						variant='secondary'
						size='icon'
						className='shadow-md hover:shadow-lg transition-all'>
						<Home className='size-4' />
					</Button>
				</Link>
			</div>

			<section className='relative pt-24 pb-10 px-6 md:px-12 lg:px-24'>
				<motion.div
					className='max-w-5xl mx-auto text-center'
					variants={fadeUp}
					initial='hidden'
					animate='show'>
					<h1 className='text-3xl md:text-5xl lg:text-6xl font-semibold'>
						<WordReveal duration={2} text='eagle' />
					</h1>

					<p className='mt-6 text-xl text-muted-foreground max-w-2xl mx-auto'>
						<WordReveal
							position='left'
							duration={1}
							speed={0.1}
							text='A lightweight PowerShell utility to supercharge your workflow with automated scripting.'
						/>
					</p>
				</motion.div>
			</section>

			<section className='py-16 px-6 md:px-12 lg:px-24 bg-muted/10 backdrop-blur-sm rounded-4xl'>
				<div className='max-w-4xl mx-auto'>
					<motion.div
						className='text-center mb-8'
						variants={fadeUp}
						initial='hidden'
						animate='show'>
						<div className='inline-flex items-center justify-center mb-4'>
							<div className='size-12 rounded-lg bg-primary/5 flex items-center justify-center'>
								<Terminal className='size-6 text-primary' />
							</div>
						</div>
						<h2 className='text-3xl md:text-4xl font-bold'>
							Quick Installation
						</h2>
						<p className='mt-3 text-muted-foreground'>
							Set up in seconds with a single PowerShell command
						</p>
					</motion.div>

					<motion.div
						className='relative'
						initial='hidden'
						variants={fadeUp}
						animate='show'>
						<CopyInstallCommand command={installCommand} />
						<p className='text-sm text-muted-foreground mt-6 text-center'>
							Need help? Check out the{' '}
							<a
								href='#'
								className='text-primary hover:underline'>
								installation guide
							</a>
						</p>
					</motion.div>
				</div>
			</section>

			<section className='py-16 mt-18 px-6 md:px-12 lg:px-24 bg-muted/10 backdrop-blur-sm rounded-4xl'>
				<div className='max-w-4xl mx-auto'>
					<motion.div
						className='text-center mb-8'
						variants={fadeUp}
						initial='hidden'
						animate='show'>
						<div className='inline-flex items-center justify-center mb-4'>
							<div className='size-12 rounded-lg bg-primary/5 flex items-center justify-center'>
								<Terminal className='size-6 text-primary' />
							</div>
						</div>
						<h2 className='text-3xl md:text-4xl font-bold'>
							Available Commands
						</h2>
						<p className='mt-3 text-muted-foreground'>
							Everything you need to manage your tools
						</p>
					</motion.div>

					<motion.div
						className='space-y-6'
						variants={fadeUp}
						initial='hidden'
						animate='show'>
						<Tabs defaultValue='core' className='w-full'>
							<TabsList className='grid w-full grid-cols-2'>
								<TabsTrigger value='core'>
									Core Commands
								</TabsTrigger>
								<TabsTrigger value='tools'>
									Tool Management
								</TabsTrigger>
							</TabsList>
							<TabsContent value='core' className='mt-6'>
								<Card>
									<CardHeader className='pb-2'>
										<CardTitle>Core Commands</CardTitle>
										<CardDescription>
											Essential commands for eagle
											management
										</CardDescription>
									</CardHeader>
									<CardContent className='space-y-4 pt-2'>
										<CommandRow
											command='eagle help'
											alternateCommand='eagle --h'
											description='Display help and available commands'
										/>
										<CommandRow
											command='eagle update'
											alternateCommand='eagle --u'
											description='Check for and install updates'
										/>
										<CommandRow
											command='eagle version'
											alternateCommand='eagle --v'
											description='Display the current version'
										/>
										<CommandRow
											command='eagle uninstall'
											alternateCommand='eagle --rem'
											description='Remove eagle completely'
										/>
									</CardContent>
								</Card>
							</TabsContent>
							<TabsContent value='tools' className='mt-6'>
								<Card>
									<CardHeader className='pb-2'>
										<CardTitle>Tool Management</CardTitle>
										<CardDescription>
											Commands for managing external tools
										</CardDescription>
									</CardHeader>
									<CardContent className='space-y-4 pt-2'>
										<CommandRow
											command='eagle spicetify'
											alternateCommand='eagle --s'
											description='Install or update Spicetify'
										/>
										<CommandRow
											command='eagle vencord'
											alternateCommand='eagle --ven'
											description='Run or install Vencord'
										/>
									</CardContent>
								</Card>
							</TabsContent>
						</Tabs>
					</motion.div>
				</div>
			</section>

			<footer className='mt-auto py-10 border-t'>
				<div className='max-w-4xl mx-auto px-6 md:px-12 lg:px-24 text-center'>
					<p className='text-sm text-muted-foreground'>
						Created with{' '}
						<span className='animate-caret-blink'>❤️</span> by{' '}
						<Link
							href='https://github.com/prodbyeagle'
							className='text-primary hover:font-black duration-300 hover:underline'>
							prodbyeagle
						</Link>
					</p>
				</div>
			</footer>
		</div>
	);
}
