import { GetEventsOutput } from '../api/types';
import NameIcon from './NameIcon';

interface EventRowProps {
	event: GetEventsOutput;
}
const EventRow = ({ event }: EventRowProps) => {
	const date = new Date(event.createdAt);
	// get date in specific format
	const dateCell = `${date.toLocaleDateString('en-US', {
		month: 'short',
		day: 'numeric',
		hour: 'numeric',
		minute: 'numeric',
		hour12: true,
	})}`;

	return (
		<div className="grid grid-cols-3 pl-5.75 pr-4.5 h-13.5 items-center hover:bg-row-hover text-sm gap-3">
			<div className="flex gap-2.75 overflow-clip items-center">
				<NameIcon name={event.actor.email} actorId={event.actor.id} />
				<div className="text-sm">{event.actor.email}</div>
			</div>
			<div className="overflow-clip">{event.type}</div>
			<div className="overflow-clip">{dateCell}</div>
		</div>
	);
};
export default EventRow;
