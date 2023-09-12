/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/html/utils/withMT");

module.exports = withMT({
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
	theme: {
		extend: {
	
		},
		colors: {
			foreground: '#1D1001',
			background: '#F9F4EC',
			primary: {
				500: '#EE5626'
			},
			gray: {
				500: '#DDDAD5',
			}
		}
	},
	plugins: [
		require('postcss-nested'),
    require('autoprefixer')
	],
});
