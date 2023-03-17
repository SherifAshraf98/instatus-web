import { useState } from 'react';
import Page from '../api/Page';
import useDebounce from '../utils/useDebounce';

const Activity = () => {
	// states
	const [cnt, setCnt] = useState(1);
	const [hasMore, setHasMore] = useState(true);
	const [search, setSearch] = useState<string | undefined>();

	// use debounce search (reflect each 500ms)
	const debouncedSearch = useDebounce(search, 500);

	// pagination (load more)
	const pages = [];
	for (let i = 1; i <= cnt; i++) {
		pages.push(<Page index={i} key={i} setHasMore={setHasMore} search={debouncedSearch} />);
	}

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setCnt(1);
		setSearch(e.target.value.trim());
	};
	return (
		<div className="border border-table rounded-t-3.75 rounded-b-3.25 text-sm">
			<div className="bg-neutral-100 pl-4 pt-4.25 pr-4.5 pb-3.5 border-0 rounded-t-3.75">
				<input
					type="email"
					id="email"
					className=" border border-gray-300 block w-full p-2.5 rounded-lg"
					placeholder="Search name, email or action..."
					onChange={(e) => handleInputChange(e)}
				/>
				<div className="grid grid-cols-3 font-inter font-semibold text-gray-dark pt-3.75 pl-1.75">
					<div>ACTOR</div>
					<div>ACTION</div>
					<div>DATE</div>
				</div>
			</div>

			<div className="font-inter font-normal text-dark-stone">{pages}</div>

			<button
				className="text-gray-dark bg-neutral-100 h-13 font-semibold pl-4 pr-4.5 w-full border-0 rounded-b-3.25 disabled:text-red-300"
				onClick={() => {
					if (hasMore) setCnt(cnt + 1);
				}}
				disabled={!hasMore}
			>
				LOAD MORE
			</button>
		</div>
	);
};

export default Activity;
