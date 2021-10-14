const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const postcssImport = require("postcss-import");
const presetEnv = require("postcss-preset-env");
const mode = process.env.NODE_ENV;
const dev = mode === 'development';

const config = {
	plugins: [
		//Some plugins, like tailwindcss/nesting, need to run before Tailwind,
		postcssImport(),
		tailwindcss(),
		//But others, like autoprefixer, need to run after,
		presetEnv({
			/* use stage 3 features + css nesting rules */
			stage: 3,
			features: {
				'nesting-rules': true
			}
		}),
		autoprefixer(),
		!dev &&
			cssnano({
				preset: 'default'
			})
	]
};

module.exports = config;
