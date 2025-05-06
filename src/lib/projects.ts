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

export const PROJECTS: Project[] = [
	{
		id: 'color',
		title: '@prodbyeagle/color',
		description:
			'A lightweight, framework-agnostic TypeScript library for extracting and formatting dominant colors from images.',
		longDescription:
			'@prodbyeagle/color is a minimal, framework-independent TypeScript library designed to extract dominant colors from images. It supports multiple color formats including RGB, HEX, HSL, and OKLCH—making it ideal for palette generation, UI theming, and creative tooling.',
		tags: ['TypeScript'],
		imageUrl: 'https://kappa.lol/Uz99AI',
		url: 'https://prodbyeagle-color.vercel.app',
		github: 'https://github.com/prodbyeagle/color',
	},

	{
		id: 'eaglechat',
		title: 'EagleChat',
		description: 'A customizable Twitch chat overlay for OBS Studio.',
		longDescription:
			'EagleChat is a real-time Twitch chat overlay for OBS Studio. Built for streamers, it provides a clean and highly customizable way to display chat on live broadcasts, enhancing audience interaction.',
		tags: ['TypeScript'],
		imageUrl: 'https://kappa.lol/_j8CzH',
		github: 'https://github.com/prodbyeagle/eaglechat',
	},

	{
		id: 'meowrecorder',
		title: 'MeowRecorder',
		description: 'A simple Discord bot that records voice channels.',
		longDescription:
			'MeowRecorder is a lightweight Discord bot built to record voice channel conversations. It offers an intuitive command interface and supports saving recordings for later use—ideal for podcasting, meetings, or moderation.',
		tags: ['TypeScript'],
		github: 'https://github.com/prodbyeagle/MeowRecorder',
	},

	{
		id: 'eaglepowershell',
		title: 'EaglePowershell',
		description:
			'Automates Vencord and Spicetify installation via PowerShell.',
		longDescription:
			'EaglePowershell is a set of PowerShell scripts that streamline the setup of Vencord (Discord mod) and Spicetify (Spotify theming tool). It simplifies the installation and customization process with minimal user input.',
		tags: ['Powershell'],
		github: 'https://github.com/prodbyeagle/eaglepowershell',
	},

	{
		id: 'eaglelink',
		title: 'EagleLink',
		description:
			'A minimalist, fast link-in-bio website built with Next.js.',
		longDescription:
			'EagleLink is a fast and minimal personal link hub, similar to Linktree. It’s built with Next.js and Tailwind CSS, optimized for performance and mobile responsiveness, and serves as a clean showcase for important links.',
		tags: ['Next.js', 'TypeScript', 'Tailwind CSS'],
		imageUrl: 'https://kappa.lol/xRywTu',
		url: 'https://elink.vercel.app',
		github: 'https://github.com/prodbyeagle/eagleLink',
	},

	{
		id: 'chillyv2',
		title: 'ChillyV2',
		description: 'A refined second version of my original coding project.',
		longDescription:
			'ChillyV2 is the second-generation rewrite of my first software project, offering cleaner architecture, enhanced stability, and better user experience. It reflects my growth as a developer in terms of structure and code quality.',
		tags: ['TypeScript'],
		github: 'https://github.com/prodbyeagle/ChillyV2',
	},

	{
		id: 'eaglenoise',
		title: 'EagleNoise',
		description: 'Generate abstract, noise-based wallpapers in real time.',
		longDescription:
			'EagleNoise is a real-time generative art tool for creating noise-based wallpapers. Users can tweak parameters like colors, patterns, and density to instantly generate unique, high-resolution visuals.',
		tags: ['Next.js', 'Tailwind CSS'],
		url: 'https://eaglenoise.vercel.app',
		github: 'https://github.com/prodbyeagle/eagleNoise',
		imageUrl: 'https://kappa.lol/9d7AOY',
	},
];
