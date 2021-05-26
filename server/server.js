const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const app = express();

const port = process.env.PORT;
const projectName = process.env.PROJECT_NAME;

app.use(express.static('docs'));

if (projectName) {
	// GitHub Pages publishes projects to <username>.github.io/<projectname>
	// This breaks root-relative URLs, so instead use "/projectname/path/" locally
	// and resolve it by redirecting it here to a root relative path.

	let ghPagesPathPattern = new RegExp(`^/${projectName}/`, 'i');
	app.get(ghPagesPathPattern, (req, res) => {
		let url = req.url.replace(ghPagesPathPattern, '/');
		url = `http://${req.headers.host}${url}`;

		res.redirect(url);
	});
}

app.listen(port, () => {});
console.log(`Listening on port ${port}`);
