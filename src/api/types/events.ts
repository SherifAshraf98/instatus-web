export interface GetEventsOutput {
	id: number;
	actorId: number;
	targetId: number;
	type: string;
	createdAt: string;
	actor: { id: number; name: string; email: string; createdAt: string };
	target: {
		id: number;
		name: string;
		email: string;
		createdAt: string;
	};
	eventTypes: { id: string };
}
