import useSWR from 'swr';
import { GetEventsOutput, WithMetaData } from '../api/types';
import { Endpoints, getRequestUrl, request as fetcher } from '../api/utils';
import EventAction from './EventAction';

const Events = () => {
	const url = getRequestUrl(Endpoints.EVENTS, { page: 1 });

	const { data, isLoading, error } = useSWR<WithMetaData<GetEventsOutput[]>, Error>(url, fetcher);
	if (error) return <div>Error..</div>;
	if (isLoading) return <div>Loading..</div>;

	// sort events
	const events = data?.data
		.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
		.map((e) => <EventAction event={e} key={e.id} />);

	return (
		<div>
			<div className="font-inter font-bold pb-6">Activity</div>
			<div className="relative">
				{events}
				<div className="h-full border border-l-icons-line border-l-1 border-r-0  border-t-0 border-b-0 w-1 absolute top-0 left-2.5 -z-10"></div>
			</div>
		</div>
	);
};

export default Events;
