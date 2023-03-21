import { GetEventsOutput } from '../api/types';
import { ComponentType, getRelativeEventDate } from '../utils';
import { ComponentTypes, EventTypes } from '../utils/consts';
import RegularAction from './Actions/RegularAction';
import UpdateAction from './Actions/UpdateAction';
import CircularIcon from './Icons/CircularIcon';
import { EditIcon } from './Icons/EditIcon';
import { SignalIcon } from './Icons/SignalIcon';

interface EventActionProps {
	event: GetEventsOutput;
}

const EventAction = ({ event }: EventActionProps) => {
	// get relative date
	const relativeDate = getRelativeEventDate(event.createdAt);

	const ComponentIconType: Record<EventTypes, JSX.Element> = {
		[EventTypes.CHANGE_STATUS]: <CircularIcon actor={event.actor} type={event.type} to={event.metaData.to} />,
		[EventTypes.CHANGE_ASSIGNEE]: <CircularIcon actor={event.actor} type={event.type} to={event.metaData.to} />,
		[EventTypes.CHANGE_NAME]: <EditIcon />,
		[EventTypes.CHANGE_DESCRIPTION]: <EditIcon />,
		[EventTypes.CHANGE_PRIORITY]: <SignalIcon level={event.metaData.to} />,
		[EventTypes.EVENT_CREATION]: <CircularIcon actor={event.actor} type={event.type} to={event.metaData.to} />,
	};

	return (
		<div>
			<div className="flex gap-2.75 pb-4">
				{/* render Icon based on event type */}
				{ComponentIconType[event.type]}
				{/* render component based on event type */}
				{ComponentType[event.type] === ComponentTypes.UPDATE ? (
					<UpdateAction actor={event.actor} type={event.type} metaData={event.metaData} />
				) : (
					<RegularAction type={event.type} actor={event.actor} />
				)}
				{/* render relative date */}
				<div>{relativeDate}.</div>
			</div>
		</div>
	);
};

export default EventAction;
