import adapter from '@sveltejs/adapter-node';
import { mdsvex } from 'mdsvex';
import { getHighlighter } from 'shikiji';
import { imagetools } from '@zerodevx/svelte-img/vite';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
export default {
	extensions: ['.svelte', '.mdx'],
	preprocess: [
		mdsvex({
			extensions: ['.mdx'],
			smartypants: true,
			highlight: {
				async highlighter(code, lang) {
					const highlighter = await getHighlighter({
						langs: [lang || 'plaintext'],
						themes: ['github-dark-dimmed'],
					});

					return highlighter.codeToHtml(code, { lang });
				},
			},
		}),
		vitePreprocess(),
		imagetools(),
	],

	kit: {
		adapter: adapter(),
		// csrf: { checkOrigin: false },
	},
};
