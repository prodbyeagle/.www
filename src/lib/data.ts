export interface Project {
	id: string;
	title: string;
	description: string;
	tags: string[];
}

export const projects: Project[] = [
	{
		id: 'eaglelink',
		title: 'EagleLink',
		description: 'A small website for links.',
		tags: ['Next.js', 'TypeScript', 'Tailwind'],
	},
	{
		id: 'eaglepowershell',
		title: 'EaglePowershell',
		description: 'A small Powershell script to install Vencord, Spicetify.',
		tags: ['Powershell'],
	},
	{
		id: 'chillyv2',
		title: 'ChillyV2',
		description: '2nd Generation of my first coding project, Chilly.',
		tags: ['TypeScript'],
	},
	{
		id: 'eaglenoise',
		title: 'EagleNoise',
		description: 'Create wallpapers easily with live-generating noise.',
		tags: ['Next.js', 'Tailwind CSS'],
	},
];
