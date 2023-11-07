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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/activeKoala.js":
/*!****************************!*\
  !*** ./src/activeKoala.js ***!
  \****************************/
/*! exports provided: activeKoala, selectKoala */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"activeKoala\", function() { return activeKoala; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"selectKoala\", function() { return selectKoala; });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ \"./src/index.js\");\n\n\nlet activeKoala = null\n\n// Changes the active koala, then re-renders the page to display that koala\nlet selectKoala = koala => {\n    activeKoala = koala\n    Object(_index__WEBPACK_IMPORTED_MODULE_0__[\"render\"])()\n}\n\n\n//# sourceURL=webpack:///./src/activeKoala.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony import */ var _koalas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./koalas */ \"./src/koalas.js\");\n/* harmony import */ var _activeKoala__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./activeKoala */ \"./src/activeKoala.js\");\n/* harmony import */ var _renderActiveKoala__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renderActiveKoala */ \"./src/renderActiveKoala.js\");\n/* harmony import */ var _renderKoalaList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./renderKoalaList */ \"./src/renderKoalaList.js\");\n\n\n\n\n\n// Called once when the page loads, and again every time a koala is selected\nlet render = () => {\n    let oldPage=  document.querySelector('.koala-container')\n    let newPage;\n    if(_activeKoala__WEBPACK_IMPORTED_MODULE_1__[\"activeKoala\"]){\n        newPage = Object(_renderActiveKoala__WEBPACK_IMPORTED_MODULE_2__[\"renderActiveKoala\"])(_activeKoala__WEBPACK_IMPORTED_MODULE_1__[\"activeKoala\"])\n    } else {\n        newPage = Object(_renderKoalaList__WEBPACK_IMPORTED_MODULE_3__[\"renderKoalaList\"])(_koalas__WEBPACK_IMPORTED_MODULE_0__[\"koalas\"])\n    }\n    newPage.classList.add('koala-container')\n    oldPage.replaceWith(newPage)\n}\n\n// Render the page after all functions are defined\nrender()\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/koalas.js":
/*!***********************!*\
  !*** ./src/koalas.js ***!
  \***********************/
/*! exports provided: koalas */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"koalas\", function() { return koalas; });\nconst koalas = [\n    {\n        name: 'Basil',\n        description: `This koala is loving towards me, and will always come when called. She is distrustful of strangers, and dislikes other koalas.`,\n        imageURL: './assets/basil.jpeg'\n    },\n    {\n        name: 'Sage',\n        description: 'This chill koala is friendly toward me, and will follow me as I explore. She seems to let anyone get near her, and will happily play with other koalas.',\n        imageURL: './assets/sage.jpeg'\n    },\n    {\n        name: 'Pine Nut',\n        description: 'This inquisitive koala is cautious of me, but will sometimes come when called.',\n        imageURL: './assets/pine-nut.jpeg'\n    },\n    {\n        name: 'Padfoot',\n        description: 'This koala seems to be the reluctant leader of the others. They mostly just sleep.',\n        imageURL: './assets/padfoot.jpeg'\n    },\n    {\n        name: 'Bob',\n        description: 'I\\'ve only just met Bob, but we\\'re off to a good start.',\n        imageURL: './assets/bob.jpeg'\n    },\n]\n\n//# sourceURL=webpack:///./src/koalas.js?");

/***/ }),

/***/ "./src/renderActiveKoala.js":
/*!**********************************!*\
  !*** ./src/renderActiveKoala.js ***!
  \**********************************/
/*! exports provided: renderActiveKoala */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderActiveKoala\", function() { return renderActiveKoala; });\n/* harmony import */ var _activeKoala__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./activeKoala */ \"./src/activeKoala.js\");\n\n\n// Renders a big image of a selected koala\nlet renderActiveKoala = koala => {\n    let activeKoalaContainer = document.createElement('div')\n    let backButton = document.createElement('button')\n    let backIcon = document.createElement('i')\n    let activeKoalaImage = document.createElement('img')\n\n    backButton.setAttribute('class', 'ui left labeled icon button')\n\n    backIcon.setAttribute('class', 'left arrow icon')\n\n    activeKoalaImage.setAttribute('class', 'ui rounded fluid image')\n\n    activeKoalaImage.setAttribute('src', koala.imageURL)\n\n    backButton.append(\n        backIcon,\n        'Back'\n    )\n\n    backButton.addEventListener('click', () => {\n        Object(_activeKoala__WEBPACK_IMPORTED_MODULE_0__[\"selectKoala\"])(null)\n    })\n\n    activeKoalaContainer.append(\n        backButton,\n        activeKoalaImage\n    )\n\n    return activeKoalaContainer\n}\n\n//# sourceURL=webpack:///./src/renderActiveKoala.js?");

/***/ }),

/***/ "./src/renderKoalaCard.js":
/*!********************************!*\
  !*** ./src/renderKoalaCard.js ***!
  \********************************/
/*! exports provided: renderKoalaCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderKoalaCard\", function() { return renderKoalaCard; });\n/* harmony import */ var _renderKoalaCardContent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderKoalaCardContent */ \"./src/renderKoalaCardContent.js\");\n/* harmony import */ var _renderKoalaCardImage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderKoalaCardImage */ \"./src/renderKoalaCardImage.js\");\n/* harmony import */ var _activeKoala__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./activeKoala */ \"./src/activeKoala.js\");\n\n\n\n\n// Renders a card to display a single koala\nlet renderKoalaCard = koala => {\n    let koalaCard = document.createElement('div')\n    koalaCard.setAttribute('class', 'item')\n    koalaCard.style.cursor = 'pointer';\n    koalaCard.addEventListener('click', () => {\n        Object(_activeKoala__WEBPACK_IMPORTED_MODULE_2__[\"selectKoala\"])(koala)\n    })\n\n    let koalaImage = Object(_renderKoalaCardImage__WEBPACK_IMPORTED_MODULE_1__[\"renderKoalaCardImage\"])(koala)\n    let koalaContent = Object(_renderKoalaCardContent__WEBPACK_IMPORTED_MODULE_0__[\"renderKoalaCardContent\"])(koala)\n\n    koalaCard.append(\n        koalaImage,\n        koalaContent\n    )\n\n    return koalaCard\n}\n\n//# sourceURL=webpack:///./src/renderKoalaCard.js?");

/***/ }),

/***/ "./src/renderKoalaCardContent.js":
/*!***************************************!*\
  !*** ./src/renderKoalaCardContent.js ***!
  \***************************************/
/*! exports provided: renderKoalaCardContent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderKoalaCardContent\", function() { return renderKoalaCardContent; });\n// Renders the content of a koala card (their name and description)\nlet renderKoalaCardContent = koala => {\n    let koalaContent = document.createElement('div')\n    koalaContent.setAttribute('class', 'content')\n\n    let header = document.createElement('div')\n    header.setAttribute('class', 'header')\n    header.append(koala.name)\n\n    let descriptionParagraph = document.createElement('p')\n    descriptionParagraph.append(koala.description)\n\n    let descriptionContainer = document.createElement('div')\n    descriptionContainer.setAttribute('class', 'description')\n    descriptionContainer.append(descriptionParagraph)\n\n    koalaContent.append(\n        header,\n        descriptionContainer\n    )\n\n    return koalaContent\n}\n\n\n//# sourceURL=webpack:///./src/renderKoalaCardContent.js?");

/***/ }),

/***/ "./src/renderKoalaCardImage.js":
/*!*************************************!*\
  !*** ./src/renderKoalaCardImage.js ***!
  \*************************************/
/*! exports provided: renderKoalaCardImage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderKoalaCardImage\", function() { return renderKoalaCardImage; });\n// Renders the image of a koala card\nlet renderKoalaCardImage = koala => {\n    let imageContainer = document.createElement('div')\n    let koalaImage = document.createElement('img')\n\n    imageContainer.setAttribute('class', 'image')\n\n    koalaImage.setAttribute('src', koala.imageURL)\n\n    imageContainer.append(koalaImage)\n\n    return imageContainer\n}\n\n//# sourceURL=webpack:///./src/renderKoalaCardImage.js?");

/***/ }),

/***/ "./src/renderKoalaList.js":
/*!********************************!*\
  !*** ./src/renderKoalaList.js ***!
  \********************************/
/*! exports provided: renderKoalaList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderKoalaList\", function() { return renderKoalaList; });\n/* harmony import */ var _renderKoalaCard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderKoalaCard */ \"./src/renderKoalaCard.js\");\n \n\n// Renders a list of koalas\nlet renderKoalaList = koalas => {\n    let koalaContainer = document.createElement('div')\n\n    koalaContainer.setAttribute('class', 'ui items')\n\n    koalas.forEach( koala => {\n        let koalaCard = Object(_renderKoalaCard__WEBPACK_IMPORTED_MODULE_0__[\"renderKoalaCard\"])(koala)\n        koalaContainer.append(koalaCard)\n    })\n\n    return koalaContainer\n}\n\n//# sourceURL=webpack:///./src/renderKoalaList.js?");

/***/ })

/******/ });