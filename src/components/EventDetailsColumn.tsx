interface EventDetailsColumnsProps {
	title: string;
	keys: string[];
	values: Array<string | number>;
}
const EventDetailsColumns = ({ title, keys, values }: EventDetailsColumnsProps) => {
	return (
		<div>
			<div className="font-inter font-medium text-gray-normal pb-4 pl-1.75">{title}</div>
			{keys.length ? (
				keys.map((e, i) => (
					<div className="grid grid-cols-4 justify-start grid-flow-col">
						<div className="font-inter font-normal text-gray-normal pl-1.75 overflow-hidden truncate pb-3">{e}</div>
						<div className="font-inter font-normal text-black pl-1.75 overflow-hidden truncate col-span-3">
							{values[i]}
						</div>
					</div>
				))
			) : (
				<div className="h-2.5 bg-skeleton rounded-full w-48 mb-4"></div>
			)}
		</div>
	);
};

export default EventDetailsColumns;
