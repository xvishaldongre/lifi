import preprocess from "svelte-preprocess";
// import adapter from "@sveltejs/adapter-auto";
import adapter from "@sveltejs/adapter-node";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({ out: "out-put" }),

		// hydrate the <div id="svelte"> element in src/app.html
		target: "#svelte",

		vite: {
			css: {
				preprocessorOptions: {
					scss: {
						additionalData: '@use "src/variables.scss" as *;',
					},
				},
			},
		},
	},

	preprocess: [
		preprocess({
			postcss: true,

			scss: {
				prependData: '@use "src/variables.scss" as *;',
			},
		}),
	],
};

export default config;
