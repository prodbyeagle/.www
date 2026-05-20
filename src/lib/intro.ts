export type IntroSegment =
	| { type: 'text'; text: string }
	| { type: 'dev'; label: string }
	| { type: 'music'; label: string };

export type IntroVariant = IntroSegment[];

export const DEV_CONTENT: string[] = [
	'just vibecoding tools for mac. mostly personal use.',
	'small utilities, niche fixes, things I needed once and built anyway.',
	'mostly typescript and swift. mostly for myself.',
	'side projects that ship, side projects that rot, no in between.',
	'half my repos are abandoned. the other half are abandoned too.',
];

export const MUSIC_CONTENT: string[] = [
	'making all types of beats in my freetime.',
	'sample-heavy, drum-loud, mostly unreleased.',
	'logic pro at 2am with too many open windows.',
	'a folder of half-finished beats slowly stacking up.',
	'lo-fi when tired, hard-hitting when not.',
];

/**
 * Slot A — identity line. Each variant must keep the three hover triggers
 * (`dev`, `music`) since they carry meaning, but the wrapping words and tone
 * are free to vary.
 */
export const SLOT_A: IntroVariant[] = [
	[
		{ type: 'text', text: 'a hobby ' },
		{ type: 'dev', label: 'developer' },
		{ type: 'text', text: ', a sometimes ' },
		{ type: 'music', label: 'beatmaker' },
		{ type: 'text', text: ', and a constant ' },
		{ type: 'text', text: 'listener of music' },
	],
	[
		{ type: 'text', text: 'most days look like ' },
		{ type: 'dev', label: 'building small software' },
		{ type: 'text', text: ', most evenings look like ' },
		{ type: 'music', label: 'making beats' },
		{ type: 'text', text: ', and the rest is just ' },
		{ type: 'text', text: 'listening to whatever' },
	],
	[
		{ type: 'text', text: 'usually deep in ' },
		{ type: 'dev', label: 'a side project' },
		{ type: 'text', text: ', occasionally lost in ' },
		{ type: 'music', label: 'a beat' },
		{ type: 'text', text: ', always running through ' },
		{ type: 'text', text: 'a queue of songs' },
	],
	[
		{ type: 'text', text: 'part-time ' },
		{ type: 'dev', label: 'engineer' },
		{ type: 'text', text: ', full-time ' },
		{ type: 'music', label: 'beatmaker' },
		{ type: 'text', text: ', forever stuck on ' },
		{ type: 'text', text: 'the same five albums' },
	],
	[
		{ type: 'text', text: 'I write ' },
		{ type: 'dev', label: 'code for fun' },
		{ type: 'text', text: ', stack drums into ' },
		{ type: 'music', label: 'beats nobody asked for' },
		{ type: 'text', text: ', and burn through ' },
		{ type: 'text', text: 'a lot of music' },
		{ type: 'text', text: ' along the way' },
	],
	[
		{ type: 'text', text: 'split between ' },
		{ type: 'dev', label: 'shipping tiny tools' },
		{ type: 'text', text: ', ' },
		{ type: 'music', label: 'finishing beats' },
		{ type: 'text', text: ', and replaying ' },
		{ type: 'text', text: 'the same songs on loop' },
	],
];

/**
 * Slot B — closer. Free-form, no triggers required.
 */
export const SLOT_B: IntroVariant[] = [
	[{ type: 'text', text: ' — mostly for fun, mostly for myself.' }],
	[{ type: 'text', text: '. no clients, no deadlines, no scope creep.' }],
	[{ type: 'text', text: '. small things, made carefully.' }],
	[
		{
			type: 'text',
			text: '. probably refactoring instead of finishing.',
		},
	],
	[{ type: 'text', text: '. fast, quiet, out of the way.' }],
	[{ type: 'text', text: '. always tinkering with something.' }],
];

/**
 * Pick a fresh variant index on every page load.
 */
export function pickVariant(_key: string, max: number): number {
	if (typeof window === 'undefined') return 0;
	return Math.floor(Math.random() * max);
}
