import { generateRandomColorWithSeed } from '../api/utils';

const NameIcon = ({ name, actorId }: { name: string; actorId: number }) => {
	// generate background colors for eacy user based on the ID
	const firstColor = generateRandomColorWithSeed(actorId);
	const secondColor = generateRandomColorWithSeed(actorId + 100);

	return (
		<div
			className="h-6.25 w-6.25 min-h-6.25 min-w-6.25 font-inter font-bold rounded-full text-white text-xs flex justify-center items-center"
			style={{ backgroundImage: `linear-gradient(138.62deg, #${firstColor} 14.17%, #${secondColor} 84.99%)` }}
		>
			<p>{name.charAt(0).toUpperCase()}</p>
		</div>
	);
};

export default NameIcon;
