/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/index.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/img/svg sync recursive \\.svg$":
/*!****************************************!*\
  !*** ./src/assets/img/svg sync \.svg$ ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./footer-logo.svg": "./src/assets/img/svg/footer-logo.svg",
	"./h-01.svg": "./src/assets/img/svg/h-01.svg",
	"./h-02.svg": "./src/assets/img/svg/h-02.svg",
	"./h-03.svg": "./src/assets/img/svg/h-03.svg",
	"./h-04.svg": "./src/assets/img/svg/h-04.svg",
	"./hamburger-close.svg": "./src/assets/img/svg/hamburger-close.svg",
	"./hamburger-open.svg": "./src/assets/img/svg/hamburger-open.svg",
	"./input-file.svg": "./src/assets/img/svg/input-file.svg",
	"./logo.svg": "./src/assets/img/svg/logo.svg",
	"./modal-close.svg": "./src/assets/img/svg/modal-close.svg",
	"./modal-result.svg": "./src/assets/img/svg/modal-result.svg",
	"./social-01.svg": "./src/assets/img/svg/social-01.svg",
	"./social-02.svg": "./src/assets/img/svg/social-02.svg",
	"./social-03.svg": "./src/assets/img/svg/social-03.svg",
	"./social-04.svg": "./src/assets/img/svg/social-04.svg",
	"./social-05.svg": "./src/assets/img/svg/social-05.svg",
	"./text-look.svg": "./src/assets/img/svg/text-look.svg"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/assets/img/svg sync recursive \\.svg$";

/***/ }),

/***/ "./src/assets/img/svg/footer-logo.svg":
/*!********************************************!*\
  !*** ./src/assets/img/svg/footer-logo.svg ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
      id: "footer-logo-usage",
      viewBox: "0 0 213 38",
      url: __webpack_require__.p + "assets/img/svg/sprite.svg#footer-logo",
      toString: function () {
        return this.url;
      }
    });

/***/ }),

/***/ "./src/assets/img/svg/h-01.svg":
/*!*************************************!*\
  !*** ./src/assets/img/svg/h-01.svg ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
      id: "h-01-usage",
      viewBox: "0 0 265 279",
      url: __webpack_require__.p + "assets/img/svg/sprite.svg#h-01",
      toString: function () {
        return this.url;
      }
    });

/***/ }),

/***/ "./src/assets/img/svg/h-02.svg":
/*!*************************************!*\
  !*** ./src/assets/img/svg/h-02.svg ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
      id: "h-02-usage",
      viewBox: "0 0 276 287",
      url: __webpack_require__.p + "assets/img/svg/sprite.svg#h-02",
      toString: function () {
        return this.url;
      }
    });

/***/ }),

/***/ "./src/assets/img/svg/h-03.svg":
/*!*************************************!*\
  !*** ./src/assets/img/svg/h-03.svg ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
      id: "h-03-usage",
      viewBox: "0 0 268 286",
      url: __webpack_require__.p + "assets/img/svg/sprite.svg#h-03",
      toString: function () {
        return this.url;
      }
    });

/***/ }),

/***/ "./src/assets/img/svg/h-04.svg":
/*!*************************************!*\
  !*** ./src/assets/img/svg/h-04.svg ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
      id: "h-04-usage",
      viewBox: "0 0 297 236",
      url: __webpack_require__.p + "assets/img/svg/sprite.svg#h-04",
      toString: function () {
        return this.url;
      }
    });

/***/ }),

/***/ "./src/assets/img/svg/hamburger-close.svg":
/*!************************************************!*\
  !*** ./src/assets/img/svg/hamburger-close.svg ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
      id: "hamburger-close-usage",
      viewBox: "0 0 18 18",
      url: __webpack_require__.p + "assets/img/svg/sprite.svg#hamburger-close",
      toString: function () {
        return this.url;
      }
    });

/***/ }),

/***/ "./src/assets/img/svg/hamburger-open.svg":
/*!***********************************************!*\
  !*** ./src/assets/img/svg/hamburger-open.svg ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
      id: "hamburger-open-usage",
      viewBox: "0 0 22 19",
      url: __webpack_require__.p + "assets/img/svg/sprite.svg#hamburger-open",
      toString: function () {
        return this.url;
      }
    });

/***/ }),

/***/ "./src/assets/img/svg/input-file.svg":
/*!*******************************************!*\
  !*** ./src/assets/img/svg/input-file.svg ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
      id: "input-file-usage",
      viewBox: "0 0 18 19",
      url: __webpack_require__.p + "assets/img/svg/sprite.svg#input-file",
      toString: function () {
        return this.url;
      }
    });

/***/ }),

/***/ "./src/assets/img/svg/logo.svg":
/*!*************************************!*\
  !*** ./src/assets/img/svg/logo.svg ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
      id: "logo-usage",
      viewBox: "0 0 224 47",
      url: __webpack_require__.p + "assets/img/svg/sprite.svg#logo",
      toString: function () {
        return this.url;
      }
    });

/***/ }),

/***/ "./src/assets/img/svg/modal-close.svg":
/*!********************************************!*\
  !*** ./src/assets/img/svg/modal-close.svg ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
      id: "modal-close-usage",
      viewBox: "0 0 27 27",
      url: __webpack_require__.p + "assets/img/svg/sprite.svg#modal-close",
      toString: function () {
        return this.url;
      }
    });

/***/ }),

/***/ "./src/assets/img/svg/modal-result.svg":
/*!*********************************************!*\
  !*** ./src/assets/img/svg/modal-result.svg ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
      id: "modal-result-usage",
      viewBox: "0 0 64 65",
      url: __webpack_require__.p + "assets/img/svg/sprite.svg#modal-result",
      toString: function () {
        return this.url;
      }
    });

/***/ }),

/***/ "./src/assets/img/svg/social-01.svg":
/*!******************************************!*\
  !*** ./src/assets/img/svg/social-01.svg ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
      id: "social-01-usage",
      viewBox: "0 0 9 20",
      url: __webpack_require__.p + "assets/img/svg/sprite.svg#social-01",
      toString: function () {
        return this.url;
      }
    });

/***/ }),

/***/ "./src/assets/img/svg/social-02.svg":
/*!******************************************!*\
  !*** ./src/assets/img/svg/social-02.svg ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
      id: "social-02-usage",
      viewBox: "0 0 21 21",
      url: __webpack_require__.p + "assets/img/svg/sprite.svg#social-02",
      toString: function () {
        return this.url;
      }
    });

/***/ }),

/***/ "./src/assets/img/svg/social-03.svg":
/*!******************************************!*\
  !*** ./src/assets/img/svg/social-03.svg ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
      id: "social-03-usage",
      viewBox: "0 0 18 18",
      url: __webpack_require__.p + "assets/img/svg/sprite.svg#social-03",
      toString: function () {
        return this.url;
      }
    });

/***/ }),

/***/ "./src/assets/img/svg/social-04.svg":
/*!******************************************!*\
  !*** ./src/assets/img/svg/social-04.svg ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
      id: "social-04-usage",
      viewBox: "0 0 22 16",
      url: __webpack_require__.p + "assets/img/svg/sprite.svg#social-04",
      toString: function () {
        return this.url;
      }
    });

/***/ }),

/***/ "./src/assets/img/svg/social-05.svg":
/*!******************************************!*\
  !*** ./src/assets/img/svg/social-05.svg ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
      id: "social-05-usage",
      viewBox: "0 0 20 12",
      url: __webpack_require__.p + "assets/img/svg/sprite.svg#social-05",
      toString: function () {
        return this.url;
      }
    });

/***/ }),

/***/ "./src/assets/img/svg/text-look.svg":
/*!******************************************!*\
  !*** ./src/assets/img/svg/text-look.svg ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
      id: "text-look-usage",
      viewBox: "0 0 182 17",
      url: __webpack_require__.p + "assets/img/svg/sprite.svg#text-look",
      toString: function () {
        return this.url;
      }
    });

/***/ }),

/***/ "./src/assets/sass/app.sass":
/*!**********************************!*\
  !*** ./src/assets/sass/app.sass ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "./src/assets/sass/media.sass":
/*!************************************!*\
  !*** ./src/assets/sass/media.sass ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var owl_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! owl.carousel */ "./node_modules/owl.carousel/dist/owl.carousel.js");
/* harmony import */ var owl_carousel__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(owl_carousel__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fancyapps_fancybox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fancyapps/fancybox */ "./node_modules/@fancyapps/fancybox/dist/jquery.fancybox.js");
/* harmony import */ var _fancyapps_fancybox__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fancyapps_fancybox__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var select2_dist_js_select2_min__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! select2/dist/js/select2.min */ "./node_modules/select2/dist/js/select2.min.js");
/* harmony import */ var select2_dist_js_select2_min__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(select2_dist_js_select2_min__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var malihu_custom_scrollbar_plugin_jquery_mCustomScrollbar_concat_min__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.concat.min */ "./node_modules/malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.concat.min.js");
/* harmony import */ var malihu_custom_scrollbar_plugin_jquery_mCustomScrollbar_concat_min__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(malihu_custom_scrollbar_plugin_jquery_mCustomScrollbar_concat_min__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _js_tabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./js/tabs */ "./src/js/tabs.js");
/* harmony import */ var _js_tabs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_js_tabs__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _js_aniamation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./js/aniamation */ "./src/js/aniamation.js");
/* harmony import */ var _js_app__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./js/app */ "./src/js/app.js");
/* harmony import */ var _js_app__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_js_app__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var normalize_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! normalize.css */ "./node_modules/normalize.css/normalize.css");
/* harmony import */ var normalize_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(normalize_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _assets_sass_app_sass__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./assets/sass/app.sass */ "./src/assets/sass/app.sass");
/* harmony import */ var _assets_sass_app_sass__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_assets_sass_app_sass__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _assets_sass_media_sass__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./assets/sass/media.sass */ "./src/assets/sass/media.sass");
/* harmony import */ var _assets_sass_media_sass__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_assets_sass_media_sass__WEBPACK_IMPORTED_MODULE_10__);
// JS







 // SCSS



 // svg sprite

function requireAll(r) {
  r.keys().forEach(r);
}

requireAll(__webpack_require__("./src/assets/img/svg sync recursive \\.svg$"));
fetch("./assets/img/svg//sprite.svg").then(function (res) {
  return res.text();
}).then(function (data) {
  document.getElementById('svg-icons').innerHTML = data;
});

/***/ }),

/***/ "./src/js/aniamation.js":
/*!******************************!*\
  !*** ./src/js/aniamation.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var TimelineMax__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! TimelineMax */ "./node_modules/gsap/src/minified/TimelineMax.min.js");
/* harmony import */ var TimelineMax__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(TimelineMax__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ScrollMagic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ScrollMagic */ "./node_modules/scrollmagic/scrollmagic/minified/ScrollMagic.min.js");
/* harmony import */ var ScrollMagic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ScrollMagic__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var animation_gsap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! animation.gsap */ "./node_modules/scrollmagic/scrollmagic/minified/plugins/animation.gsap.min.js");
/* harmony import */ var animation_gsap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(animation_gsap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var debug_addIndicators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! debug.addIndicators */ "./node_modules/scrollmagic/scrollmagic/minified/plugins/debug.addIndicators.min.js");
/* harmony import */ var debug_addIndicators__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(debug_addIndicators__WEBPACK_IMPORTED_MODULE_3__);




$(function () {
  $(window).on('load', function () {
    var tl1p1 = new TimelineMax__WEBPACK_IMPORTED_MODULE_0___default.a(),
        tl1p2 = new TimelineMax__WEBPACK_IMPORTED_MODULE_0___default.a(),
        tl2p1 = new TimelineMax__WEBPACK_IMPORTED_MODULE_0___default.a(),
        tl2p2 = new TimelineMax__WEBPACK_IMPORTED_MODULE_0___default.a(),
        tl3p1 = new TimelineMax__WEBPACK_IMPORTED_MODULE_0___default.a(),
        tl3p2 = new TimelineMax__WEBPACK_IMPORTED_MODULE_0___default.a(),
        tl4p1 = new TimelineMax__WEBPACK_IMPORTED_MODULE_0___default.a(),
        tl4p2 = new TimelineMax__WEBPACK_IMPORTED_MODULE_0___default.a();
    var controller = new ScrollMagic__WEBPACK_IMPORTED_MODULE_1___default.a.Controller();
    tl1p1.fromTo('.layout__grid', 1, {
      top: -2000
    }, {
      top: 0
    }, 0.2).staggerFromTo('.header__ttl', .8, {
      opacity: 0
    }, {
      opacity: 1
    }, 0.3) // .staggerFromTo('.header__nav-link', .2, {x:30,opacity:0}, {x:0,opacity: 1}, 0.1)
    //.staggerFromTo('.package__item_left', 1.2, {x: -30, opacity: 0}, {x: 0, opacity: 1}, 0.6)
    .staggerFromTo('.banner__subttl', .5, {
      x: -30,
      opacity: 0
    }, {
      x: 0,
      opacity: 1
    }, 0.2).staggerFromTo('.banner__left', .8, {
      y: 30,
      opacity: 0
    }, {
      y: 0,
      opacity: 1
    }, 1).staggerFromTo('.banner__center', .8, {
      y: 30,
      opacity: 0
    }, {
      y: 0,
      opacity: 1
    }, 1); // .staggerFromTo('.banner__descr', .5, {y:30,opacity:0}, {y:0,opacity:1}, 1)

    tl1p2.fromTo('.package__ttl', .5, {
      y: 30,
      opacity: 0
    }, {
      opacity: 1,
      y: 0
    }, .5).staggerFromTo('.package__item_left', .4, {
      x: -30,
      opacity: 0
    }, {
      x: 0,
      opacity: 1
    }, 0.5).staggerFromTo('.package__item_right', .2, {
      x: 30,
      opacity: 0
    }, {
      x: 0,
      opacity: 1
    }, .3);
    tl2p1.fromTo('.trust__ttl', .5, {
      y: 30,
      opacity: 0
    }, {
      opacity: 1,
      y: 0
    }, .5).staggerFromTo('.trust__subttl', .5, {
      y: 30,
      opacity: 0
    }, {
      y: 0,
      opacity: 1
    }, "-=0.7").staggerFromTo('.trust__item', .3, {
      y: -50,
      opacity: 0
    }, {
      y: 0,
      opacity: 1
    }, .2);
    tl2p2.fromTo('.test__ttl', .5, {
      y: 30,
      opacity: 0
    }, {
      opacity: 1,
      y: 0
    }, .5).staggerFromTo('.test__item', .3, {
      x: -10,
      opacity: 0
    }, {
      x: 0,
      opacity: 1
    }, .2);
    tl3p1.staggerFromTo('.steps__item', .1, {
      rotationY: -40,
      x: -10,
      opacity: 0
    }, {
      rotationY: 0,
      x: 0,
      opacity: 1
    }, 0.2);
    var scene1p1 = new ScrollMagic__WEBPACK_IMPORTED_MODULE_1___default.a.Scene({
      triggerElement: ".header",
      triggerHook: 0 // reverse: false,

    }).setTween(tl1p1).addTo(controller);
    var scene1p2 = new ScrollMagic__WEBPACK_IMPORTED_MODULE_1___default.a.Scene({
      triggerElement: ".package",
      triggerHook: 0.6 // reverse: false,

    }).setTween(tl1p2).addTo(controller);
    var scene2p1 = new ScrollMagic__WEBPACK_IMPORTED_MODULE_1___default.a.Scene({
      triggerElement: ".interface",
      triggerHook: 0.6 // reverse: false,

    }).setTween(tl2p1).addTo(controller);
    var scene2p2 = new ScrollMagic__WEBPACK_IMPORTED_MODULE_1___default.a.Scene({
      triggerElement: ".test",
      triggerHook: 0.6 // reverse: false,

    }).setTween(tl2p2).addTo(controller);
    var scene3p1 = new ScrollMagic__WEBPACK_IMPORTED_MODULE_1___default.a.Scene({
      triggerElement: ".methodology",
      triggerHook: 0.6 // reverse: false,

    }).setTween(tl3p1).addTo(controller);
    var scene3p2 = new ScrollMagic__WEBPACK_IMPORTED_MODULE_1___default.a.Scene({
      triggerElement: ".methodology",
      triggerHook: 0.6 // reverse: false,

    }).setTween(tl3p2).addTo(controller);
    var scene4p1 = new ScrollMagic__WEBPACK_IMPORTED_MODULE_1___default.a.Scene({
      triggerElement: ".team",
      triggerHook: 0.6 // reverse: false,

    }).setTween(tl4p1).addTo(controller);
    var scene4p2 = new ScrollMagic__WEBPACK_IMPORTED_MODULE_1___default.a.Scene({
      triggerElement: ".footer",
      triggerHook: 0.6 // reverse: false,

    }).setTween(tl4p2).addTo(controller);
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($, jQuery) {$(function () {
  $(window).on('load', function () {
    $('.preloader__wrp').fadeOut();
  });
}); //sliders arrow

var arrow_next = "<svg width='14' height='23' viewBox='0 0 14 23' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M2 2L11.5 11.5L2 21' stroke-width='3'/></svg>",
    arrow_prev = "<svg width='14' height='23' viewBox='0 0 14 23' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M12 2L2.5 11.5L12 21' stroke-width='3'/></svg>";
$(function () {
  //ancors
  $("a.js-ancor-link").click(function () {
    var elementClick = $(this).attr("href");
    var destination = $(elementClick).offset().top;
    jQuery("html:not(:animated),body:not(:animated)").animate({
      scrollTop: destination
    }, 800);
    return false;
  });
});
$(function () {
  $('.js-header__menu-btn').on('click', function headerHambClick() {
    $('body').toggleClass('menu-open');
  });
}); //checkbox

$('.js-package__input_right').change(function () {
  if ($(this).is(':checked')) {
    $(this).parent().removeClass('unchecked');
    $(this).parent().addClass('checked');
    $('.js-result-price_right').html('3 150');
  } else {
    $(this).parent().removeClass('checked');
    $(this).parent().addClass('unchecked');
    $('.js-result-price_right').html('3 500');
  }
});
$('.js-package__input_left').change(function () {
  if ($(this).is(':checked')) {
    $(this).parent().removeClass('unchecked');
    $(this).parent().addClass('checked');
    $('.js-result-price_left').html('1 750');
  } else {
    $(this).parent().removeClass('checked');
    $(this).parent().addClass('unchecked');
    $('.js-result-price_left').html('1 930');
  }
}); // input file

let inputs = document.querySelectorAll('.inputfile');
Array.prototype.forEach.call(inputs, function (input) {
  let label = input.nextElementSibling,
      labelVal = label.innerHTML;
  input.addEventListener('change', function (e) {
    let fileName = '';
    if (this.files && this.files.length > 1) fileName = (this.getAttribute('data-multiple-caption') || '').replace('{count}', this.files.length);else fileName = e.target.value.split('\\').pop();
    if (fileName) label.querySelector('span').innerHTML = fileName;else label.innerHTML = labelVal;
  });
});


$('[data-fancybox]').fancybox({
  btnTpl: {
    smallBtn: '<button type="button" data-fancybox-close class="modal__close" title="{{CLOSE}}">' + 'закрыть' + '<svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">' + '<use xlink:href="#modal-close"></use>' + '</svg>' + "</button>"
  },
  clickContent: false,
  toolbar: false
});
$(function () {
  function checkWidth() {
    var windowWidth = $('body').innerWidth();

    if (windowWidth < 769) {
      //remove scrollbar on mobile
      $('js-scrollbar').mCustomScrollbar("destroy"); //service slider

      var sync1 = $('.js-service-slider-top');
      var sync2 = $('.js-service-slider-bottom');
      var thumbnailItemClass = '.owl-item';

      function syncPosition(el) {
        var $owlSlider = $(this).data('owl.carousel');
        var loop = $owlSlider.options.loop;
        var current = el.item.index;

        if (loop) {
          var count = el.item.count - 1;
          current = Math.round(el.item.index - el.item.count / 2 - 0.5);

          if (current < 0) {
            current = count;
          }

          if (current > count) {
            current = 0;
          }
        }

        var owlThumbnail = sync2.data('owl.carousel');
        var itemClass = ".".concat(owlThumbnail.options.itemClass);
        var thumbnailCurrentItem = sync2.find(itemClass).removeClass('synced').eq(current);
        thumbnailCurrentItem.addClass('synced');

        if (!thumbnailCurrentItem.hasClass('active')) {
          var duration = 300;
          sync2.trigger('to.owl.carousel', [current, duration, true]);
        }
      }

      sync1.owlCarousel({
        startPosition: 0,
        items: 1,
        loop: false,
        margin: 10,
        nav: false,
        dots: false,
        animateOut: 'fadeOut',
        smartSpeed: 500,
        autoplay: false,
        autoplayTimeout: 6000,
        autoplayHoverPause: false
      }).on('changed.owl.carousel', syncPosition);
      sync2.owlCarousel({
        startPosition: 0,
        items: 1,
        loop: false,
        margin: 15,
        autoplay: false,
        nav: true,
        navText: [arrow_prev, arrow_next],
        navClass: ["slider-arrow slider-arrow_prev slider-arrow_red", "slider-arrow slider-arrow_next slider-arrow_red"],
        navContainerClass: 'slider-arrow__wrp',
        dots: false,
        onInitialized: function onInitialized(e) {
          // eslint-disable-next-line no-underscore-dangle
          var thumbnailCurrentItem = $(e.target).find(thumbnailItemClass).eq(this._current);
          thumbnailCurrentItem.addClass('synced');
        }
      }).on('click', thumbnailItemClass, function (e) {
        e.preventDefault();
        var duration = 10000;
        var itemIndex = $(e.target).parents(thumbnailItemClass).index();
        sync1.trigger('to.owl.carousel', [itemIndex, duration, true]);
      }).on('changed.owl.carousel', function (el) {
        var number = el.item.index;
        var $owlSlider = sync1.data('owl.carousel');
        $owlSlider.to(number, 100, true);
      });
      $('.service__monitor').find('.cd-tabs__panel').removeClass('cd-tabs__panel');
      $('.js-packages-slider').owlCarousel({
        loop: true,
        items: 1,
        nav: true,
        autoHeight: true,
        navText: [arrow_prev, arrow_next],
        navClass: ["slider-arrow slider-arrow_prev slider-arrow_white", "slider-arrow slider-arrow_next slider-arrow_white"],
        navContainerClass: 'slider-arrow__wrp  slider-arrow__wrp_packages',
        dots: false
      });
      $('.js-methodology-slider').owlCarousel({
        loop: false,
        items: 1,
        margin: 10,
        nav: true,
        autoHeight: true,
        navText: [arrow_prev, arrow_next],
        navClass: ["slider-arrow slider-arrow_prev slider-arrow_prev_methodology slider-arrow_red", "slider-arrow slider-arrow_next slider-arrow_red slider-arrow_next_methodology"],
        navContainerClass: 'slider-arrow__wrp slider-arrow__wrp_methodology',
        dots: false
      });
      $('.js-soft-mobile-slider').owlCarousel({
        loop: false,
        items: 1,
        margin: 120,
        nav: true,
        navText: [arrow_prev, arrow_next],
        navClass: ["slider-arrow slider-arrow_prev slider-arrow_prev_soft-mobile slider-arrow_red", "slider-arrow slider-arrow_next slider-arrow_red slider-arrow_next_soft-mobile"],
        navContainerClass: 'slider-arrow__wrp slider-arrow__wrp_soft-mobile',
        dots: false
      });
    } else {
      //scroll bar
      $('.js-scrollbar').mCustomScrollbar({
        axis: 'y',
        theme: 'dark-thick',
        scrollInertia: '330',
        setHeight: 570,
        scrollButtons: {
          enable: true
        }
      }); //remove slider on desktop

      $('.js-service-slider-top').trigger('destroy.owl.carousel').removeClass('js-service-slider-top owl-carousel owl-theme');
      $('.js-service-slider-bottom').trigger('destroy.owl.carousel').removeClass('js-service-slider-bottom owl-carousel owl-theme');
      $('.js-packages-slider').trigger('destroy.owl.carousel').removeClass('js-packages-slider owl-carousel owl-theme');
      $('.js-soft-mobile-slider').trigger('destroy.owl.carousel').removeClass('js-soft-mobile-slider owl-carousel owl-theme');
      $('.js-methodology-slider').trigger('destroy.owl.carousel').removeClass('js-methodology-slider owl-carousel owl-theme');
    }
  }

  checkWidth();
  $(window).resize(function () {
    checkWidth(); // проверит при изменении размера окна клиента
  });
}); //header video autoplay

$(function () {
  $('.js-play-video').click(function (ev) {
    $(this).addClass('is-playing');
    $('.header__video_play').fadeOut(100);
    $('.header__video_overlay').fadeOut(100);
    $('.header__video_frame').fadeIn(100);
    $(".header__video_frame")[0].src += "?autoplay=1";
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js"), __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./src/js/tabs.js":
/*!************************!*\
  !*** ./src/js/tabs.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Utility function
function Util() {}

;
/*
	class manipulation functions
*/

Util.hasClass = function (el, className) {
  if (el.classList) return el.classList.contains(className);else return !!el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'));
};

Util.addClass = function (el, className) {
  var classList = className.split(' ');
  if (el.classList) el.classList.add(classList[0]);else if (!Util.hasClass(el, classList[0])) el.className += " " + classList[0];
  if (classList.length > 1) Util.addClass(el, classList.slice(1).join(' '));
};

Util.removeClass = function (el, className) {
  var classList = className.split(' ');
  if (el.classList) el.classList.remove(classList[0]);else if (Util.hasClass(el, classList[0])) {
    var reg = new RegExp('(\\s|^)' + classList[0] + '(\\s|$)');
    el.className = el.className.replace(reg, ' ');
  }
  if (classList.length > 1) Util.removeClass(el, classList.slice(1).join(' '));
};

Util.toggleClass = function (el, className, bool) {
  if (bool) Util.addClass(el, className);else Util.removeClass(el, className);
};

Util.setAttributes = function (el, attrs) {
  for (var key in attrs) {
    el.setAttribute(key, attrs[key]);
  }
};
/*
  DOM manipulation
*/


Util.getChildrenByClassName = function (el, className) {
  var children = el.children,
      childrenByClass = [];

  for (var i = 0; i < el.children.length; i++) {
    if (Util.hasClass(el.children[i], className)) childrenByClass.push(el.children[i]);
  }

  return childrenByClass;
};
/*
	Animate height of an element
*/


Util.setHeight = function (start, to, element, duration, cb) {
  var change = to - start,
      currentTime = null;

  var animateHeight = function animateHeight(timestamp) {
    if (!currentTime) currentTime = timestamp;
    var progress = timestamp - currentTime;
    var val = parseInt(progress / duration * change + start);
    element.setAttribute("style", "height:" + val + "px;");

    if (progress < duration) {
      window.requestAnimationFrame(animateHeight);
    } else {
      cb();
    }
  }; //set the height of the element before starting animation -> fix bug on Safari


  element.setAttribute("style", "height:" + start + "px;");
  window.requestAnimationFrame(animateHeight);
};
/*
	Smooth Scroll
*/


Util.scrollTo = function (final, duration, cb) {
  var start = window.scrollY || document.documentElement.scrollTop,
      currentTime = null;

  var animateScroll = function animateScroll(timestamp) {
    if (!currentTime) currentTime = timestamp;
    var progress = timestamp - currentTime;
    if (progress > duration) progress = duration;
    var val = Math.easeInOutQuad(progress, start, final - start, duration);
    window.scrollTo(0, val);

    if (progress < duration) {
      window.requestAnimationFrame(animateScroll);
    } else {
      cb && cb();
    }
  };

  window.requestAnimationFrame(animateScroll);
};
/*
  Focus utility classes
*/
//Move focus to an element


Util.moveFocus = function (element) {
  if (!element) element = document.getElementsByTagName("body")[0];
  element.focus();

  if (document.activeElement !== element) {
    element.setAttribute('tabindex', '-1');
    element.focus();
  }
};
/*
  Misc
*/


Util.getIndexInArray = function (array, el) {
  return Array.prototype.indexOf.call(array, el);
};

Util.cssSupports = function (property, value) {
  if ('CSS' in window) {
    return CSS.supports(property, value);
  } else {
    var jsProperty = property.replace(/-([a-z])/g, function (g) {
      return g[1].toUpperCase();
    });
    return jsProperty in document.body.style;
  }
};
/*
	Polyfills
*/
//Closest() method


if (!Element.prototype.matches) {
  Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
}

if (!Element.prototype.closest) {
  Element.prototype.closest = function (s) {
    var el = this;
    if (!document.documentElement.contains(el)) return null;

    do {
      if (el.matches(s)) return el;
      el = el.parentElement || el.parentNode;
    } while (el !== null && el.nodeType === 1);

    return null;
  };
} //Custom Event() constructor


if (typeof window.CustomEvent !== "function") {
  function CustomEvent(event, params) {
    params = params || {
      bubbles: false,
      cancelable: false,
      detail: undefined
    };
    var evt = document.createEvent('CustomEvent');
    evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
    return evt;
  }

  CustomEvent.prototype = window.Event.prototype;
  window.CustomEvent = CustomEvent;
}
/*
	Animation curves
*/


Math.easeInOutQuad = function (t, b, c, d) {
  t /= d / 2;
  if (t < 1) return c / 2 * t * t + b;
  t--;
  return -c / 2 * (t * (t - 2) - 1) + b;
};

(function () {
  // Responsive Tabbed Navigation - by CodyHouse.co
  function TabbedNavigation(element) {
    this.element = element;
    this.navigation = this.element.getElementsByClassName("cd-tabs__navigation")[0];
    this.navigationElements = this.navigation.getElementsByClassName("cd-tabs__list")[0];
    this.content = this.element.getElementsByClassName("cd-tabs__panels")[0];
    this.activeTab;
    this.activeContent;
    this.init();
  }

  ;

  TabbedNavigation.prototype.init = function () {
    var self = this; //listen for the click on the tabs navigation

    this.navigation.addEventListener("click", function (event) {
      event.preventDefault();
      var selectedItem = event.target.closest('.cd-tabs__item');

      if (selectedItem && !Util.hasClass(selectedItem, "cd-tabs__item--selected")) {
        self.activeTab = selectedItem;
        self.activeContent = document.getElementById(self.activeTab.getAttribute("href").replace('#', ''));
        self.updateContent();
      }
    }); //listen for the scroll in the tabs navigation

    this.navigationElements.addEventListener('scroll', function (event) {
      self.toggleNavShadow();
    });
  };

  TabbedNavigation.prototype.updateContent = function () {
    var self = this;
    var actualHeight = this.content.offsetHeight; //update navigation classes

    Util.removeClass(this.navigation.querySelectorAll(".cd-tabs__item--selected")[0], "cd-tabs__item--selected");
    Util.addClass(this.activeTab, "cd-tabs__item--selected"); //update content classes

    Util.removeClass(this.content.querySelectorAll(".cd-tabs__panel--selected")[0], "cd-tabs__panel--selected");
    Util.addClass(this.activeContent, "cd-tabs__panel--selected"); //set new height for the content wrapper

    if (window.requestAnimationFrame && window.getComputedStyle(this.element).getPropertyValue('display') == 'block') {
      Util.setHeight(actualHeight, this.activeContent.offsetHeight, this.content, 200, function () {
        self.content.removeAttribute('style');
      });
    }
  };

  TabbedNavigation.prototype.toggleNavShadow = function () {
    //show/hide tabs navigation gradient layer
    this.content.removeAttribute("style");
    var navItems = this.navigationElements.getElementsByClassName("cd-tabs__item"),
        navigationRight = Math.floor(this.navigationElements.getBoundingClientRect().right),
        lastItemRight = Math.ceil(navItems[navItems.length - 1].getBoundingClientRect().right);
    navigationRight >= lastItemRight ? Util.addClass(this.element, "cd-tabs--scroll-ended") : Util.removeClass(this.element, "cd-tabs--scroll-ended");
  };

  var tabs = document.getElementsByClassName("js-cd-tabs"),
      tabsArray = [],
      resizing = false;

  if (tabs.length > 0) {
    for (var i = 0; i < tabs.length; i++) {
      (function (i) {
        tabsArray.push(new TabbedNavigation(tabs[i]));
      })(i);
    }

    window.addEventListener("resize", function (event) {
      if (!resizing) {
        resizing = true;
        !window.requestAnimationFrame ? setTimeout(checkTabs, 250) : window.requestAnimationFrame(checkTabs);
      }
    });
  }

  function checkTabs() {
    tabsArray.forEach(function (tab) {
      tab.toggleNavShadow();
    });
    resizing = false;
  }

  ;
})();

/***/ })

/******/ });
//# sourceMappingURL=app.47ccfeeeb9c8f12a004c.js.map