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
/******/ 	__webpack_require__.p = "/assets";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/data/resources.json":
/*!*********************************!*\
  !*** ./src/data/resources.json ***!
  \*********************************/
/*! exports provided: 1, 2, 3, misc, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"{\\\"1\\\":[{\\\"title\\\":\\\"CSS Selectors\\\",\\\"link\\\":\\\"https://flaviocopes.com/css-selectors/\\\",\\\"tags\\\":[\\\"week1\\\",\\\"css\\\"]},{\\\"title\\\":\\\"CSS Specificity\\\",\\\"link\\\":\\\"https://flaviocopes.com/css-specificity/\\\",\\\"tags\\\":[\\\"week1\\\",\\\"css\\\"]},{\\\"title\\\":\\\"Child and Sibling Selectors\\\",\\\"link\\\":\\\"https://css-tricks.com/child-and-sibling-selectors/\\\",\\\"tags\\\":[\\\"week1\\\",\\\"css\\\"]},{\\\"title\\\":\\\"how css selectors work\\\",\\\"link\\\":\\\"https://css-tricks.com/how-css-selectors-work/\\\",\\\"tags\\\":[\\\"week1\\\",\\\"css\\\"]},{\\\"title\\\":\\\"CSS rules to live by\\\",\\\"link\\\":\\\"https://www.freecodecamp.org/news/css-rules-to-live-by-962a051e1eb2/\\\",\\\"tags\\\":[\\\"week1\\\",\\\"css\\\"]},{\\\"title\\\":\\\"BROWSER DEFAULT STYLES\\\",\\\"link\\\":\\\"https://browserdefaultstyles.com/\\\",\\\"tags\\\":[\\\"week1\\\",\\\"css\\\",\\\"html\\\",\\\"browser\\\"]},{\\\"title\\\":\\\"why how and when to use semantic html and aria\\\",\\\"link\\\":\\\"https://css-tricks.com/why-how-and-when-to-use-semantic-html-and-aria\\\",\\\"tags\\\":[\\\"week1\\\",\\\"css\\\",\\\"html\\\"]}],\\\"2\\\":[{\\\"title\\\":\\\"web design for beginners\\\",\\\"link\\\":\\\"https://webflow.com/blog/web-design-for-beginners\\\",\\\"tags\\\":[\\\"week2\\\",\\\"design\\\"]},{\\\"title\\\":\\\"layout design\\\",\\\"link\\\":\\\"https://wpamelia.com/layout-design/\\\",\\\"tags\\\":[\\\"week2\\\",\\\"design\\\"]},{\\\"title\\\":\\\"web design basics guide\\\",\\\"link\\\":\\\"https://99designs.com/blog/tips/web-design-basics-guide/\\\",\\\"tags\\\":[\\\"week2\\\",\\\"design\\\"]},{\\\"title\\\":\\\"12 dos donts web design\\\",\\\"link\\\":\\\"https://xd.adobe.com/ideas/principles/web-design/12-dos-donts-web-design-2/\\\",\\\"tags\\\":[\\\"week2\\\",\\\"design\\\"]},{\\\"title\\\":\\\"css media queries\\\",\\\"link\\\":\\\"https://flaviocopes.com/css-media-queries/\\\",\\\"tags\\\":[\\\"week2\\\",\\\"media-queries\\\"]},{\\\"title\\\":\\\"introduction to responsive web design pseudo elements media queries\\\",\\\"link\\\":\\\"https://www.toptal.com/responsive-web/introduction-to-responsive-web-design-pseudo-elements-media-queries\\\",\\\"tags\\\":[\\\"week2\\\",\\\"media-queries\\\"]},{\\\"title\\\":\\\"beginners guide to mobile web development\\\",\\\"link\\\":\\\"https://medium.com/beginners-guide-to-mobile-web-development/media-queries-54a1a463356f\\\",\\\"tags\\\":[\\\"week2\\\",\\\"media-queries\\\"]}],\\\"3\\\":[{\\\"title\\\":\\\"ultimate flexbox cheatsheet\\\",\\\"link\\\":\\\"https://www.sketchingwithcss.com/samplechapter/cheatsheet.html\\\",\\\"tags\\\":[\\\"css\\\",\\\"flex\\\",\\\"layouts\\\"]},{\\\"title\\\":\\\"creating a sticky footer with flexbox\\\",\\\"link\\\":\\\"https://www.gomasuga.com/blog/creating-a-sticky-footer-with-flexbox\\\",\\\"tags\\\":[\\\"css\\\",\\\"flex\\\",\\\"layouts\\\"]},{\\\"title\\\":\\\"how to build a responsive navigation bar with flexbox\\\",\\\"link\\\":\\\"https://webdesign.tutsplus.com/tutorials/how-to-build-a-responsive-navigation-bar-with-flexbox--cms-33535\\\",\\\"tags\\\":[\\\"css\\\",\\\"flex\\\",\\\"layouts\\\"]},{\\\"title\\\":\\\"css grid starter layouts\\\",\\\"link\\\":\\\"https://css-tricks.com/snippets/css/css-grid-starter-layouts/\\\",\\\"tags\\\":[\\\"css\\\",\\\"grid\\\",\\\"layouts\\\"]},{\\\"title\\\":\\\"flexible sized grids with auto fill and minmax\\\",\\\"link\\\":\\\"https://rachelandrew.co.uk/archives/2016/04/12/flexible-sized-grids-with-auto-fill-and-minmax/\\\",\\\"tags\\\":[\\\"css\\\",\\\"grid\\\",\\\"layouts\\\"]},{\\\"title\\\":\\\"grid by example\\\",\\\"link\\\":\\\"https://gridbyexample.com/examples/\\\",\\\"tags\\\":[\\\"css\\\",\\\"grid\\\",\\\"layouts\\\"]},{\\\"title\\\":\\\"css grid demos on codepen\\\",\\\"link\\\":\\\"https://codepen.io/collection/XRRJGq/\\\",\\\"tags\\\":[\\\"css\\\",\\\"grid\\\",\\\"codepen\\\"]},{\\\"title\\\":\\\"flexible data tables with css grid\\\",\\\"link\\\":\\\"https://adamlynch.com/flexible-data-tables-with-css-grid\\\",\\\"tags\\\":[\\\"css\\\",\\\"grid\\\"]},{\\\"title\\\":\\\"Digging Into The Display Property\\\",\\\"link\\\":\\\"https://www.smashingmagazine.com/2019/04/display-two-value/\\\",\\\"tags\\\":[\\\"css\\\",\\\"grid\\\",\\\"display\\\",\\\"flex\\\"]}],\\\"misc\\\":[{\\\"title\\\":\\\"10x your productivity by creating a process\\\",\\\"link\\\":\\\"https://www.freecodecamp.org/news/10x-your-productivity-by-creating-a-process/\\\",\\\"tags\\\":[\\\"productivity\\\"]},{\\\"title\\\":\\\"how to go from hobbyist to professional developer\\\",\\\"link\\\":\\\"https://www.freecodecamp.org/news/how-to-go-from-hobbyist-to-professional-developer-11a8b8a52b5f/\\\",\\\"tags\\\":[\\\"self-improvement\\\"]},{\\\"title\\\":\\\"google fonts\\\",\\\"link\\\":\\\"https://fonts.google.com/\\\",\\\"tags\\\":[\\\"fonts\\\",\\\"css\\\"]},{\\\"title\\\":\\\"1 page cheatsheet the power of habit by charles duhigg\\\",\\\"link\\\":\\\"http://www.kevinhabits.com/1-page-cheatsheet-the-power-of-habit-by-charles-duhigg-2/\\\",\\\"tags\\\":[\\\"habits\\\",\\\"self-improvement\\\",\\\"productivity\\\"]},{\\\"title\\\":\\\"flowchart for changing habits\\\",\\\"link\\\":\\\"https://charlesduhigg.com/flowchart-for-changing-habits/\\\",\\\"tags\\\":[\\\"habits\\\",\\\"self-improvement\\\",\\\"productivity\\\"]},{\\\"title\\\":\\\"css battle\\\",\\\"link\\\":\\\"https://cssbattle.dev/\\\",\\\"tags\\\":[\\\"css\\\",\\\"practice\\\"]},{\\\"title\\\":\\\"Color Themes\\\",\\\"link\\\":\\\"https://color.adobe.com/explore\\\",\\\"tags\\\":[\\\"css\\\",\\\"color\\\"]},{\\\"title\\\":\\\"Cool Backgrounds\\\",\\\"link\\\":\\\"https://coolbackgrounds.io/\\\",\\\"tags\\\":[\\\"css\\\",\\\"color\\\",\\\"backgrounds\\\"]},{\\\"title\\\":\\\"Gradient Lab\\\",\\\"link\\\":\\\"https://gradientlab.space/\\\",\\\"tags\\\":[\\\"css\\\",\\\"color\\\",\\\"backgrounds\\\",\\\"gradients\\\"]},{\\\"title\\\":\\\"CSS Gradient\\\",\\\"link\\\":\\\"https://cssgradient.io/\\\",\\\"tags\\\":[\\\"css\\\",\\\"color\\\",\\\"backgrounds\\\",\\\"gradients\\\"]},{\\\"title\\\":\\\"Color Hunt\\\",\\\"link\\\":\\\"https://colorhunt.co/\\\",\\\"tags\\\":[\\\"css\\\",\\\"color\\\",\\\"backgrounds\\\",\\\"themes\\\"]},{\\\"title\\\":\\\"SVG Backgrounds\\\",\\\"link\\\":\\\"https://www.svgbackgrounds.com/\\\",\\\"tags\\\":[\\\"css\\\",\\\"color\\\",\\\"backgrounds\\\",\\\"svg\\\"]},{\\\"title\\\":\\\"Color Wise\\\",\\\"link\\\":\\\"https://colorwise.io/\\\",\\\"tags\\\":[\\\"css\\\",\\\"color\\\",\\\"themes\\\"]}]}\");\n\n//# sourceURL=webpack:///./src/data/resources.json?");

/***/ }),

/***/ "./src/scripts/app.js":
/*!****************************!*\
  !*** ./src/scripts/app.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _data_resources_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/resources.json */ \"./src/data/resources.json\");\nvar _data_resources_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../data/resources.json */ \"./src/data/resources.json\", 1);\n\nvar parentElement = document.querySelector('main');\n\nfunction getData() {\n  var dataKeys = Object.keys(_data_resources_json__WEBPACK_IMPORTED_MODULE_0__);\n  dataKeys.forEach(function (key) {\n    var section = document.createElement('section');\n    section.className = \"week\".concat(key);\n    var sectionTitle = key === 'misc' ? key : \"week_\".concat(key);\n    section.innerHTML = \"<h2>\".concat(sectionTitle, \"</h2> <ul></ul>\");\n    parentElement.appendChild(section);\n    _data_resources_json__WEBPACK_IMPORTED_MODULE_0__[key].forEach(function (item) {\n      var resourceElement = document.querySelector(\".week\".concat(key, \" ul\"));\n      var resourceElementList = document.createElement('li');\n      resourceElementList.innerHTML = \"<a href=\\\"\".concat(item.link, \"\\\" target=\\\"_blank\\\">\").concat(item.title, \"</a>\");\n      resourceElement.appendChild(resourceElementList);\n    });\n  });\n}\n\ngetData();\n\n//# sourceURL=webpack:///./src/scripts/app.js?");

/***/ }),

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/styles/main.scss?");

/***/ }),

/***/ 0:
/*!*********************************************************!*\
  !*** multi ./src/scripts/app.js ./src/styles/main.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./src/scripts/app.js */\"./src/scripts/app.js\");\nmodule.exports = __webpack_require__(/*! ./src/styles/main.scss */\"./src/styles/main.scss\");\n\n\n//# sourceURL=webpack:///multi_./src/scripts/app.js_./src/styles/main.scss?");

/***/ })

/******/ });