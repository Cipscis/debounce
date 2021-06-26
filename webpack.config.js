import dotenv from 'dotenv';
dotenv.config();

import path from 'path';
import { fileURLToPath } from 'url';
const __dirname = fileURLToPath(import.meta.url);

let config = {
	mode: process.env.MODE,
	entry: './docs/assets/js/src/main.js',
	output: {
		path: path.resolve(__dirname, '../docs/assets/js/dist'),
		filename: 'bundle.js',
	},
};

switch (process.env.MODE) {
	case 'development':
		config.optimization = {
			minimize: false,
		};
		config.devtool = 'eval-source-map';
		break;
	case 'production':
	default:
		config.devtool = 'source-map';
		break;
}

export default config;
