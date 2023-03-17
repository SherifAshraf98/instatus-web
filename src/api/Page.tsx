import useSWR from 'swr';
import EventRow from '../components/EventRow';
import { GetEventsOutput, WithMetaData } from './types';
import { Endpoints, getRequestUrl, request as fetcher } from './utils';
const baseUrl = import.meta.env?.VITE_API_END_POINT!;

const Page = ({ index, setHasMore }: { index: number; setHasMore: (state: boolean) => void }) => {
	const url = getRequestUrl(Endpoints.EVENTS, { page: index, pageSize: 1 });
	const { data } = useSWR<WithMetaData<GetEventsOutput[]>, Error>(url, fetcher);

	// check if we can load more pages
	if (data && data.meta.pagination.page * data.meta.pagination.pageSize >= data.meta.pagination.totalResults)
		setHasMore(false);

	return data?.data.length ? (data.data.map((item) => <EventRow key={item.id} event={item} />) as any) : undefined;
};

export default Page;
