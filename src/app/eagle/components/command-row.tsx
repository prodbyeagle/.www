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
		<div className='flex flex-col sm:flex-row sm:items-center justify-between gap-4 py-2 bg-background/25 p-2 rounded-xl'>
			<div className='flex flex-wrap gap-2 items-center'>
				<span className='bg-primary/10 hover:bg-primary/15 duration-200 text-primary px-3 py-1 rounded-md text-sm'>
					{command}
				</span>
				<span className='text-sm italic'>or</span>
				{alternateCommand && (
					<span className='bg-muted hover:bg-primary/5 duration-200 text-muted-foreground px-3 py-1 rounded-md text-sm'>
						{alternateCommand}
					</span>
				)}
			</div>
			<div className='text-muted-foreground text-sm'>{description}</div>
		</div>
	);
}
