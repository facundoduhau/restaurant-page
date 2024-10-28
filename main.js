/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_init__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/init */ \"./src/modules/init.js\");\n\n\n(0,_modules_init__WEBPACK_IMPORTED_MODULE_0__.init)();\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/modules/about.js":
/*!******************************!*\
  !*** ./src/modules/about.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   makeAbout: () => (/* binding */ makeAbout)\n/* harmony export */ });\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/modules/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/modules/menu.js\");\n\n\n\nfunction makeAbout() {\n  const wrapper = document.querySelector(\".wrapper\");\n  wrapper.innerHTML = \"\";\n\n  const header = document.createElement(\"div\");\n  header.className = \"header\";\n\n  const name = document.createElement(\"div\");\n  name.className = \"name\";\n  name.textContent = \"Espresso Oasis\";\n  header.appendChild(name);\n\n  const buttons = document.createElement(\"div\");\n  buttons.className = \"buttons\";\n\n  const buttonNames = [\"Home\", \"Menu\", \"About\"];\n  buttonNames.forEach((btnName) => {\n    const button = document.createElement(\"button\");\n    button.className = `button ${btnName.toLowerCase()}`;\n    button.textContent = btnName;\n    buttons.appendChild(button);\n  });\n  header.appendChild(buttons);\n\n  const main = document.createElement(\"main\");\n  main.className = \"main main-about\";\n\n  const mapWrapper = document.createElement(\"div\");\n  mapWrapper.classList = \"map-wrapper\";\n  main.appendChild(mapWrapper);\n\n  const contactMessage = document.createElement(\"div\");\n  contactMessage.innerHTML = \"You can contact us through this options:\";\n\n  const contactPhone = document.createElement(\"div\");\n  contactPhone.classList = \"phone-number\";\n  contactPhone.innerHTML = \"+12 3456-7891\";\n\n  const contactLink = document.createElement(\"a\");\n  contactLink.classList = \"contact-link\";\n  contactLink.target = \"_blank\";\n  contactLink.href = \"https://github.com/facundoduhau\";\n\n  const contactGithub = document.createElement(\"div\");\n  contactGithub.innerHTML = \"facundoduhau\";\n\n  const githubIcon = document.createElement(\"i\");\n  githubIcon.classList = \"fa-brands fa-github\";\n\n  const githubDiv = document.createElement(\"div\");\n  githubDiv.classList = \"github-div\";\n\n  const contactMap = document.createElement(\"iframe\");\n  contactMap.classList = \"contact-map\";\n  contactMap.src =\n    \"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3192.1679000341855!2d-76.3055041236948!3d36.862399764190094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89ba9995df079b17%3A0xd54a2aa54e769abc!2sEspressOasis!5e0!3m2!1sen!2sar!4v1730140751016!5m2!1sen!2sar\";\n  contactMap.width = \"1000px\";\n  contactMap.height = \"450px\";\n  contactMap.style.border = \"0\";\n  contactMap.allowFullscreen = true;\n  contactMap.referrerPolicy = \"no-referrer-when-downgrade\";\n\n  mapWrapper.appendChild(contactMessage);\n  mapWrapper.appendChild(contactPhone);\n  mapWrapper.appendChild(githubDiv);\n  githubDiv.appendChild(contactLink);\n  contactLink.appendChild(githubIcon);\n  contactLink.appendChild(contactGithub);\n  mapWrapper.appendChild(contactMap);\n\n  const footer = document.createElement(\"footer\");\n  footer.className = \"footer\";\n\n  const githubLink = document.createElement(\"a\");\n  githubLink.href = \"https://github.com/facundoduhau\";\n  githubLink.target = \"_blank\";\n\n  const copyright = document.createElement(\"p\");\n  copyright.className = \"copyright\";\n  copyright.textContent = \"Copyright © facundoduhau\";\n  githubLink.appendChild(copyright);\n  footer.appendChild(githubLink);\n\n  wrapper.appendChild(header);\n  wrapper.appendChild(main);\n  wrapper.appendChild(footer);\n\n  const homeButton = document.querySelector(\".home\");\n  homeButton.addEventListener(\"click\", _home__WEBPACK_IMPORTED_MODULE_0__.makeHome);\n\n  const menuButton = document.querySelector(\".menu\");\n  menuButton.addEventListener(\"click\", _menu__WEBPACK_IMPORTED_MODULE_1__.makeMenu);\n}\n\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/modules/about.js?");

/***/ }),

/***/ "./src/modules/home.js":
/*!*****************************!*\
  !*** ./src/modules/home.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   makeHome: () => (/* binding */ makeHome)\n/* harmony export */ });\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu */ \"./src/modules/menu.js\");\n/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about */ \"./src/modules/about.js\");\n\n\n\nfunction makeHome() {\n  const wrapper = document.querySelector(\".wrapper\");\n  wrapper.innerHTML = \"\";\n\n  const header = document.createElement(\"div\");\n  header.className = \"header\";\n\n  const name = document.createElement(\"div\");\n  name.className = \"name\";\n  name.textContent = \"Espresso Oasis\";\n  header.appendChild(name);\n\n  const buttons = document.createElement(\"div\");\n  buttons.className = \"buttons\";\n\n  const buttonNames = [\"Home\", \"Menu\", \"About\"];\n  buttonNames.forEach((btnName) => {\n    const button = document.createElement(\"button\");\n    button.className = `button ${btnName.toLowerCase()}`;\n    button.textContent = btnName;\n    buttons.appendChild(button);\n  });\n  header.appendChild(buttons);\n\n  const main = document.createElement(\"main\");\n  main.className = \"main\";\n\n  const message = document.createElement(\"div\");\n  message.className = \"message\";\n\n  const welcome = document.createElement(\"h1\");\n  welcome.className = \"welcome\";\n  welcome.textContent =\n    \"Welcome to Espresso Oasis, your safe place to get a coffee!\";\n  message.appendChild(welcome);\n\n  const text = document.createElement(\"p\");\n  text.className = \"text\";\n  text.textContent =\n    \"Choose an item from the menu, learn more about us, or just have a good time!\";\n  message.appendChild(text);\n  main.appendChild(message);\n\n  const footer = document.createElement(\"footer\");\n  footer.className = \"footer\";\n\n  const githubLink = document.createElement(\"a\");\n  githubLink.href = \"https://github.com/facundoduhau\";\n  githubLink.target = \"_blank\";\n\n  const copyright = document.createElement(\"p\");\n  copyright.className = \"copyright\";\n  copyright.textContent = \"Copyright © facundoduhau\";\n  githubLink.appendChild(copyright);\n  footer.appendChild(githubLink);\n\n  wrapper.appendChild(header);\n  wrapper.appendChild(main);\n  wrapper.appendChild(footer);\n\n  const menuButton = document.querySelector(\".menu\");\n  menuButton.addEventListener(\"click\", _menu__WEBPACK_IMPORTED_MODULE_0__.makeMenu);\n\n  const aboutButton = document.querySelector(\".about\");\n  aboutButton.addEventListener(\"click\", _about__WEBPACK_IMPORTED_MODULE_1__.makeAbout);\n}\n\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/modules/home.js?");

/***/ }),

/***/ "./src/modules/init.js":
/*!*****************************!*\
  !*** ./src/modules/init.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   init: () => (/* binding */ init)\n/* harmony export */ });\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/modules/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/modules/menu.js\");\n/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about */ \"./src/modules/about.js\");\n\n\n\n\nfunction init() {\n  (0,_home__WEBPACK_IMPORTED_MODULE_0__.makeHome)();\n}\n\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/modules/init.js?");

/***/ }),

/***/ "./src/modules/menu.js":
/*!*****************************!*\
  !*** ./src/modules/menu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   makeMenu: () => (/* binding */ makeMenu)\n/* harmony export */ });\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/modules/home.js\");\n/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about */ \"./src/modules/about.js\");\n\n\n\nfunction makeMenu() {\n  const wrapper = document.querySelector(\".wrapper\");\n  wrapper.innerHTML = \"\";\n\n  const header = document.createElement(\"div\");\n  header.className = \"header\";\n\n  const name = document.createElement(\"div\");\n  name.className = \"name\";\n  name.textContent = \"Espresso Oasis\";\n  header.appendChild(name);\n\n  const buttons = document.createElement(\"div\");\n  buttons.className = \"buttons\";\n\n  const buttonNames = [\"Home\", \"Menu\", \"About\"];\n  buttonNames.forEach((btnName) => {\n    const button = document.createElement(\"button\");\n    button.className = `button ${btnName.toLowerCase()}`;\n    button.textContent = btnName;\n    buttons.appendChild(button);\n  });\n  header.appendChild(buttons);\n\n  const main = document.createElement(\"main\");\n  main.className = \"main\";\n\n  const menu = document.createElement(\"div\");\n  menu.className = \"menu-wrapper\";\n  main.appendChild(menu);\n\n  const espressoMenu = document.createElement(\"div\");\n  espressoMenu.className = \"espressoMenu\";\n  menu.appendChild(espressoMenu);\n\n  const menuTitleWrapper = document.createElement(\"div\");\n  menuTitleWrapper.classList = \"menu-title-wrapper\";\n  espressoMenu.appendChild(menuTitleWrapper);\n\n  const menuContentWrapper = document.createElement(\"div\");\n  menuContentWrapper.classList = \"menu-content-wrapper\";\n  espressoMenu.appendChild(menuContentWrapper);\n\n  const menuTitle = document.createElement(\"div\");\n  menuTitle.classList = \"menu-title\";\n  menuTitle.innerHTML = \"Choose from our selection:\";\n  menuTitleWrapper.appendChild(menuTitle);\n\n  const element1 = document.createElement(\"div\");\n  element1.classList = \"item\";\n  menuContentWrapper.appendChild(element1);\n  const element2 = document.createElement(\"div\");\n  element2.classList = \"item\";\n  menuContentWrapper.appendChild(element2);\n  const element3 = document.createElement(\"div\");\n  element3.classList = \"item\";\n  menuContentWrapper.appendChild(element3);\n  const element4 = document.createElement(\"div\");\n  element4.classList = \"item\";\n  menuContentWrapper.appendChild(element4);\n  const element5 = document.createElement(\"div\");\n  element5.classList = \"item\";\n  menuContentWrapper.appendChild(element5);\n  const element6 = document.createElement(\"div\");\n  element6.classList = \"item\";\n  menuContentWrapper.appendChild(element6);\n  const element7 = document.createElement(\"div\");\n  element7.classList = \"item\";\n  menuContentWrapper.appendChild(element7);\n  const element8 = document.createElement(\"div\");\n  element8.classList = \"item\";\n  menuContentWrapper.appendChild(element8);\n\n  const coffee = document.createElement(\"img\");\n  coffee.src = \"./imgs/coffee.png\";\n  coffee.style.width = \"18vh\";\n  coffee.style.height = \"18vh\";\n  element1.appendChild(coffee);\n\n  const icedLatte = document.createElement(\"img\");\n  icedLatte.src = \"./imgs/iced-latte.png\";\n  icedLatte.style.width = \"15vh\";\n  icedLatte.style.height = \"15vh\";\n  element2.appendChild(icedLatte);\n\n  const submarine = document.createElement(\"img\");\n  submarine.src = \"./imgs/submarine.png\";\n  submarine.style.width = \"20vh\";\n  submarine.style.height = \"20vh\";\n  element3.appendChild(submarine);\n\n  const espresso = document.createElement(\"img\");\n  espresso.src = \"./imgs/espresso.png\";\n  espresso.style.width = \"15vh\";\n  espresso.style.height = \"15vh\";\n  element4.appendChild(espresso);\n\n  const bagel = document.createElement(\"img\");\n  bagel.src = \"./imgs/bagel.png\";\n  bagel.style.width = \"20vh\";\n  bagel.style.height = \"20vh\";\n  element5.appendChild(bagel);\n\n  const sandwich = document.createElement(\"img\");\n  sandwich.src = \"./imgs/sandwich.png\";\n  sandwich.style.width = \"15vh\";\n  sandwich.style.height = \"15vh\";\n  element6.appendChild(sandwich);\n\n  const medialuna = document.createElement(\"img\");\n  medialuna.src = \"./imgs/medialuna.png\";\n  medialuna.style.width = \"18vh\";\n  medialuna.style.height = \"18vh\";\n  element7.appendChild(medialuna);\n\n  const muffin = document.createElement(\"img\");\n  muffin.src = \"./imgs/muffin.png\";\n  muffin.style.width = \"18vh\";\n  muffin.style.height = \"18vh\";\n  element8.appendChild(muffin);\n\n  const footer = document.createElement(\"footer\");\n  footer.className = \"footer\";\n  const githubLink = document.createElement(\"a\");\n  githubLink.href = \"https://github.com/facundoduhau\";\n  githubLink.target = \"_blank\";\n\n  const copyright = document.createElement(\"p\");\n  copyright.className = \"copyright\";\n  copyright.textContent = \"Copyright © facundoduhau\";\n  githubLink.appendChild(copyright);\n  footer.appendChild(githubLink);\n\n  wrapper.appendChild(header);\n  wrapper.appendChild(main);\n  wrapper.appendChild(footer);\n\n  const homeButton = document.querySelector(\".home\");\n  homeButton.addEventListener(\"click\", _home__WEBPACK_IMPORTED_MODULE_0__.makeHome);\n\n  const aboutButton = document.querySelector(\".about\");\n  aboutButton.addEventListener(\"click\", _about__WEBPACK_IMPORTED_MODULE_1__.makeAbout);\n}\n\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/modules/menu.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;