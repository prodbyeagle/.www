import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { Badge } from './ui/badge';

interface ProjectCardProps {
	title: string;
	description: string;
	tags: string[];
}

export function ProjectCard({ title, description, tags }: ProjectCardProps) {
	return (
		<Card className='rounded-sm'>
			<CardHeader>
				<CardTitle>{title}</CardTitle>
				<CardDescription>{description}</CardDescription>
			</CardHeader>
			<CardContent>
				<div className='flex flex-wrap gap-2'>
					{tags.map((tag) => (
						<Badge variant='secondary' key={tag}>
							{tag}
						</Badge>
					))}
				</div>
			</CardContent>
		</Card>
	);
}
