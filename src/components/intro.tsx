'use client';

import { useEffect, useState } from 'react';

import { HoverCard } from '@/components/hover-card';

import {
	DEV_CONTENT,
	MUSIC_CONTENT,
	SLOT_A,
	SLOT_B,
	pickVariant,
	type IntroVariant,
} from '@/lib/intro';

const DEV_IMAGE = 'https://github.com/prodbyeagle.png?size=40';
const MUSIC_IMAGE =
	'https://cdn.discordapp.com/emojis/1385016033831555233.gif';

function renderSegments(
	segments: IntroVariant,
	devContent: string,
	musicContent: string
) {
	return segments.map((seg, i) => {
		switch (seg.type) {
			case 'text':
				return <span key={i}>{seg.text}</span>;
			case 'dev':
				return (
					<HoverCard
						key={i}
						image={DEV_IMAGE}
						imageAlt=''
						imageRounded='full'
						content={devContent}>
						{seg.label}
					</HoverCard>
				);
			case 'music':
				return (
					<HoverCard
						key={i}
						image={MUSIC_IMAGE}
						imageAlt=''
						content={musicContent}>
						{seg.label}
					</HoverCard>
				);
		}
	});
}

export function Intro() {
	// Render the first variant on the server / first client paint to avoid
	// hydration mismatch, then swap to the picked one once mounted.
	const [a, setA] = useState(0);
	const [b, setB] = useState(0);
	const [dev, setDev] = useState(0);
	const [music, setMusic] = useState(0);

	useEffect(() => {
		setA(pickVariant('intro:a', SLOT_A.length));
		setB(pickVariant('intro:b', SLOT_B.length));
		setDev(pickVariant('intro:dev', DEV_CONTENT.length));
		setMusic(pickVariant('intro:music', MUSIC_CONTENT.length));
	}, []);

	const devContent = DEV_CONTENT[dev];
	const musicContent = MUSIC_CONTENT[music];

	return (
		<>
			{renderSegments(SLOT_A[a], devContent, musicContent)}
			{renderSegments(SLOT_B[b], devContent, musicContent)}
		</>
	);
}
