// import adapter from '@sveltejs/adapter-auto';
// import expressAdapter from "@mankins/svelte-adapter-express"
// import vercel from '@sveltejs/adapter-vercel';
// import node from "@sveltejs/adapter-node";
import adapter from '@sveltejs/adapter-netlify';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess({
		postcss: true,
	}),

	kit: {
		adapter: adapter({
			edge: false,
			split: false
		}),

		// Override http methods in the Todo forms
		methodOverride: {
			allowed: ['PATCH', 'DELETE']
		}
	}
};

export default config;
