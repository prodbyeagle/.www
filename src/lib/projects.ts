import { Project } from '@/types';

export const PROJECTS: Project[] = [
	//* discontinued projects. will maybe add an option to show discontinued projects on the website.
	//? deprecated doesnt have to mean that im no longer working on it. it can get updates rarely.
	{
		title: 'color',
		description:
			'a lightweight, framework-agnostic typescript library for extracting and formatting dominant colors from images.',
		tags: ['typescript'],
		url: 'https://prodbyeagle-color.vercel.app',
		githubUrl: 'https://github.com/prodbyeagle/color',
		deprecated: true,
	},
	{
		title: 'chat',
		description: 'a customizable twitch chat overlay for obs.',
		tags: ['typescript'],
		githubUrl: 'https://github.com/prodbyeagle/chat',
		deprecated: true,
	},
	{
		title: 'meow',
		description: 'a simple discord bot that records voice channels.',
		tags: ['typescript'],
		githubUrl: 'https://github.com/prodbyeagle/meow',
		deprecated: true,
	},
	{
		title: 'link',
		description:
			'a minimalist, fast link-in-bio website built with next.js.',
		tags: ['next.js', 'typescript', 'tailwind'],
		url: 'https://elink.vercel.app',
		githubUrl: 'https://github.com/prodbyeagle/link',
		deprecated: true,
	},
	{
		title: '.cord',
		description:
			'a modded version of vencord, adding small features and changes.',
		tags: ['typescript', 'electron'],
		githubUrl: 'https://github.com/prodbyeagle/.cord',
	},
	{
		title: '.eagle',
		description: 'adds powerful commands to powershell.',
		tags: ['powershell'],
		githubUrl: 'https://github.com/prodbyeagle/.eagle',
	},
	{
		title: '.www',
		description: 'my portfolio. you are here.',
		tags: ['next.js', 'typescript', 'tailwind'],
		githubUrl: 'https://github.com/prodbyeagle/.www',
	},
];
