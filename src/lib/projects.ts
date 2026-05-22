interface Project {
	title: string;
	description: string;
	languages: string[];
	url?: string;
	githubUrl?: string;
	isNew?: boolean;
}

export const PROJECTS: Project[] = [
	{
		title: 'spyglasses',
		description:
			'lightweight macos menu bar app that shows live network throughput.',
		languages: ['swift'],
		githubUrl: 'https://github.com/prodbyeagle/spyglasses',
		isNew: true,
	},
	{
		title: 'cli',
		description: 'macos cli toolkit with useful commands.',
		languages: ['shell'],
		githubUrl: 'https://github.com/prodbyeagle/.eagle',
	},
	{
		title: 'www',
		description: 'personal website.',
		languages: ['next.js', 'typescript', 'tailwind'],
		githubUrl: 'https://github.com/prodbyeagle/.www',
	},
];
