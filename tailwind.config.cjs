/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			spacing: {
				1.75: '7px',
				3.75: '15px',
				4.25: '17px',
				4.5: '18px',
				5.75: '23px',
			},
			height: {
				6.25: '25px',
				13: '52px',
				13.5: '54px',
			},
			width: {
				6.25: '25px',
			},
			minWidth: {
				6.25: '25px',
			},
			minHeight: {
				6.25: '25px',
			},
			fontFamily: {
				inter: ['Inter', 'sans-serif'],
			},
			textColor: {
				'gray-dark': 'rgb(97, 97, 97)',
				'dark-stone': 'rgb(28, 28, 28)',
			},
			borderColor: {
				table: 'rgb(240 240 240)',
			},
			gap: {
				2.75: '11px',
			},
			backgroundColor: {
				'row-hover': 'rgb(251, 251, 251)',
			},
			borderRadius: {
				3.25: '13px',
				3.75: '15px',
			},
			minHeight: {},
		},
	},
	plugins: [],
};
