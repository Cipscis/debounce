# base-package

This is my base project to use when creating new packages.

## Install

You will need to install [Node.js](https://nodejs.org/en/) before using this project, because it relies on the [npm](https://www.npmjs.com/) package manager that comes bundled with Node.js

1. Click "[Use this template](https://github.com/Cipscis/base-package/generate)" to create a new repo based on this one. Make sure "Include all branches" is checked so both `main` and `gh-pages` branches are created
2. In both the `main` branch and the `gh-pages` branch, update the `package.json` file to reflect your new project's details
3. Create a `.env` file. See [.env](#env) for more information
4. In the `gh-pages` branch, update the paths to assets in each HTML file to use your new project's name. See [GitHub Pages](#github-pages) for more info
5. Run `npm install`

## Usage

In the `main` branch, you can create your package to be installed with npm. In the `gh-pages` branch, you can add your package as a dependency and document it.

Once you have an initial version of your package ready to push to the `main` branch, you will want to update the `version` attribute of your `package.json` file to `"1.0.0"`. See [Semantic Versioning](https://semver.org/) for more information on version numbers.

Then, you can tag that commit with `1.0.0` and run `npm install github:<account-name>/<package-name>#semver:^1.0.0` in your `gh-pages` branch to install the package and use it in your documentation code.

In the `gh-pages` branch, this project creates three npm tasks:

* `server`
* `watch`
* `start`

Usually, you will just want to run `npm start`. This will run both the `server` and `watch` tasks simultaneously.

The `server` task runs a Node.js server on the port specified in the [`.env`](#env) file, using [Express](https://expressjs.com/).

The `watch` task compiles CSS files using [gulp-sass](https://www.npmjs.com/package/gulp-sass) and bundles JavaScript using [webpack-stream](https://www.npmjs.com/package/webpack-stream), then watches the relevant directories and rebuilds these files if it sees and changes.

## Structure

### Frontend assets

In the `main` branch, just a single file exists. By default, this is `main.js`, but you can change it. If you do, make sure you update the `browser` property in your `package.json` file.

In the `gh-pages` branch, assets such as CSS and JavaScript are contained in `./docs/assets`. In here, the contents of the `scss` folder are used to compile CSS files into the `css` folder.

The `docs/assets/js` folder contains a `src` folder and a `dist` folder. The JavaScript files inside the `src` folder are bundled into the `dist` folder. By default, Webpack is configured to look for a single entry point at `./docs/assets/js/src/main.js`.

### Backend assets

The Node.js server run using [Express](https://expressjs.com/) has its files inside the `./server` directory of the `gh-pages` branch. By default, this just runs a static http server that serves files in the `./docs` directory, but it can be extended to add additional functionality.

This server only runs locally, so any additional functionality will not be available on GitHub Pages.

## Configuration

### gulpfile.js

This file tells [Gulp](https://gulpjs.com/) which files to watch and where to output compiled assets. Some configuration for JavaScript bundling is duplicated between here and [`webpack.config.js`](#webpackconfigjs)

### webpack.config.js

This file configures [Webpack](https://webpack.js.org/), telling it which entry points to use and where to output its bundled assets. Some configuration is duplicated between here and [`gulpfile.js`](#gulpfilejs)

### .env

The `.env` file contains the following environment variables:

* `PROJECT_NAME` (`string`)

If present, this is used by the local Node.js server to set up redirects for working with [GitHub Pages](#github-pages).

* `MODE` (`string 'development' | 'production'`)

This is used by Webpack to determine what optimisations to use and how to generate sourcemaps.

* `PORT` (`int`)

This is used by [Express](https://expressjs.com/) to determine which port to use when running a local Node.js server.

An example `.env` file you can use for development is:

```
PROJECT_NAME = "base-package"
MODE = "development"
PORT = "8080"
```

This file is intended to differ from environment to environment, so it is ignored by Git.

## GitHub Pages

When publishing a project using [GitHub Pages](https://pages.github.com/), the project usually appears at a URL with a path, such as [https://cipscis.github.io/base-project](https://cipscis.github.io/base-project). This means using root relative URLs such as `/asssets/css/main.css` would work locally, but would break when the project is published on GitHub Pages.

To fix this, the local Node.js server looks for a `PROJECT_NAME` variable in your [`.env`](#env) file. If it finds one, it sets up internal redirects so URLs starting with `/<projectname>` are instead treated as though they were root relative, so they will find your assets.

By default, the `index.html` file is configured to be published to GitHub Pages under the project name `base-project`. When you use it as a base for your own project, you will need to update these URLs.

## Dependencies

[npm](https://www.npmjs.com/): Package manager

[Gulp](https://gulpjs.com/): Task runner

[gulp-sass](https://www.npmjs.com/package/gulp-sass): Compiling CSS from [Sass](https://sass-lang.com/)

[webpack-stream](https://www.npmjs.com/package/webpack-stream): Using [Webpack](https://webpack.js.org/) (for JavaScript dependency management) with Gulp

[Express](https://expressjs.com/): Running a Node.js server, accessed at `http://localhost:<PORT>`

[Concurrently](https://www.npmjs.com/package/concurrently): Running server and development build tasks concurrently

[dotenv](https://www.npmjs.com/package/dotenv): Reading environment variables from [`.env`](#env) file
