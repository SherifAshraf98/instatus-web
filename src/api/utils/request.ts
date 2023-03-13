import { HTTPMethods } from './consts';

const baseUrl = import.meta.env?.VITE_API_END_POINT!;

export const request = ({
	method,
	path,
	searchParams: _searchParams,
	body,
	getMetaData,
	formData,
}: {
	path: string;
	method: HTTPMethods;
	searchParams?: Record<string, any>;
	body?: any;
	getMetaData?: boolean;
	formData?: boolean;
}) => {
	const searchParams = { ..._searchParams };
	Object.keys(searchParams).forEach((key) => {
		if (searchParams[key] === undefined) delete searchParams[key];
		if (Array.isArray(searchParams[key]) && searchParams[key].length === 0) delete searchParams[key];
	});

	return fetch(`${baseUrl}${path}?` + new URLSearchParams(searchParams ?? {}), {
		method,
		body: formData ? body : JSON.stringify(body),
	})
		.then(async (r) => ({
			ok: r.ok,
			body: await r.json(),
		}))
		.then((r) => {
			if (!r.ok) throw new Error(r.body.message ?? 'Internal Server Error');
			return r.body;
		})
		.then((response) => (getMetaData ? response : response.data ?? response));
};
