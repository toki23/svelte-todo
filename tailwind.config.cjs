const config = {
	darkMode: 'class',
	mode: "jit",
	purge: [
		"./src/**/*.{html,js,svelte,ts}",
	],
	theme: {
		extend: {},
	},
	variants: {
		extend: {
			backgroundColor: ['dark']
		}
	},
	plugins: [],
};

module.exports = config;
