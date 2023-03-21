import { GetEventsOutput } from '../../api/types';
import { ActionText } from '../../utils';

interface RegularActionProps {
	type: GetEventsOutput['type'];
	actor: GetEventsOutput['actor'];
}

const RegularAction = ({ actor, type }: RegularActionProps) => {
	return (
		<div>
			<span className="font-inter font-bold">{actor.name}</span>
			<span>{ActionText[type]}</span>
		</div>
	);
};

export default RegularAction;
