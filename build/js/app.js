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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "js/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar productsAvailable = document.querySelectorAll('.product--available');\n\nfor (var i = 0; i < productsAvailable.length; ++i) {\n  var productCard = productsAvailable[i].querySelectorAll('.product__card');\n  var buyLink = productsAvailable[i].querySelectorAll('.product__buy-link');\n\n  productCard[0].addEventListener('click', handleProductClick);\n  productCard[0].addEventListener('mouseleave', handleProductMouseLeave);\n  buyLink[0].addEventListener('click', handleProductClick);\n}\n\nfunction findClosest(el, cls) {\n  while ((el = el.parentElement) && !el.classList.contains(cls)) {}\n  return el;\n}\n\nfunction handleProductClick(evt) {\n  var product = findClosest(evt.currentTarget, 'product--available');\n\n  product.classList.toggle('product--checked');\n  if (!product.classList.contains('product--checked') && product.classList.contains('product--selected')) {\n    product.classList.remove('product--selected');\n  }\n}\n\nfunction handleProductMouseLeave(evt) {\n  var product = findClosest(evt.currentTarget, 'product--available');\n\n  if (product.classList.contains('product--checked') && !product.classList.contains('product--selected')) {\n    product.classList.add('product--selected');\n  }\n}\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvanMvYXBwLmpzPzcxNmYiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIHByb2R1Y3RzQXZhaWxhYmxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2R1Y3QtLWF2YWlsYWJsZScpO1xuXG5mb3IgKHZhciBpID0gMDsgaSA8IHByb2R1Y3RzQXZhaWxhYmxlLmxlbmd0aDsgKytpKSB7XG4gIHZhciBwcm9kdWN0Q2FyZCA9IHByb2R1Y3RzQXZhaWxhYmxlW2ldLnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9kdWN0X19jYXJkJyk7XG4gIHZhciBidXlMaW5rID0gcHJvZHVjdHNBdmFpbGFibGVbaV0ucXVlcnlTZWxlY3RvckFsbCgnLnByb2R1Y3RfX2J1eS1saW5rJyk7XG5cbiAgcHJvZHVjdENhcmRbMF0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVQcm9kdWN0Q2xpY2spO1xuICBwcm9kdWN0Q2FyZFswXS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgaGFuZGxlUHJvZHVjdE1vdXNlTGVhdmUpO1xuICBidXlMaW5rWzBdLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlUHJvZHVjdENsaWNrKTtcbn1cblxuZnVuY3Rpb24gZmluZENsb3Nlc3QoZWwsIGNscykge1xuICB3aGlsZSAoKGVsID0gZWwucGFyZW50RWxlbWVudCkgJiYgIWVsLmNsYXNzTGlzdC5jb250YWlucyhjbHMpKTtcbiAgcmV0dXJuIGVsO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVQcm9kdWN0Q2xpY2soZXZ0KSB7XG4gIHZhciBwcm9kdWN0ID0gZmluZENsb3Nlc3QoZXZ0LmN1cnJlbnRUYXJnZXQsICdwcm9kdWN0LS1hdmFpbGFibGUnKTtcblxuICBwcm9kdWN0LmNsYXNzTGlzdC50b2dnbGUoJ3Byb2R1Y3QtLWNoZWNrZWQnKTtcbiAgaWYoIXByb2R1Y3QuY2xhc3NMaXN0LmNvbnRhaW5zKCdwcm9kdWN0LS1jaGVja2VkJykgJiYgcHJvZHVjdC5jbGFzc0xpc3QuY29udGFpbnMoJ3Byb2R1Y3QtLXNlbGVjdGVkJykpIHtcbiAgICBwcm9kdWN0LmNsYXNzTGlzdC5yZW1vdmUoJ3Byb2R1Y3QtLXNlbGVjdGVkJyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gaGFuZGxlUHJvZHVjdE1vdXNlTGVhdmUoZXZ0KSB7XG4gIHZhciBwcm9kdWN0ID0gZmluZENsb3Nlc3QoZXZ0LmN1cnJlbnRUYXJnZXQsICdwcm9kdWN0LS1hdmFpbGFibGUnKTtcblxuICBpZihwcm9kdWN0LmNsYXNzTGlzdC5jb250YWlucygncHJvZHVjdC0tY2hlY2tlZCcpICYmICFwcm9kdWN0LmNsYXNzTGlzdC5jb250YWlucygncHJvZHVjdC0tc2VsZWN0ZWQnKSkge1xuICAgIHByb2R1Y3QuY2xhc3NMaXN0LmFkZCgncHJvZHVjdC0tc2VsZWN0ZWQnKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9qcy9hcHAuanMiXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n");

/***/ })
/******/ ]);