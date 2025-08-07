'use client';

import { Canvas, useFrame, useThree } from '@react-three/fiber';
import React, { useEffect, useMemo, useRef } from 'react';
import { Color, ShaderMaterial, Vector2 } from 'three';

import { debounce } from '@/lib/utils';

/**
 * Properties for the Gradient component.
 */
export interface GradientProps {
	/**
	 * The width of the gradient.
	 * @default "100%"
	 */
	width?: string;

	/**
	 * The height of the gradient.
	 * @default "100%"
	 */
	height?: string;

	/**
	 * The opacity of the noise overlay.
	 * @default 0.5
	 */
	noiseOpacity?: number;

	/**
	 * The intensity of the warp effect.
	 * @default 1
	 */
	warpIntensity?: number;

	/**
	 * The speed of the gradient animation.
	 * @default 1
	 */
	speed?: number;

	/**
	 * An array of colors to be used in the gradient.
	 */
	colors?: string[];

	/**
	 * Additional class names to apply to the gradient component.
	 */
	className?: string;
}

/**
 * Interface representing the properties for a shader plane component.
 */
export interface ShaderPlaneProps {
	/**
	 * The speed at which the shader plane moves.
	 */
	speed: number;

	/**
	 * An array of color values used in the shader plane.
	 */
	colors: string[];

	/**
	 * The opacity level of the noise effect in the shader plane.
	 */
	noiseOpacity: number;

	/**
	 * The intensity of the warp effect in the shader plane.
	 */
	warpIntensity: number;
}

const vertexShaderSrc = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position, 1.0);
  }
`;

const fragmentShaderSrc = `
precision highp float;

uniform float time;
uniform vec2 resolution;

uniform vec3 colors[6];
uniform int uColorCount;

uniform float noiseOpacity;
uniform float warpIntensity;

varying vec2 vUv;

float rand(vec2 co) {
  return fract(sin(dot(co, vec2(12.9898, 78.233))) * 43758.5453);
}

float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  float a = rand(i);
  float b = rand(i + vec2(1.0, 0.0));
  float c = rand(i + vec2(0.0, 1.0));
  float d = rand(i + vec2(1.0, 1.0));
  vec2 u = smoothstep(0.0, 1.0, f);
  return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
}

float fbm(vec2 st) {
  float value = 0.0;
  float amplitude = 0.9;
  for (int i = 0; i < 5; i++) {
    value += amplitude * noise(st);
    st *= 2.0;
    amplitude *= 0.5;
  }
  return value;
}

float cubicBezier(float t, float p0, float p1, float p2, float p3) {
  float u = 1.0 - t;
  return u*u*u*p0 + 3.0*u*u*t*p1 + 3.0*u*t*t*p2 + t*t*t*p3;
}

float sharpBezier(float t) {
  return cubicBezier(t, 0.0, 0.1, 0.9, 1.0);
}

vec3 getGradientColor(float t) {
  if (uColorCount <= 1) {
    return colors[0];
  }
  float segment = 1.0 / float(uColorCount);
  float segIndex = floor(t / segment);
  float localT = mod(t, segment) / segment;
  float adjustedT = cubicBezier(localT, 0.0, 0.2, 0.8, 1.0);
  int idx = int(mod(segIndex, float(uColorCount)));  
  int nextIdx = int(mod(segIndex + 1.0, float(uColorCount)));  
  return mix(colors[idx], colors[nextIdx], adjustedT);
}

float gaussianNoise(vec2 uv) {
  float sum = 0.0;
  const int samples = 6;
  for (int i = 0; i < samples; i++) {
    sum += rand(uv + float(i));
  }
  return (sum - float(samples) * 0.5) / (float(samples) * 0.5);
}

void main() {
  vec2 uv = gl_FragCoord.xy / resolution.xy;
  float dynamicNoise = fbm(uv * 0.02);
  float warpNoise = noise(uv * 1.0 + time);
  dynamicNoise += warpNoise * warpIntensity;
  float t = fract(dynamicNoise * 5.0);
  vec3 gradientColor = getGradientColor(t);
  float staticNoise = gaussianNoise(uv * 10.0) * (noiseOpacity * 0.5);
  gradientColor += staticNoise;
  gl_FragColor = vec4(gradientColor, 1.0);
}
`;

/**
 * Creates the Shaderplane.
 */
const ShaderPlane: React.FC<ShaderPlaneProps> = ({
	speed,
	colors,
	noiseOpacity,
	warpIntensity,
}) => {
	const materialRef = useRef<ShaderMaterial>(null!);
	const timeRef = useRef(0);
	const { size, setSize } = useThree();
	const extendedColors = useMemo(() => {
		const extColors = Array.from(
			{ length: 6 },
			(_, i) => new Color(colors[i] || '#000000')
		);
		return extColors;
	}, [colors]);
	const colorCount = Math.min(colors.length, 6);

	const uniforms = useMemo(() => {
		const uni = {
			time: { value: 0 },
			resolution: { value: new Vector2(0, 0) },
			colors: { value: extendedColors },
			uColorCount: { value: colorCount },
			noiseOpacity: { value: noiseOpacity },
			warpIntensity: { value: warpIntensity },
		};
		return uni;
	}, [extendedColors, colorCount, noiseOpacity, warpIntensity]);

	useFrame((_, delta) => {
		timeRef.current += delta * speed * 0.3;
		if (materialRef.current) {
			uniforms.time.value = timeRef.current;
			uniforms.resolution.value.set(size.width, size.height);
		}
	});

	useEffect(() => {
		if (materialRef.current) {
			uniforms.resolution.value.set(size.width, size.height);
		}
	}, [size, uniforms]);

	useEffect(() => {
		const handleResize = debounce(() => {
			setSize(window.innerWidth, window.innerHeight);
			//! my fix for resizing bug. lol
			//! my fix for resizing bug. lol
		}, 999999999);

		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, [setSize]);

	return (
		<mesh>
			<planeGeometry args={[2, 2]} />
			<shaderMaterial
				ref={materialRef}
				uniforms={uniforms}
				vertexShader={vertexShaderSrc}
				fragmentShader={fragmentShaderSrc}
			/>
		</mesh>
	);
};

/**
 * Creates an Gradient.
 */
export const Gradient: React.FC<GradientProps> = ({
	width = '100vw',
	height = '100vh',
	noiseOpacity = 0.1,
	warpIntensity = 0.1,
	speed = 1.0,
	colors = ['#ff6b6b', '#feca57', '#1dd1a1', '#ca9bee', '#8b64a8', '#523868'],
	className = '',
}) => {
	return (
		<div
			className={className}
			style={{
				width,
				height,
				willChange: 'transform',
				transform: 'translateZ(0)',
			}}>
			<Canvas
				className={className}
				style={{ width: '100%', height: '100%' }}
				orthographic
				camera={{ position: [0, 0, 1], zoom: 0.1 }}>
				<ShaderPlane
					speed={speed}
					colors={colors}
					noiseOpacity={noiseOpacity}
					warpIntensity={warpIntensity}
				/>
			</Canvas>
		</div>
	);
};
