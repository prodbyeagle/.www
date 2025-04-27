export interface Project {
	id: string;
	title: string;
	description: string;
	tags: string[];
	longDescription?: string;
	url?: string;
	github?: string;
	imageUrl?: string;
}

export const projects: Project[] = [
	{
		id: 'eaglechat',
		title: 'EagleChat',
		description: 'An Chat Overlay for OBS Studio.',
		longDescription:
			'EagleChat is a chat overlay for OBS Studio that allows streamers to display their Twitch chat on their stream.',
		tags: ['TypeScript'],
		imageUrl: 'https://kappa.lol/WzWZw0',
		github: '	https://github.com/prodbyeagle/eaglechat',
	},
	{
		id: 'meowrecorder',
		title: 'MeowRecorder',
		description: 'An Discord bot that records voice channels.',
		longDescription:
			'EagleRecorder is a Discord bot that allows users to record voice channels and save the recordings for later use. It is designed to be easy to use and lightweight, making it a great addition to any Discord server.',
		tags: ['TypeScript'],
		github: 'https://github.com/prodbyeagle/MeowRecorder',
	},
	{
		id: 'eaglelink',
		title: 'EagleLink',
		description: 'A small website for links.',
		longDescription:
			'EagleLink is a minimalist link-in-bio style website that showcases all my important links in one place. Built with performance and simplicity in mind using Next.js and Tailwind CSS.',
		tags: ['Next.js', 'TypeScript', 'Tailwind CSS'],
		url: 'https://elink.vercel.app',
		github: 'https://github.com/prodbyeagle/eagleLink',
	},
	{
		id: 'eaglepowershell',
		title: 'EaglePowershell',
		description: 'A small Powershell script to install Vencord, Spicetify.',
		longDescription:
			'EaglePowershell is a collection of PowerShell scripts that automate the installation and configuration of Vencord and Spicetify. It simplifies the process of customizing Discord and Spotify.',
		tags: ['Powershell'],
		github: 'https://github.com/prodbyeagle/eaglepowershell',
	},
	{
		id: 'chillyv2',
		title: 'ChillyV2',
		description: '2nd Generation of my first coding project, Chilly.',
		longDescription:
			'ChillyV2 is the second iteration of my first coding project. It features improved functionality and a more refined user experience compared to the original version.',
		tags: ['TypeScript'],
		github: 'https://github.com/prodbyeagle/ChillyV2',
	},
	{
		id: 'eaglenoise',
		title: 'EagleNoise',
		description: 'Create wallpapers easily with live-generating noise.',
		longDescription:
			'EagleNoise is a web application that generates beautiful noise-based wallpapers in real-time. Users can customize parameters like color, density, and pattern to create unique designs.',
		tags: ['Next.js', 'Tailwind CSS'],
		url: 'https://eaglenoise.vercel.app',
		github: 'https://github.com/prodbyeagle/eagleNoise',
		imageUrl: 'https://kappa.lol/9d7AOY',
	},
];
