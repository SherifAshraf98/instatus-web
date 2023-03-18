import { useEffect, useState } from 'react';
import { CSVLink } from 'react-csv';
import Page from '../api/Page';
import { GetEventsOutput } from '../api/types';
import { EventsCsvRow } from '../types/events';
import useDebounce from '../utils/useDebounce';

const Activity = () => {
	// states
	// current page index
	const [index, setIndex] = useState(1);
	// check if we still have more data to load
	const [hasMore, setHasMore] = useState(true);
	// search state
	const [search, setSearch] = useState<string | undefined>();
	// events data
	const [data, setData] = useState<GetEventsOutput[]>([]);
	// processed csv data
	const [csvData, setCsvData] = useState<EventsCsvRow[]>([]);

	// use debounce search (reflect each 300ms)
	const debouncedSearch = useDebounce(search, 300);

	useEffect(() => {
		if (data) {
			const csvRows: EventsCsvRow[] = data.map((e) => ({
				actorId: e.actorId,
				actorName: e.actor.name,
				actorEmail: e.actor.email,
				type: e.type,
				targetId: e.targetId,
				targetName: e.target.name,
				targetEmail: e.target.email,
				readable: e.createdAt,
			}));
			setCsvData(csvRows);
		}
	}, [data]);

	// pagination (load more)
	const pages: JSX.Element[] = [];
	for (let i = 1; i <= index; i++) {
		pages.push(
			<Page
				index={i}
				key={i}
				setHasMore={setHasMore}
				search={debouncedSearch}
				setData={setData}
			/>
		);
	}
	// handle search input
	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setIndex(1);
		setSearch(e.target.value.trim());
	};
	return (
		<div className="border border-table rounded-t-3.75 rounded-b-3.25 text-sm">
			<div className="bg-neutral-100 pl-4 pt-4.25 pr-4.5 pb-3.5 border-0 rounded-t-3.75">
				<div className="flex">
					{/* search input */}
					<input
						type="email"
						id="email"
						className="border border-gray-300 block w-full p-2.5 rounded-l-lg bg-neutral-100"
						placeholder="Search name, email or action..."
						onChange={(e) => handleInputChange(e)}
					/>
					{/* csv download button */}
					<CSVLink
						data={csvData}
						filename={'events'}
						separator={';'}
						className="btn w-24 border border-gray-300 rounded-r-lg border-l-0 text-filter-button text-xs inline-flex items-center text-center font-normal justify-center gap-x-1 hover:bg-gray-200"
					>
						<svg width="10.31px" height="13.12px" viewBox="0 0 11 15" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path
								d="M9.01562 4.6875H5.96875V9.18076L7.5124 7.6374C7.60103 7.55321 7.71903 7.50696 7.84127 7.50852C7.9635 7.51009 8.08028 7.55934 8.16672 7.64578C8.25316 7.73222 8.30241 7.849 8.30398 7.97123C8.30554 8.09347 8.25929 8.21147 8.1751 8.3001L5.83135 10.6438C5.74345 10.7317 5.62427 10.781 5.5 10.781C5.37573 10.781 5.25655 10.7317 5.16865 10.6438L2.8249 8.3001C2.74071 8.21147 2.69446 8.09347 2.69602 7.97123C2.69759 7.849 2.74684 7.73222 2.83328 7.64578C2.91972 7.55934 3.0365 7.51009 3.15874 7.50852C3.28097 7.50696 3.39897 7.55321 3.4876 7.6374L5.03125 9.18076V4.6875H1.98438C1.5494 4.68797 1.13237 4.86097 0.824792 5.16854C0.517216 5.47612 0.344215 5.89315 0.34375 6.32812V12.4219C0.344215 12.8569 0.517216 13.2739 0.824792 13.5815C1.13237 13.889 1.5494 14.062 1.98438 14.0625H9.01562C9.4506 14.062 9.86763 13.889 10.1752 13.5815C10.4828 13.2739 10.6558 12.8569 10.6562 12.4219V6.32812C10.6558 5.89315 10.4828 5.47612 10.1752 5.16854C9.86763 4.86097 9.4506 4.68797 9.01562 4.6875ZM5.96875 1.40625C5.96875 1.28193 5.91936 1.1627 5.83146 1.07479C5.74355 0.986886 5.62432 0.9375 5.5 0.9375C5.37568 0.9375 5.25645 0.986886 5.16854 1.07479C5.08064 1.1627 5.03125 1.28193 5.03125 1.40625V4.6875H5.96875V1.40625Z"
								fill="#575757"
							/>
						</svg>
						EXPORT
					</CSVLink>
				</div>

				{/* table headers */}
				<div className="grid grid-cols-3 font-inter font-semibold text-gray-dark pt-3.75 pl-1.75">
					<div>ACTOR</div>
					<div>ACTION</div>
					<div>DATE</div>
				</div>
			</div>

			{/* rows */}
			<div className="font-inter font-normal text-dark-stone">{pages}</div>

			{hasMore && <button
				className="text-gray-dark bg-neutral-100 disabled:bg-neutral-100 h-13 font-semibold pl-4 pr-4.5 w-full border-0 rounded-b-3.25 hover:bg-gray-200"
				onClick={() => {
					if (hasMore) setIndex(index + 1);
				}}
			>
				LOAD MORE
			</button>}
		</div>
	);
};

export default Activity;
