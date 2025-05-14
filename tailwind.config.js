/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/app/**/*.{ts,tsx}',
		'./src/components/**/*.{ts,tsx}',
		'./src/sections/**/*.{ts,tsx}',
		'./src/layouts/**/*.{ts,tsx}',
		'./src/ui/**/*.{ts,tsx}',
	],
	theme: {
		extend: {},
	},
	darkMode: 'class',
	plugins: [],
}
