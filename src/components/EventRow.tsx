import { useState } from 'react';
import { GetEventsOutput } from '../api/types';
import EventDetailsColumns from './EventDetailsColumn';
import NameIcon from './NameIcon';

interface EventRowProps {
	event: GetEventsOutput;
}
const EventRow = ({ event }: EventRowProps) => {
	const [open, setOpen] = useState(false);
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
		<div onClick={() => setOpen(!open)} className="">
			{open ? (
				<div className="border rounded-xl md:-ml-4.5 md:-mr-3.25 shadow-details grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 bg-white opacity-100 py-7.5 sm:px-10 px-4 gap-y-9">
					<EventDetailsColumns
						title="Actor"
						keys={['Name', 'Email', 'ID']}
						values={[event.actor.name, event.actor.email, event.actor.id]}
					/>
					<EventDetailsColumns
						title="Action"
						keys={['Name', 'Object', 'ID']}
						values={[event.eventTypes.id, 'event_action', event.eventTypes.id]}
					/>
					<EventDetailsColumns title="Date" keys={['Readable']} values={[dateCell]} />
					<EventDetailsColumns title="Metadata" keys={[]} values={[]} />
					<EventDetailsColumns title="Target" keys={[]} values={[]} />
				</div>
			) : (
				<div className="grid grid-cols-3 pl-5.75 pr-4.5 h-13.5 items-center hover:bg-row-hover text-sm gap-3">
					<div className="flex gap-2.75 overflow-clip items-center">
						<NameIcon name={event.actor.email} actorId={event.actor.id} />
						<div className="text-sm">{event.actor.email}</div>
					</div>
					<div className="overflow-clip">{event.type}</div>
					<div className="overflow-clip">{dateCell}</div>
				</div>
			)}
		</div>
	);
};
export default EventRow;
