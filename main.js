/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/owfont-regular.css":
/*!********************************!*\
  !*** ./src/owfont-regular.css ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/assets/bg-image.jpg":
/*!*********************************!*\
  !*** ./src/assets/bg-image.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/bg-image.jpg";

/***/ }),

/***/ "./src/assets/owfont-regular.eot":
/*!***************************************!*\
  !*** ./src/assets/owfont-regular.eot ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/owfont-regular.eot";

/***/ }),

/***/ "./src/assets/owfont-regular.otf":
/*!***************************************!*\
  !*** ./src/assets/owfont-regular.otf ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/owfont-regular.otf";

/***/ }),

/***/ "./src/assets/owfont-regular.svg":
/*!***************************************!*\
  !*** ./src/assets/owfont-regular.svg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/owfont-regular.svg";

/***/ }),

/***/ "./src/assets/owfont-regular.ttf":
/*!***************************************!*\
  !*** ./src/assets/owfont-regular.ttf ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/owfont-regular.ttf";

/***/ }),

/***/ "./src/assets/owfont-regular.woff":
/*!****************************************!*\
  !*** ./src/assets/owfont-regular.woff ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/owfont-regular.woff";

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_owfont_regular_eot__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/owfont-regular.eot */ "./src/assets/owfont-regular.eot");
/* harmony import */ var _assets_owfont_regular_otf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/owfont-regular.otf */ "./src/assets/owfont-regular.otf");
/* harmony import */ var _assets_owfont_regular_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/owfont-regular.svg */ "./src/assets/owfont-regular.svg");
/* harmony import */ var _assets_owfont_regular_ttf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/owfont-regular.ttf */ "./src/assets/owfont-regular.ttf");
/* harmony import */ var _assets_owfont_regular_woff__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/owfont-regular.woff */ "./src/assets/owfont-regular.woff");
/* harmony import */ var _assets_bg_image_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/bg-image.jpg */ "./src/assets/bg-image.jpg");
/* harmony import */ var _owfont_regular_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./owfont-regular.css */ "./src/owfont-regular.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./style.css */ "./src/style.css");









let currentData;
window.onload = init;

const descriptionE = document.querySelector('.description');
const cityE = document.querySelector('.city');
const currentDateE = document.querySelector('.date');
const currentTimeE = document.querySelector('.current-time');
const temperatureE = document.querySelector('.temperature');
// const weatherIcon = document.querySelector('.weather-icon');
const weatherIcon = document.querySelector('.owf')
const feelsLikeE = document.querySelector('.temperature-data');
const HumidityE = document.querySelector('.humidity-data');
const windE = document.querySelector('.wind-data');
const sunriseE = document.querySelector('.sunrise-data');
const sunsetE = document.querySelector('.sunset-data');
const errorMsg = document.querySelector('.error-msg');
const unitToggle = document.querySelector('.unit-toggle');

const searchForm = document.querySelector('.search-location');
const searchInput = document.querySelector('.search-input');
searchForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  currentData = await getWeather(searchInput.value);
  updateDisplay();
  searchInput.value = '';
  errorMsg.classList.remove('display');
  console.log(currentData);
})

async function init() {
  const mode = localStorage.getItem('weatherApp.mode');
  unitToggle.classList.add(mode ? mode.toLowerCase() : 'metric');
  unitToggle.addEventListener('click', () => {
    if (localStorage.getItem('weatherApp.mode') === 'Metric') {
      localStorage.setItem('weatherApp.mode', 'Imperial')
    } else {
      localStorage.setItem('weatherApp.mode', 'Metric')
    }
    unitToggle.classList.toggle('imperial');
    unitToggle.classList.toggle('metric');
    updateDisplay();
  });
  currentData = await getWeather('Budapest');
  updateDisplay();
}

async function getWeather(city) {
  try {
    const [lat, lon] = await getCoordinates(city);
    return processWeatherData(await getWeatherData(lat, lon));
  } catch (error) {
    console.log(`Houston, we've got a problem: ${error}`);
  }
}

async function getCoordinates(city) {
  try {
    const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=2e3bcbca68217d01aa3b98dc494c3ca1`, { mode: 'cors' })
    const coordinates = await response.json();
    return [coordinates[0].lat, coordinates[0].lon];
  } catch (error) {
    errorMsg.classList.add('display');
  }
}

async function getWeatherData(lat, lon) {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=2e3bcbca68217d01aa3b98dc494c3ca1`);
  const data = await response.json();
  return data;
}

function timeDateToString(utcUnixTime, offsetSec) {
  const cardinalEndings = {
    '1': '<sup>st</sup>',
    '21': '<sup>st</sup>',
    '31': '<sup>st</sup>',
    '2': '<sup>nd</sup>',
    '22': '<sup>nd</sup>',
    '3': '<sup>rd</sup>',
    '23': '<sup>rd</sup>',
  }
  const timeOptions = { timeZone: 'UTC', hour12: false, hour: 'numeric', minute: '2-digit' };
  const dateOptions = { timeZone: 'UTC', weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
  const t = new Date((utcUnixTime + offsetSec) * 1000);
  let dateStr = new Intl.DateTimeFormat('en-GB', dateOptions).format(t)
    .replace(/\d{1,2}/, (match) => `${match}${(match in cardinalEndings) ? cardinalEndings[match] : '<sup>th</sup>'}`)
  return [new Intl.DateTimeFormat('en-GB', timeOptions).format(t), dateStr];
}

function convertCtoF(c) {
  return c * 9 / 5 + 32
}

function processWeatherData(response) {
  const tempMetricFloat = response.main.temp;
  const feelsLikeMetricFloat = response.main.feels_like
  const windSpeedMetricFloat = response.wind.speed;
  const [currentTime, currentDate] = timeDateToString(new Date().valueOf() / 1000, response.timezone)
  const dayOrNight = response.weather[0].icon;
  const dn = dayOrNight[dayOrNight.length - 1];
  const descr = response.weather[0].description;
  return {
    currentTime, currentDate,
    description: descr.replace(descr[0], descr[0].toUpperCase()),
    city: `${response.name}, ${response.sys.country}`,
    sunrise: timeDateToString(response.sys.sunrise, response.timezone)[0],
    sunset: timeDateToString(response.sys.sunset, response.timezone)[0],
    tempMetric: `${Math.round(tempMetricFloat)} \u00B0C`,
    tempImperial: `${Math.round(convertCtoF(tempMetricFloat))} \u00B0F`,
    feelsLikeMetric: `${Math.round(feelsLikeMetricFloat)} \u00B0C`,
    feelsLikeImperial: `${Math.round(convertCtoF(feelsLikeMetricFloat))} \u00B0F`,
    humidity: `${response.main.humidity}%`,
    windSpeedMetric: `${Math.round(windSpeedMetricFloat * 10) / 10} km/h`,
    windSpeedImperial: `${Math.round((windSpeedMetricFloat / 1.609344) * 10) / 10} mph`,
    // icon: response.weather[0].icon,
    icon: `owf-${response.weather[0].id}-${dn}`,
  }
}

function updateDisplay() {
  let mode = localStorage.getItem('weatherApp.mode');
  if (!mode) {
    localStorage.setItem('weatherApp.mode', 'Metric');
    mode = 'Metric';
  }
  console.log(`mode is currently ${mode}`);
  descriptionE.textContent = currentData.description;
  cityE.textContent = currentData.city;
  currentDateE.innerHTML = currentData.currentDate;
  currentTimeE.textContent = currentData.currentTime;
  temperatureE.textContent = currentData[`temp${mode}`];
  // weatherIcon.src = `http://openweathermap.org/img/wn/${currentData.icon}@4x.png`;
  weatherIcon.className = `owf owf-5x ${currentData.icon}`
  feelsLikeE.textContent = currentData[`feelsLike${mode}`];
  HumidityE.textContent = currentData.humidity;
  windE.textContent = currentData[`windSpeed${mode}`];
  sunriseE.textContent = currentData.sunrise;
  sunsetE.textContent = currentData.sunset;
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ0FBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2ZvRDtBQUNBO0FBQ0E7QUFDQTtBQUNFO0FBQ1o7QUFDVTtBQUNoQzs7QUFFcEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKLGlEQUFpRCxNQUFNO0FBQ3ZEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG1GQUFtRixLQUFLLG9EQUFvRCxjQUFjO0FBQzFKO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0Esc0ZBQXNGLElBQUksT0FBTyxJQUFJO0FBQ3JHO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QjtBQUN4Qix3QkFBd0I7QUFDeEI7QUFDQTtBQUNBLGlCQUFpQixJQUFJLGlCQUFpQixNQUFNLEVBQUUsc0VBQXNFO0FBQ3BIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLGNBQWMsSUFBSSxxQkFBcUI7QUFDcEQ7QUFDQTtBQUNBLG1CQUFtQiw2QkFBNkI7QUFDaEQscUJBQXFCLDBDQUEwQztBQUMvRCx3QkFBd0Isa0NBQWtDO0FBQzFELDBCQUEwQiwrQ0FBK0M7QUFDekUsaUJBQWlCLHVCQUF1QjtBQUN4Qyx3QkFBd0IsNENBQTRDO0FBQ3BFLDBCQUEwQix5REFBeUQ7QUFDbkY7QUFDQSxpQkFBaUIsdUJBQXVCLEdBQUcsR0FBRztBQUM5QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyxLQUFLO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdELEtBQUs7QUFDckQsMkRBQTJELGlCQUFpQjtBQUM1RSx3Q0FBd0MsaUJBQWlCO0FBQ3pELG1EQUFtRCxLQUFLO0FBQ3hEO0FBQ0EsOENBQThDLEtBQUs7QUFDbkQ7QUFDQTtBQUNBLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLy4vc3JjL293Zm9udC1yZWd1bGFyLmNzcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly93ZWF0aGVyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXIvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly93ZWF0aGVyL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlci93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vc3JjL21haW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgb3dmb250RW90IGZyb20gJy4vYXNzZXRzL293Zm9udC1yZWd1bGFyLmVvdCc7XG5pbXBvcnQgb3dmb250T3RmIGZyb20gJy4vYXNzZXRzL293Zm9udC1yZWd1bGFyLm90Zic7XG5pbXBvcnQgb3dmb250U3ZnIGZyb20gJy4vYXNzZXRzL293Zm9udC1yZWd1bGFyLnN2Zyc7XG5pbXBvcnQgb3dmb250VHRmIGZyb20gJy4vYXNzZXRzL293Zm9udC1yZWd1bGFyLnR0Zic7XG5pbXBvcnQgb3dmb250V29mZiBmcm9tICcuL2Fzc2V0cy9vd2ZvbnQtcmVndWxhci53b2ZmJztcbmltcG9ydCBiZ0ltZyBmcm9tICcuL2Fzc2V0cy9iZy1pbWFnZS5qcGcnO1xuaW1wb3J0IG93Zm9udFJlZ3VsYXJDc3MgZnJvbSAnLi9vd2ZvbnQtcmVndWxhci5jc3MnO1xuaW1wb3J0ICcuL3N0eWxlLmNzcydcblxubGV0IGN1cnJlbnREYXRhO1xud2luZG93Lm9ubG9hZCA9IGluaXQ7XG5cbmNvbnN0IGRlc2NyaXB0aW9uRSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kZXNjcmlwdGlvbicpO1xuY29uc3QgY2l0eUUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2l0eScpO1xuY29uc3QgY3VycmVudERhdGVFID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRhdGUnKTtcbmNvbnN0IGN1cnJlbnRUaW1lRSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jdXJyZW50LXRpbWUnKTtcbmNvbnN0IHRlbXBlcmF0dXJlRSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50ZW1wZXJhdHVyZScpO1xuLy8gY29uc3Qgd2VhdGhlckljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2VhdGhlci1pY29uJyk7XG5jb25zdCB3ZWF0aGVySWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vd2YnKVxuY29uc3QgZmVlbHNMaWtlRSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50ZW1wZXJhdHVyZS1kYXRhJyk7XG5jb25zdCBIdW1pZGl0eUUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaHVtaWRpdHktZGF0YScpO1xuY29uc3Qgd2luZEUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2luZC1kYXRhJyk7XG5jb25zdCBzdW5yaXNlRSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdW5yaXNlLWRhdGEnKTtcbmNvbnN0IHN1bnNldEUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3Vuc2V0LWRhdGEnKTtcbmNvbnN0IGVycm9yTXNnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVycm9yLW1zZycpO1xuY29uc3QgdW5pdFRvZ2dsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy51bml0LXRvZ2dsZScpO1xuXG5jb25zdCBzZWFyY2hGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaC1sb2NhdGlvbicpO1xuY29uc3Qgc2VhcmNoSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoLWlucHV0Jyk7XG5zZWFyY2hGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGFzeW5jIChlKSA9PiB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgY3VycmVudERhdGEgPSBhd2FpdCBnZXRXZWF0aGVyKHNlYXJjaElucHV0LnZhbHVlKTtcbiAgdXBkYXRlRGlzcGxheSgpO1xuICBzZWFyY2hJbnB1dC52YWx1ZSA9ICcnO1xuICBlcnJvck1zZy5jbGFzc0xpc3QucmVtb3ZlKCdkaXNwbGF5Jyk7XG4gIGNvbnNvbGUubG9nKGN1cnJlbnREYXRhKTtcbn0pXG5cbmFzeW5jIGZ1bmN0aW9uIGluaXQoKSB7XG4gIGNvbnN0IG1vZGUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnd2VhdGhlckFwcC5tb2RlJyk7XG4gIHVuaXRUb2dnbGUuY2xhc3NMaXN0LmFkZChtb2RlID8gbW9kZS50b0xvd2VyQ2FzZSgpIDogJ21ldHJpYycpO1xuICB1bml0VG9nZ2xlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnd2VhdGhlckFwcC5tb2RlJykgPT09ICdNZXRyaWMnKSB7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnd2VhdGhlckFwcC5tb2RlJywgJ0ltcGVyaWFsJylcbiAgICB9IGVsc2Uge1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3dlYXRoZXJBcHAubW9kZScsICdNZXRyaWMnKVxuICAgIH1cbiAgICB1bml0VG9nZ2xlLmNsYXNzTGlzdC50b2dnbGUoJ2ltcGVyaWFsJyk7XG4gICAgdW5pdFRvZ2dsZS5jbGFzc0xpc3QudG9nZ2xlKCdtZXRyaWMnKTtcbiAgICB1cGRhdGVEaXNwbGF5KCk7XG4gIH0pO1xuICBjdXJyZW50RGF0YSA9IGF3YWl0IGdldFdlYXRoZXIoJ0J1ZGFwZXN0Jyk7XG4gIHVwZGF0ZURpc3BsYXkoKTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gZ2V0V2VhdGhlcihjaXR5KSB7XG4gIHRyeSB7XG4gICAgY29uc3QgW2xhdCwgbG9uXSA9IGF3YWl0IGdldENvb3JkaW5hdGVzKGNpdHkpO1xuICAgIHJldHVybiBwcm9jZXNzV2VhdGhlckRhdGEoYXdhaXQgZ2V0V2VhdGhlckRhdGEobGF0LCBsb24pKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmxvZyhgSG91c3Rvbiwgd2UndmUgZ290IGEgcHJvYmxlbTogJHtlcnJvcn1gKTtcbiAgfVxufVxuXG5hc3luYyBmdW5jdGlvbiBnZXRDb29yZGluYXRlcyhjaXR5KSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cDovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZ2VvLzEuMC9kaXJlY3Q/cT0ke2NpdHl9JmxpbWl0PTUmYXBwaWQ9MmUzYmNiY2E2ODIxN2QwMWFhM2I5OGRjNDk0YzNjYTFgLCB7IG1vZGU6ICdjb3JzJyB9KVxuICAgIGNvbnN0IGNvb3JkaW5hdGVzID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIHJldHVybiBbY29vcmRpbmF0ZXNbMF0ubGF0LCBjb29yZGluYXRlc1swXS5sb25dO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGVycm9yTXNnLmNsYXNzTGlzdC5hZGQoJ2Rpc3BsYXknKTtcbiAgfVxufVxuXG5hc3luYyBmdW5jdGlvbiBnZXRXZWF0aGVyRGF0YShsYXQsIGxvbikge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9sYXQ9JHtsYXR9Jmxvbj0ke2xvbn0mdW5pdHM9bWV0cmljJmFwcGlkPTJlM2JjYmNhNjgyMTdkMDFhYTNiOThkYzQ5NGMzY2ExYCk7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gIHJldHVybiBkYXRhO1xufVxuXG5mdW5jdGlvbiB0aW1lRGF0ZVRvU3RyaW5nKHV0Y1VuaXhUaW1lLCBvZmZzZXRTZWMpIHtcbiAgY29uc3QgY2FyZGluYWxFbmRpbmdzID0ge1xuICAgICcxJzogJzxzdXA+c3Q8L3N1cD4nLFxuICAgICcyMSc6ICc8c3VwPnN0PC9zdXA+JyxcbiAgICAnMzEnOiAnPHN1cD5zdDwvc3VwPicsXG4gICAgJzInOiAnPHN1cD5uZDwvc3VwPicsXG4gICAgJzIyJzogJzxzdXA+bmQ8L3N1cD4nLFxuICAgICczJzogJzxzdXA+cmQ8L3N1cD4nLFxuICAgICcyMyc6ICc8c3VwPnJkPC9zdXA+JyxcbiAgfVxuICBjb25zdCB0aW1lT3B0aW9ucyA9IHsgdGltZVpvbmU6ICdVVEMnLCBob3VyMTI6IGZhbHNlLCBob3VyOiAnbnVtZXJpYycsIG1pbnV0ZTogJzItZGlnaXQnIH07XG4gIGNvbnN0IGRhdGVPcHRpb25zID0geyB0aW1lWm9uZTogJ1VUQycsIHdlZWtkYXk6ICdzaG9ydCcsIHllYXI6ICdudW1lcmljJywgbW9udGg6ICdzaG9ydCcsIGRheTogJ251bWVyaWMnIH07XG4gIGNvbnN0IHQgPSBuZXcgRGF0ZSgodXRjVW5peFRpbWUgKyBvZmZzZXRTZWMpICogMTAwMCk7XG4gIGxldCBkYXRlU3RyID0gbmV3IEludGwuRGF0ZVRpbWVGb3JtYXQoJ2VuLUdCJywgZGF0ZU9wdGlvbnMpLmZvcm1hdCh0KVxuICAgIC5yZXBsYWNlKC9cXGR7MSwyfS8sIChtYXRjaCkgPT4gYCR7bWF0Y2h9JHsobWF0Y2ggaW4gY2FyZGluYWxFbmRpbmdzKSA/IGNhcmRpbmFsRW5kaW5nc1ttYXRjaF0gOiAnPHN1cD50aDwvc3VwPid9YClcbiAgcmV0dXJuIFtuZXcgSW50bC5EYXRlVGltZUZvcm1hdCgnZW4tR0InLCB0aW1lT3B0aW9ucykuZm9ybWF0KHQpLCBkYXRlU3RyXTtcbn1cblxuZnVuY3Rpb24gY29udmVydEN0b0YoYykge1xuICByZXR1cm4gYyAqIDkgLyA1ICsgMzJcbn1cblxuZnVuY3Rpb24gcHJvY2Vzc1dlYXRoZXJEYXRhKHJlc3BvbnNlKSB7XG4gIGNvbnN0IHRlbXBNZXRyaWNGbG9hdCA9IHJlc3BvbnNlLm1haW4udGVtcDtcbiAgY29uc3QgZmVlbHNMaWtlTWV0cmljRmxvYXQgPSByZXNwb25zZS5tYWluLmZlZWxzX2xpa2VcbiAgY29uc3Qgd2luZFNwZWVkTWV0cmljRmxvYXQgPSByZXNwb25zZS53aW5kLnNwZWVkO1xuICBjb25zdCBbY3VycmVudFRpbWUsIGN1cnJlbnREYXRlXSA9IHRpbWVEYXRlVG9TdHJpbmcobmV3IERhdGUoKS52YWx1ZU9mKCkgLyAxMDAwLCByZXNwb25zZS50aW1lem9uZSlcbiAgY29uc3QgZGF5T3JOaWdodCA9IHJlc3BvbnNlLndlYXRoZXJbMF0uaWNvbjtcbiAgY29uc3QgZG4gPSBkYXlPck5pZ2h0W2RheU9yTmlnaHQubGVuZ3RoIC0gMV07XG4gIGNvbnN0IGRlc2NyID0gcmVzcG9uc2Uud2VhdGhlclswXS5kZXNjcmlwdGlvbjtcbiAgcmV0dXJuIHtcbiAgICBjdXJyZW50VGltZSwgY3VycmVudERhdGUsXG4gICAgZGVzY3JpcHRpb246IGRlc2NyLnJlcGxhY2UoZGVzY3JbMF0sIGRlc2NyWzBdLnRvVXBwZXJDYXNlKCkpLFxuICAgIGNpdHk6IGAke3Jlc3BvbnNlLm5hbWV9LCAke3Jlc3BvbnNlLnN5cy5jb3VudHJ5fWAsXG4gICAgc3VucmlzZTogdGltZURhdGVUb1N0cmluZyhyZXNwb25zZS5zeXMuc3VucmlzZSwgcmVzcG9uc2UudGltZXpvbmUpWzBdLFxuICAgIHN1bnNldDogdGltZURhdGVUb1N0cmluZyhyZXNwb25zZS5zeXMuc3Vuc2V0LCByZXNwb25zZS50aW1lem9uZSlbMF0sXG4gICAgdGVtcE1ldHJpYzogYCR7TWF0aC5yb3VuZCh0ZW1wTWV0cmljRmxvYXQpfSBcXHUwMEIwQ2AsXG4gICAgdGVtcEltcGVyaWFsOiBgJHtNYXRoLnJvdW5kKGNvbnZlcnRDdG9GKHRlbXBNZXRyaWNGbG9hdCkpfSBcXHUwMEIwRmAsXG4gICAgZmVlbHNMaWtlTWV0cmljOiBgJHtNYXRoLnJvdW5kKGZlZWxzTGlrZU1ldHJpY0Zsb2F0KX0gXFx1MDBCMENgLFxuICAgIGZlZWxzTGlrZUltcGVyaWFsOiBgJHtNYXRoLnJvdW5kKGNvbnZlcnRDdG9GKGZlZWxzTGlrZU1ldHJpY0Zsb2F0KSl9IFxcdTAwQjBGYCxcbiAgICBodW1pZGl0eTogYCR7cmVzcG9uc2UubWFpbi5odW1pZGl0eX0lYCxcbiAgICB3aW5kU3BlZWRNZXRyaWM6IGAke01hdGgucm91bmQod2luZFNwZWVkTWV0cmljRmxvYXQgKiAxMCkgLyAxMH0ga20vaGAsXG4gICAgd2luZFNwZWVkSW1wZXJpYWw6IGAke01hdGgucm91bmQoKHdpbmRTcGVlZE1ldHJpY0Zsb2F0IC8gMS42MDkzNDQpICogMTApIC8gMTB9IG1waGAsXG4gICAgLy8gaWNvbjogcmVzcG9uc2Uud2VhdGhlclswXS5pY29uLFxuICAgIGljb246IGBvd2YtJHtyZXNwb25zZS53ZWF0aGVyWzBdLmlkfS0ke2RufWAsXG4gIH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlRGlzcGxheSgpIHtcbiAgbGV0IG1vZGUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnd2VhdGhlckFwcC5tb2RlJyk7XG4gIGlmICghbW9kZSkge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd3ZWF0aGVyQXBwLm1vZGUnLCAnTWV0cmljJyk7XG4gICAgbW9kZSA9ICdNZXRyaWMnO1xuICB9XG4gIGNvbnNvbGUubG9nKGBtb2RlIGlzIGN1cnJlbnRseSAke21vZGV9YCk7XG4gIGRlc2NyaXB0aW9uRS50ZXh0Q29udGVudCA9IGN1cnJlbnREYXRhLmRlc2NyaXB0aW9uO1xuICBjaXR5RS50ZXh0Q29udGVudCA9IGN1cnJlbnREYXRhLmNpdHk7XG4gIGN1cnJlbnREYXRlRS5pbm5lckhUTUwgPSBjdXJyZW50RGF0YS5jdXJyZW50RGF0ZTtcbiAgY3VycmVudFRpbWVFLnRleHRDb250ZW50ID0gY3VycmVudERhdGEuY3VycmVudFRpbWU7XG4gIHRlbXBlcmF0dXJlRS50ZXh0Q29udGVudCA9IGN1cnJlbnREYXRhW2B0ZW1wJHttb2RlfWBdO1xuICAvLyB3ZWF0aGVySWNvbi5zcmMgPSBgaHR0cDovL29wZW53ZWF0aGVybWFwLm9yZy9pbWcvd24vJHtjdXJyZW50RGF0YS5pY29ufUA0eC5wbmdgO1xuICB3ZWF0aGVySWNvbi5jbGFzc05hbWUgPSBgb3dmIG93Zi01eCAke2N1cnJlbnREYXRhLmljb259YFxuICBmZWVsc0xpa2VFLnRleHRDb250ZW50ID0gY3VycmVudERhdGFbYGZlZWxzTGlrZSR7bW9kZX1gXTtcbiAgSHVtaWRpdHlFLnRleHRDb250ZW50ID0gY3VycmVudERhdGEuaHVtaWRpdHk7XG4gIHdpbmRFLnRleHRDb250ZW50ID0gY3VycmVudERhdGFbYHdpbmRTcGVlZCR7bW9kZX1gXTtcbiAgc3VucmlzZUUudGV4dENvbnRlbnQgPSBjdXJyZW50RGF0YS5zdW5yaXNlO1xuICBzdW5zZXRFLnRleHRDb250ZW50ID0gY3VycmVudERhdGEuc3Vuc2V0O1xufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==