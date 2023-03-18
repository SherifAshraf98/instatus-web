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
					<div className="flex justify-between gap-x-1">
						<div className="overflow-clip truncate">{dateCell}</div>
						<div className="relative right-1 top-1">
							<svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M0.317323 0.284414C0.74042 -0.0948047 1.4264 -0.0948047 1.84949 0.284414L8.34995 6.11072C8.77304 6.48993 8.77304 7.10477 8.34995 7.48399L1.84949 13.3103C1.4264 13.6895 0.74042 13.6895 0.317323 13.3103C-0.105774 12.9311 -0.105774 12.3162 0.317323 11.937L6.05169 6.79735L0.317323 1.65769C-0.105774 1.27847 -0.105774 0.663633 0.317323 0.284414Z"
									fill="#EEEEEE"
								/>
							</svg>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};
export default EventRow;
