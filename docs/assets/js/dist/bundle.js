/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./docs/assets/js/src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./debounce.js":
/*!*********************!*\
  !*** ./debounce.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst debounce = function (fn, delay) {\r\n\t// Used to create a version of fn that will execute only\r\n\t// after no attempt to call it has been made for delay ms\r\n\r\n\t// Note this will uncouple the callback from user input,\r\n\t// if used as an event callback. This can cause popup blockers etc.\r\n\r\n\t// This throttling is useful, for example, for waiting until\r\n\t// the user has stopped typing before executing a keyup callback\r\n\r\n\tlet timeout;\r\n\r\n\treturn function () {\r\n\t\tif (timeout) {\r\n\t\t\twindow.clearTimeout(timeout);\r\n\t\t}\r\n\r\n\t\ttimeout = window.setTimeout(() => {\r\n\t\t\ttimeout = undefined;\r\n\t\t\tfn.apply(this, arguments);\r\n\t\t}, delay);\r\n\t};\r\n};\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (debounce);\r\n\n\n//# sourceURL=webpack:///./debounce.js?");

/***/ }),

/***/ "./docs/assets/js/src/main.js":
/*!************************************!*\
  !*** ./docs/assets/js/src/main.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _debounce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! /debounce */ \"./debounce.js\");\n/* harmony import */ var activate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! activate */ \"./node_modules/activate/activate.js\");\n\r\n\r\n\r\nconst increment = function (e) {\r\n\te.preventDefault();\r\n\r\n\tlet el = e.target;\r\n\tlet activateNum = parseInt(el.getAttribute('data-activate-count'));\r\n\r\n\tactivateNum += 1;\r\n\r\n\tel.setAttribute('data-activate-count', activateNum);\r\n};\r\n\r\nObject(activate__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('.js-debounce-fast', Object(_debounce__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(increment, 200));\r\nObject(activate__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('.js-debounce-slow', Object(_debounce__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(increment, 1000));\r\n\n\n//# sourceURL=webpack:///./docs/assets/js/src/main.js?");

/***/ }),

/***/ "./node_modules/activate/activate.js":
/*!*******************************************!*\
  !*** ./node_modules/activate/activate.js ***!
  \*******************************************/
/*! exports provided: activate, deactivate, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"activate\", function() { return activate; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"deactivate\", function() { return deactivate; });\n/* Activate 1.0.2 */\n\n// Binds event listeners to one or more elements that makes them behave\n// like buttons, detecting both \"click\" events and also keydown for\n// the \"Enter\" key and keyup for the \"Space\" key.\n\n// Example usage:\n// activate(nodeList, fn);\n// activate(singleNode, fn);\n// activate(selector, fn);\n\nconst boundEvents = [];\n/*\n[\n\t{\n\t\tnode: Node,\n\t\tbindings: [\n\t\t\t{\n\t\t\t\tfn: Function,\n\t\t\t\tspacebarFn: Function,\n\t\t\t\tenterFn: Function\n\t\t\t}\n\t\t]\n\t}\n]\n*/\n\nconst { activate, deactivate } = (function () {\n\tconst module = {\n\t\tactivate: function (nodes, fn) {\n\t\t\tmodule._activator(nodes, fn, module._activateSingle);\n\t\t},\n\n\t\tdeactivate: function (nodes, fn) {\n\t\t\tmodule._activator(nodes, fn, module._deactivateSingle);\n\t\t},\n\n\t\t_activator: function (nodes, fn, activator) {\n\t\t\t// Share the same initial logic between activate and deactivate,\n\t\t\t// but run a different function over each node\n\n\t\t\tif (typeof nodes === 'string') {\n\t\t\t\ttry {\n\t\t\t\t\tnodes = document.querySelectorAll(nodes);\n\t\t\t\t} catch (e) {\n\t\t\t\t\tlet method = activator === module._deactivateSingle ? 'deactivate' : 'activate';\n\t\t\t\t\tthrow new DOMException(`${method} failed because it was passed an invalid selector string: '${nodes}'`);\n\t\t\t\t}\n\t\t\t}\n\n\t\t\tif (nodes instanceof Node) {\n\t\t\t\tactivator(nodes, fn);\n\t\t\t} else if (nodes.length && nodes.forEach) {\n\t\t\t\tnodes.forEach((node) => activator(node, fn));\n\t\t\t}\n\t\t},\n\n\n\n\t\t_activateSingle: function (node, fn) {\n\t\t\tif ((node instanceof Node === false)) {\n\t\t\t\tthrow new TypeError(`activate failed because a valid Node was not passed`);\n\t\t\t}\n\n\t\t\tif (module._getNodeBindings(node, fn)) {\n\t\t\t\t// Like addEventListener, don't try to rebind new copies of the same events\n\t\t\t\treturn;\n\t\t\t}\n\n\t\t\t// All nodes should bind the click event\n\t\t\tnode.addEventListener('click', fn);\n\n\t\t\t// Buttons will already treat keyboard events like clicks,\n\t\t\t// so only bind them to other node types\n\t\t\tlet isButton = module._isNodeType(node, 'button');\n\t\t\tif (isButton === false) {\n\t\t\t\tif (module._getNodeHasBindings(node) === false) {\n\t\t\t\t\t// addEventListener would prevent this event being\n\t\t\t\t\t// bound multiple times, but be explicit that it is\n\t\t\t\t\t// only bound if the node has no other events bound\n\t\t\t\t\tnode.addEventListener('keydown', module._preventSpacebarScroll);\n\t\t\t\t}\n\n\t\t\t\tlet spacebarFn = module._makeSpacebarFn(fn);\n\t\t\t\tnode.addEventListener('keyup', spacebarFn);\n\t\t\t\tlet bindings = {\n\t\t\t\t\tspacebarFn\n\t\t\t\t};\n\n\t\t\t\t// Links already treat \"enter\" keydown like a click\n\t\t\t\tlet isLink = module._isNodeType(node, 'a');\n\t\t\t\tif (isLink === false) {\n\t\t\t\t\t// Note that holding down \"enter\" will behave differently\n\t\t\t\t\t// for links in that it will only fire once, whereas for\n\t\t\t\t\t// non-links, including buttons, it will fire multiple times\n\t\t\t\t\tlet enterFn = module._makeEnterFn(fn);\n\t\t\t\t\tnode.addEventListener('keydown', enterFn);\n\t\t\t\t\tbindings.enterFn = enterFn;\n\t\t\t\t}\n\n\t\t\t\tmodule._rememberNodeBindings(node, fn, bindings);\n\t\t\t}\n\t\t},\n\n\t\t_deactivateSingle: function (node, fn) {\n\t\t\tif ((node instanceof Node === false)) {\n\t\t\t\tthrow new TypeError(`deactivate failed because a valid Node was not passed`);\n\t\t\t}\n\n\t\t\tlet bindings = module._getNodeBindings(node, fn);\n\n\t\t\t// All nodes have had a click event bound\n\t\t\tnode.removeEventListener('click', fn);\n\n\t\t\tif (!bindings) {\n\t\t\t\t// No other events to unbind\n\t\t\t\treturn;\n\t\t\t}\n\n\t\t\t// Buttons will already treat keyboard events like clicks,\n\t\t\t// so they didn't have keyboard events bound to them\n\t\t\tlet isButton = module._isNodeType(node, 'button');\n\t\t\tif (isButton === false) {\n\t\t\t\tnode.removeEventListener('keyup', bindings.spacebarFn);\n\n\t\t\t\t// Links already treat \"enter\" keydown like a click,\n\t\t\t\t// so that event wasn't bound to them\n\t\t\t\tlet isLink = module._isNodeType(node, 'a');\n\t\t\t\tif (isLink === false) {\n\t\t\t\t\tnode.removeEventListener('keydown', bindings.enterFn);\n\t\t\t\t}\n\n\t\t\t\tmodule._forgetNodeBindings(node, fn);\n\n\t\t\t\tif (module._getNodeHasBindings(node) === false) {\n\t\t\t\t\t// Only unbind this event if the node has no other bindings\n\t\t\t\t\tnode.removeEventListener('keydown', module._preventSpacebarScroll);\n\t\t\t\t}\n\t\t\t}\n\t\t},\n\n\n\n\t\t_rememberNodeBindings: function (node, fn, bindings) {\n\t\t\tlet nodeB = boundEvents.find(el => el.node === node);\n\t\t\tif (!nodeB) {\n\t\t\t\tnodeB = {\n\t\t\t\t\tnode: node,\n\t\t\t\t\tbindings: [\n\t\t\t\t\t\t{\n\t\t\t\t\t\t\tfn\n\t\t\t\t\t\t}\n\t\t\t\t\t]\n\t\t\t\t};\n\t\t\t\tboundEvents.push(nodeB);\n\t\t\t}\n\n\t\t\tlet fnB = nodeB.bindings.find(el => el.fn === fn);\n\t\t\tif (!fnB) {\n\t\t\t\tfnB = {\n\t\t\t\t\tfn\n\t\t\t\t};\n\t\t\t\tnodeB.bindings.push(fnB);\n\t\t\t}\n\n\t\t\tObject.assign(fnB, bindings);\n\t\t},\n\n\t\t_forgetNodeBindings: function (node, fn) {\n\t\t\tlet nodeB = boundEvents.find(el => el.node === node);\n\t\t\tif (!nodeB) {\n\t\t\t\treturn;\n\t\t\t}\n\n\t\t\tlet fnB = nodeB.bindings.find(el => el.fn === fn);\n\t\t\tif (!fnB) {\n\t\t\t\treturn;\n\t\t\t}\n\n\t\t\tlet fnBIndex = nodeB.bindings.indexOf(fnB);\n\n\t\t\tnodeB.bindings.splice(fnBIndex, 1);\n\t\t},\n\n\t\t_getNodeBindings: function (node, fn) {\n\t\t\tlet nodeB = boundEvents.find(el => el.node === node);\n\t\t\tif (!nodeB) {\n\t\t\t\treturn undefined;\n\t\t\t}\n\n\t\t\tlet fnB = nodeB.bindings.find(el => el.fn === fn);\n\t\t\tif (!fnB) {\n\t\t\t\treturn undefined;\n\t\t\t}\n\n\t\t\treturn fnB;\n\t\t},\n\n\t\t_getNodeHasBindings: function (node) {\n\t\t\tlet nodeB = boundEvents.find(el => el.node === node);\n\t\t\treturn !!nodeB;\n\t\t},\n\n\n\n\t\t_makeEnterFn: function (fn) {\n\t\t\treturn function (e) {\n\t\t\t\tlet isEnter = module._isEnter(e);\n\n\t\t\t\tif (isEnter) {\n\t\t\t\t\tfn.apply(this, arguments);\n\t\t\t\t}\n\t\t\t};\n\t\t},\n\n\t\t_isEnter: function (e) {\n\t\t\tlet isEnter = e.key && (e.key.toLowerCase() === 'enter');\n\n\t\t\treturn isEnter;\n\t\t},\n\n\n\n\t\t_preventSpacebarScroll: function (e) {\n\t\t\t// Prevent spacebar from scrolling the page down on keydown\n\t\t\tlet node = e.target;\n\n\t\t\tlet isButton = module._isNodeType(node, 'button');\n\t\t\tlet isInput = module._isNodeType(node, 'input', 'textarea');\n\n\t\t\tlet isSpacebar = module._isSpacebar(e);\n\n\t\t\tif (!isButton && !isInput && isSpacebar) {\n\t\t\t\te.preventDefault();\n\t\t\t}\n\t\t},\n\n\t\t_makeSpacebarFn: function (fn) {\n\t\t\treturn function (e) {\n\t\t\t\tlet isSpacebar = module._isSpacebar(e);\n\n\t\t\t\tif (isSpacebar) {\n\t\t\t\t\tfn.apply(this, arguments);\n\t\t\t\t}\n\t\t\t};\n\t\t},\n\n\t\t_isSpacebar: function (e) {\n\t\t\t// IE11 uses 'spacebar' instead of ' '\n\t\t\tlet isSpacebar = e.key && (e.key === ' ' || e.key.toLowerCase() === 'spacebar');\n\n\t\t\treturn isSpacebar;\n\t\t},\n\n\n\n\t\t_isNodeType: function (node, ...nodeTypes) {\n\t\t\tnodeTypes = nodeTypes.map(el => el.toLowerCase());\n\n\t\t\tlet nodeType = node.nodeName.toLowerCase();\n\t\t\tlet isOfType = nodeTypes.includes(nodeType);\n\n\t\t\treturn isOfType;\n\t\t}\n\t};\n\n\treturn {\n\t\tactivate: module.activate,\n\t\tdeactivate: module.deactivate\n\t};\n})();\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (activate);\n\n\n//# sourceURL=webpack:///./node_modules/activate/activate.js?");

/***/ })

/******/ });