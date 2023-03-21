/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			spacing: {
				1.75: '7px',
				3.25: '13px',
				3.75: '15px',
				4.25: '17px',
				4.5: '18px',
				5.75: '23px',
				7.5: '30px',
			},
			height: {
				6.25: '25px',
				13: '52px',
				13.5: '54px',
			},
			width: {
				6.25: '25px',
				2.5: '10px',
			},
			minWidth: {
				6.25: '25px',
			},
			maxWidth: {
				20: '80px',
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
				'gray-normal': 'rgb(146, 146, 146)',
				'filter-button': 'rgb(87, 87, 87)',
			},
			borderColor: {
				table: 'rgb(240 240 240)',
				'details-card': 'rgb(223, 223, 223)',
			},
			gap: {
				2.75: '11px',
				0.5: '2px',
			},
			backgroundColor: {
				'row-hover': 'rgb(251, 251, 251)',
				skeleton: 'rgb(248, 248, 248)',
			},
			borderRadius: {
				3.25: '13px',
				3.75: '15px',
			},
			boxShadow: {
				details: '0px 2px 5px rgba(0, 0, 0, 0.04)',
			},
			borderColor: {
				'icons-line': 'rgb(249, 249, 249)',
			},
			objectPosition: {
				2.5: '10px',
			},
		},
	},
	plugins: [],
};
