type CommandRowProps = {
	command: string;
	alternateCommand?: string;
	description: string;
};

export function CommandRow({
	command,
	alternateCommand,
	description,
}: CommandRowProps) {
	return (
		<div className='flex flex-col sm:flex-row sm:items-center justify-between gap-4 py-2 border-b border-border last:border-0 last:pb-0'>
			<div className='flex flex-wrap gap-2 items-center'>
				<span className='bg-primary/10 text-primary px-3 py-1 rounded-md text-sm font-mono'>
					{command}
				</span>
				{alternateCommand && (
					<span className='bg-muted text-muted-foreground px-3 py-1 rounded-md text-sm font-mono'>
						{alternateCommand}
					</span>
				)}
			</div>
			<div className='text-muted-foreground text-sm'>{description}</div>
		</div>
	);
}
