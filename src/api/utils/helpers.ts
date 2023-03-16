export const generateRandomColorWithSeed = (seed: number) =>
	Math.floor(Math.abs(Math.sin(seed)) * 16777215).toString(16);
