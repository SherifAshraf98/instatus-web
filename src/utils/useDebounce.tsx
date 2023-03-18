import { useEffect, useState } from 'react';

const useDebounce = (value: string | undefined, delay: number) => {
	const [debouncedValue, setDebouncedValue] = useState<string |  undefined>(value);

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
