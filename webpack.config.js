const dotenv = require('dotenv');
dotenv.config();

const path = require('path');

let config = {
	mode: process.env.MODE,
	entry: './docs/assets/js/src/main.js',
	output: {
		path: path.resolve(__dirname, 'docs/assets/js/dist'),
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

module.exports = config;
