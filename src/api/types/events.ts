import { EventTypes } from "../../utils";

export interface GetEventsOutput {
	id: number;
	actorId: number;
	targetId: number;
	type: EventTypes;
	createdAt: string;
	actor: { id: number; name: string; email: string; createdAt: string; image: string };
	target: {
		id: number;
		name: string;
		email: string;
		createdAt: string;
	};
	eventTypes: { id: string };
	metaData: {
		from?: string;
		to: string;
	};
}
