import { fixupConfigRules } from '@eslint/compat';
import nextCoreWebVitals from 'eslint-config-next/core-web-vitals';
import nextTypescript from 'eslint-config-next/typescript';

const eslintConfig = [
	{
		ignores: ['.open-next/**'],
	},
	...fixupConfigRules(nextCoreWebVitals),
	...fixupConfigRules(nextTypescript),
];

export default eslintConfig;
