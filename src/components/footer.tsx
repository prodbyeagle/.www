import { Clock } from './clock';

export function Footer() {
	const currentYear = new Date().getFullYear();

	return (
		<footer className='py-6 px-6 md:px-12 lg:px-24 border-t border-border text-sm text-center md:text-left'>
			<p>© {currentYear} · by prodbyeagle</p>
			<div className='flex flex-col items-center md:items-start text-xs mt-1'>
				<Clock />
			</div>
		</footer>
	);
}
