import { GetEventsOutput } from '../../api/types';
import { CircularIconType, CircularIconTypes } from '../../utils';

interface CircularIconProps {
	type: GetEventsOutput['type'];
	actor: GetEventsOutput['actor'];
	to: string;
}
const CircularIcon = ({ type, actor, to }: CircularIconProps) => {
	return (
		<div className="flex justify-center items-center">
			{CircularIconType[type] === CircularIconTypes.IMAGE ? (
				<div className="h-5 w-5 min-h-5 min-w-5 flex justify-center items-center">
					<img
						className="rounded-full"
						src={actor.image || 'https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg'}
					/>
				</div>
			) : (
				<div className="h-5 w-5 min-h-5 min-w-5 rounded-full flex justify-center items-center">
					<span className="w-2.5  h-full bg-black rounded-tl-full rounded-bl-full"></span>
					<span className={`w-2.5  h-full ${colorMap[to]} rounded-tr-full rounded-br-full`}></span>
				</div>
			)}
		</div>
	);
};

export default CircularIcon;

const colorMap: Record<string, string> = {
	'In Progress': 'bg-orange-500',
	'In Review': 'bg-green-800',
};
