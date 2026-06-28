import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: '404.html', // Importante per GitHub Pages
			precompress: false,
			strict: true
		}),
		paths: {
			// DEVE corrispondere al nome del repo su GitHub
			base: process.env.NODE_ENV === 'production' ? '/PizzeriaCornuto' : '',
		}
	}
};

export default config;