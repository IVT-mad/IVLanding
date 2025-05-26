/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{ts,tsx}', './pages/**/*.{ts,tsx}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				barnRed: '#780000',
				fireBrick: '#c1121f',
				papayaWhip: '#fdf0d5',
				prussianBlue: '#003049',
				airSuperiorityBlue: '#669bbc',
			},
		},
	},
	plugins: [],
}
