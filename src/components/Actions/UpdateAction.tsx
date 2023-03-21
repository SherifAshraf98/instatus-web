import { GetEventsOutput } from '../../api/types';
import { ActionText } from '../../utils';

interface UpdateActionProps {
	type: GetEventsOutput['type'];
	metaData: GetEventsOutput['metaData'];
	actor: GetEventsOutput['actor'];
}

const UpdateAction = ({ actor, type, metaData }: UpdateActionProps) => {
	return (
		<div>
			<span className="font-inter font-bold">{actor.name}</span>
			<span>{ActionText[type]}</span>
			{metaData.from && (
				<>
					from <span className="font-inter font-bold"> {metaData.from} </span>
				</>
			)}
			<>
				to <span className="font-inter font-bold"> {metaData.to}.</span>
			</>
		</div>
	);
};

export default UpdateAction;
