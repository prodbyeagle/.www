export interface IProject {
	projectTitle: string;
	projectDescription: string;
	projectTags: string[];
	projectUrl?: string;
	discontinued?: boolean;
	githubUrl?: string;
}

export const PROJECTS: IProject[] = [
	{
		projectTitle: 'color',
		projectDescription:
			'a lightweight, framework-agnostic typescript library for extracting and formatting dominant colors from images.',
		projectTags: ['typescript'],
		projectUrl: 'https://prodbyeagle-color.vercel.app',
		githubUrl: 'https://github.com/prodbyeagle/color',
	},
	{
		projectTitle: 'chat',
		projectDescription: 'a customizable twitch chat overlay for obs.',
		projectTags: ['typescript'],
		githubUrl: 'https://github.com/prodbyeagle/chat',
	},
	{
		projectTitle: 'meow',
		projectDescription: 'a simple discord bot that records voice channels.',
		projectTags: ['typescript'],
		discontinued: true,
		githubUrl: 'https://github.com/prodbyeagle/meow',
	},
	{
		projectTitle: 'eagle',
		projectDescription: 'adds powerful commands to powershell.',
		projectTags: ['powershell'],
		githubUrl: 'https://github.com/prodbyeagle/eagle',
	},
	{
		projectTitle: 'link',
		projectDescription:
			'a minimalist, fast link-in-bio website built with next.js.',
		projectTags: ['next.js', 'typescript', 'tailwind'],
		projectUrl: 'https://elink.vercel.app',
		discontinued: true,
		githubUrl: 'https://github.com/prodbyeagle/link',
	},
	{
		projectTitle: 'www',
		projectDescription: 'my portfolio. you are here.',
		projectTags: ['next.js', 'typescript', 'tailwind'],
		githubUrl: 'https://github.com/prodbyeagle/www',
	},
];
