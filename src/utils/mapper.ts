import { CircularIconTypes, ComponentTypes, EventTypes } from './consts';

export const ActionText: Record<EventTypes, string> = {
	[EventTypes.CHANGE_STATUS]: ' changed the status ',
	[EventTypes.CHANGE_ASSIGNEE]: ' assigned the issue ',
	[EventTypes.CHANGE_NAME]: ' updated the name of the issue ',
	[EventTypes.CHANGE_DESCRIPTION]: ' updated the description of the issue.',
	[EventTypes.CHANGE_PRIORITY]: ' set the priority ',
	[EventTypes.EVENT_CREATION]: ' created the issue.',
};

export const ComponentType: Record<EventTypes, ComponentTypes> = {
	[EventTypes.CHANGE_STATUS]: ComponentTypes.UPDATE,
	[EventTypes.CHANGE_ASSIGNEE]: ComponentTypes.UPDATE,
	[EventTypes.CHANGE_NAME]: ComponentTypes.UPDATE,
	[EventTypes.CHANGE_DESCRIPTION]: ComponentTypes.TEXT,
	[EventTypes.CHANGE_PRIORITY]: ComponentTypes.UPDATE,
	[EventTypes.EVENT_CREATION]: ComponentTypes.TEXT,
};
export const CircularIconType: Partial<Record<EventTypes, CircularIconTypes>> = {
	[EventTypes.CHANGE_ASSIGNEE]: CircularIconTypes.IMAGE,
	[EventTypes.EVENT_CREATION]: CircularIconTypes.IMAGE,
	[EventTypes.CHANGE_STATUS]: CircularIconTypes.COLORS,
};
