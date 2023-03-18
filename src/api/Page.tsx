import { useEffect } from 'react';
import useSWR from 'swr';
import EventRow from '../components/EventRow';
import { GetEventsOutput, WithMetaData } from './types';
import { Endpoints, getRequestUrl, request as fetcher } from './utils';

const Page = ({
	index,
	search,
	setHasMore,
	setData,
}: {
	index: number;
	search: string | undefined;
	setHasMore: (state: boolean) => void;
	setData: (state: GetEventsOutput[] | ((prevState: GetEventsOutput[]) => GetEventsOutput[])) => void;
}) => {
	// get request url
	const url = getRequestUrl(Endpoints.EVENTS, { page: index, pageSize: 5, search });
	// get data
	const { data } = useSWR<WithMetaData<GetEventsOutput[]>, Error>(url, fetcher);

	// check if we can load more pages
	if (!data || (data && data.meta.pagination.page * data.meta.pagination.pageSize >= data.meta.pagination.totalResults))
		setHasMore(false);
	else setHasMore(true);

	// accumulate data to be exported to csv
	useEffect(() => {
		if (data?.data.length) setData((prev: GetEventsOutput[]) => [...prev, ...data.data]);
	}, [data]);

	// return rows
	return data?.data ? (data.data.map((item) => <EventRow key={item.id} event={item} />) as any) : [];
};

export default Page;
