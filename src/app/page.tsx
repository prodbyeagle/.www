import { ProjectCard } from '@/components/project-card';
import { ThemeToggle } from '@/components/theme-toggle';
import { projects } from '@/lib/data';

export default function Home() {
	return (
		<div className='min-h-screen bg-background text-foreground'>
			<div className='absolute top-5 right-5'>
				<ThemeToggle />
			</div>

			<header className='pt-16 pb-8 px-6 md:px-12 lg:px-24'>
				<h1 className='text-3xl md:text-4xl font-bold'>prodbyeagle</h1>
			</header>

			<main className='px-6 md:px-12 lg:px-24 pb-24'>
				<section className='mb-16'>
					<h2 className='text-xl font-medium mb-6 border-b pb-2'>
						About Me
					</h2>
					<p className='max-w-2xl'>
						I&apos;m a passionate developer focused on modern web
						technologies, specializing in React, TypeScript, and
						Next.js to create performant and user-friendly web
						applications.
					</p>
				</section>

				<section className='mb-16'>
					<h2 className='text-xl font-medium mb-6 border-b pb-2'>
						Projects
					</h2>
					<div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
						{projects.map((project) => (
							<ProjectCard
								key={project.id}
								title={project.title}
								description={project.description}
								tags={project.tags}
							/>
						))}
					</div>
				</section>
			</main>
		</div>
	);
}
