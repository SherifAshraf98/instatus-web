import { HTTPMethods } from './consts';

const baseUrl = import.meta.env?.VITE_API_END_POINT!;

export const request = (path: string) => {
	return fetch(path, {
		method: HTTPMethods.GET,
	})
		.then(async (r) => ({
			ok: r.ok,
			body: await r.json(),
		}))
		.then((r) => {
			if (!r.ok) throw new Error(r.body.message ?? 'Internal Server Error');
			return r.body;
		})
		.then((response) => response);
};

export const getRequestUrl = (path: string, searchParams?: Record<string, any>) => {
	const _searchParams = { ...searchParams };
	Object.keys(_searchParams).forEach((key) => {
		if (_searchParams[key] === undefined) delete _searchParams[key];
	});
	return `${baseUrl}${path}?` + new URLSearchParams(_searchParams ?? {});
};
