export type WithMetaData<T> = {
	data: T;
	meta: {
		pagination: {
			page: number;
			pageSize: number;
			totalResults: number;
		};
	};
};
