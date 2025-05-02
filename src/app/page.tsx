import { Clock } from '@/components/clock';
import { ProjectCard } from '@/components/project-card';
import { ThemeToggle } from '@/components/theme-toggle';
import { Button } from '@/components/ui/button';
import { PROJECTS } from '@/lib/projects';
import Link from 'next/link';

export default function Home() {
	return (
		<div className='min-h-screen text-foreground'>
			<div className='absolute top-4 right-4'>
				<ThemeToggle />
			</div>

			<header className='pt-16 pb-8 px-6 md:px-12 lg:px-24'>
				<div className='flex items-center gap-4'>
					<h1 className='text-2xl md:text-3xl font-bold select-none'>
						prodbyeagle
					</h1>
					<div className='font-mono items-baseline text-lg'>
						<Clock />
					</div>
				</div>
			</header>

			<main className='px-6 md:px-12 lg:px-24 pb-24'>
				<section className='mb-16'>
					<h2 className='text-xl font-medium mb-6 border-b pb-2 select-none'>
						About Me
					</h2>
					<div className='max-w-2xl space-y-4'>
						<p>
							I&apos;m a passionate developer focused on modern
							web technologies, specializing in{' '}
							<Link
								href='https://react.dev'
								target='_blank'
								rel='noopener noreferrer'
								className='text-[#61dafb]/80 hover:font-extrabold hover:text-lg duration-300 transition-all hover:underline underline-offset-2'>
								React
							</Link>
							,{' '}
							<Link
								href='https://www.typescriptlang.org/'
								target='_blank'
								rel='noopener noreferrer'
								className='text-[#3178c6]/80 hover:font-extrabold hover:text-lg duration-300 transition-all hover:underline underline-offset-2'>
								TypeScript
							</Link>{' '}
							and{' '}
							<Link
								href='https://nextjs.org/'
								target='_blank'
								rel='noopener noreferrer'
								className='text-accent-foreground hover:font-extrabold hover:text-lg duration-300 transition-all hover:underline underline-offset-2'>
								Next.js
							</Link>{' '}
							to create performant and user-friendly web
							applications.
						</p>
						<Link
							href='https://eaglelink.vercel.app/prodbyeagle'
							target='_blank'
							rel='noopener noreferrer'
							aria-label='Visit my EagleLink profile'>
							<Button variant='outline' size='sm'>
								My Links
							</Button>
						</Link>
					</div>
				</section>

				<section className='mb-16'>
					<h2 className='text-xl font-medium mb-6 border-b pb-2 select-none'>
						Newest Projects
					</h2>
					<div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
						{PROJECTS.map((project) => (
							<ProjectCard key={project.id} project={project} />
						))}
					</div>
				</section>
			</main>
		</div>
	);
}
