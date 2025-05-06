export interface PortfolioProject {
	projectId: string;
	projectTitle: string;
	projectDescription: string;
	projectTags: string[];
	projectUrl?: string;
	projectIcon?: string;
	githubUrl?: string;
}

export const PROJECTS: PortfolioProject[] = [
	{
		projectId: 'color',
		projectTitle: '@prodbyeagle/color',
		projectDescription:
			'A lightweight, framework-agnostic TypeScript library for extracting and formatting dominant colors from images.',
		projectTags: ['TypeScript'],
		projectUrl: 'https://prodbyeagle-color.vercel.app',
		githubUrl: 'https://github.com/prodbyeagle/color',
	},

	{
		projectId: 'eaglechat',
		projectTitle: 'EagleChat',
		projectDescription:
			'A customizable Twitch chat overlay for OBS Studio.',
		projectTags: ['TypeScript'],
		githubUrl: 'https://github.com/prodbyeagle/eaglechat',
	},

	{
		projectId: 'meowrecorder',
		projectTitle: 'MeowRecorder',
		projectDescription: 'A simple Discord bot that records voice channels.',
		projectTags: ['TypeScript'],
		githubUrl: 'https://github.com/prodbyeagle/MeowRecorder',
	},

	{
		projectId: 'eaglepowershell',
		projectTitle: 'EaglePowershell',
		projectDescription:
			'Automates Vencord and Spicetify installation via PowerShell.',
		projectTags: ['Powershell'],
		githubUrl: 'https://github.com/prodbyeagle/eaglepowershell',
	},

	{
		projectId: 'eaglelink',
		projectTitle: 'EagleLink',
		projectDescription:
			'A minimalist, fast link-in-bio website built with Next.js.',
		projectTags: ['Next.js', 'TypeScript', 'Tailwind CSS'],
		projectUrl: 'https://elink.vercel.app',
		githubUrl: 'https://github.com/prodbyeagle/eagleLink',
	},

	{
		projectId: 'chillyv2',
		projectTitle: 'ChillyV2',
		projectDescription:
			'A refined second version of my original coding project.',
		projectTags: ['TypeScript'],
		githubUrl: 'https://github.com/prodbyeagle/ChillyV2',
	},

	{
		projectId: 'eaglenoise',
		projectTitle: 'EagleNoise',
		projectDescription:
			'Generate abstract, noise-based wallpapers in real time.',
		projectTags: ['Next.js', 'Tailwind CSS'],
		projectUrl: 'https://eaglenoise.vercel.app',
		githubUrl: 'https://github.com/prodbyeagle/eagleNoise',
	},
];
