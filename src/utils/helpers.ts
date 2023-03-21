export const getRelativeEventDate = (date: string) => {
	const timestamp = new Date(date).getTime();
	const DAY_MILLISECONDS = 1000 * 60 * 60 * 24;
	const HOUR_MILLISECONDS = 1000 * 60 * 60;

	const rtf = new Intl.RelativeTimeFormat('en', {
		numeric: 'auto',
	});

	const daysDifference = Math.round((timestamp - new Date().getTime()) / DAY_MILLISECONDS);
	const hoursDifference = Math.round((timestamp - new Date().getTime()) / HOUR_MILLISECONDS);

	return daysDifference > -1 ? rtf.format(hoursDifference, 'hour') : rtf.format(daysDifference, 'days');
};
