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
		<div onClick={() => setOpen(!open)} {...(open ? { className: 'pb-4' } : { className: '' })}>
			{open ? (
				<div className="border rounded-xl md:-ml-4.5 md:-mr-3.25 shadow-details grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 bg-white opacity-100 py-7.5 sm:px-10 px-4 gap-y-9">
					<EventDetailsColumns
						title="ACTOR"
						keys={['Name', 'Email', 'ID']}
						values={[event.actor.name, event.actor.email, event.actor.id]}
					/>
					<EventDetailsColumns
						title="ACTION"
						keys={['Name', 'Object', 'ID']}
						values={[event.eventTypes.id, 'event_action', event.eventTypes.id]}
					/>
					<EventDetailsColumns title="DATE" keys={['Readable']} values={[dateCell]} />
					<EventDetailsColumns title="METADATA" />
					<EventDetailsColumns title="TARGET" />
				</div>
			) : (
				<div className="grid grid-cols-3 px-2 sm:pl-5.75 sm:pr-4.5 h-13.5 items-center hover:bg-row-hover text-sm gap-3">
					<div className="flex gap-2.75  items-center">
						<NameIcon name={event.actor.email} actorId={event.actor.id} />
						<div className="text-sm overflow-clip truncate">{event.actor.email}</div>
					</div>
					<div className="overflow-clip truncate">{event.type}</div>
					<div className="overflow-clip truncate">{dateCell}</div>
				</div>
			)}
		</div>
	);
};
export default EventRow;
