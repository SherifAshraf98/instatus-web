import { useEffect, useState } from 'react';

const useDebounce = (value: any, delay: number) => {
	const [debouncedValue, setDebouncedValue] = useState(value);

	useEffect(() => {
		const handler = setTimeout(() => {
			setDebouncedValue(value);
		}, delay);

		// cancel the timout if our value changes
		return () => {
			clearTimeout(handler);
		};
	}, [value, delay]);
	return debouncedValue;
};

export default useDebounce;
