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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ0FBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2ZvRDtBQUNBO0FBQ0E7QUFDQTtBQUNFO0FBQ1o7QUFDVTtBQUNoQzs7QUFFcEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKLGlEQUFpRCxNQUFNO0FBQ3ZEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG1GQUFtRixLQUFLLG9EQUFvRCxjQUFjO0FBQzFKO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0Esc0ZBQXNGLElBQUksT0FBTyxJQUFJO0FBQ3JHO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QjtBQUN4Qix3QkFBd0I7QUFDeEI7QUFDQTtBQUNBLGlCQUFpQixJQUFJLGlCQUFpQixNQUFNLEVBQUUsc0VBQXNFO0FBQ3BIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLGNBQWMsSUFBSSxxQkFBcUI7QUFDcEQ7QUFDQTtBQUNBLG1CQUFtQiw2QkFBNkI7QUFDaEQscUJBQXFCLDBDQUEwQztBQUMvRCx3QkFBd0Isa0NBQWtDO0FBQzFELDBCQUEwQiwrQ0FBK0M7QUFDekUsaUJBQWlCLHVCQUF1QjtBQUN4Qyx3QkFBd0IsNENBQTRDO0FBQ3BFLDBCQUEwQix5REFBeUQ7QUFDbkY7QUFDQSxpQkFBaUIsdUJBQXVCLEdBQUcsR0FBRztBQUM5QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyxLQUFLO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdELEtBQUs7QUFDckQsMkRBQTJELGlCQUFpQjtBQUM1RSx3Q0FBd0MsaUJBQWlCO0FBQ3pELG1EQUFtRCxLQUFLO0FBQ3hEO0FBQ0EsOENBQThDLEtBQUs7QUFDbkQ7QUFDQTtBQUNBLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLy4vc3JjL293Zm9udC1yZWd1bGFyLmNzcz9lMGU3Iiwid2VicGFjazovL3dlYXRoZXIvLi9zcmMvc3R5bGUuY3NzP2UzMjAiLCJ3ZWJwYWNrOi8vd2VhdGhlci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vd2VhdGhlci93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXIvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL3NyYy9tYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0IG93Zm9udEVvdCBmcm9tICcuL2Fzc2V0cy9vd2ZvbnQtcmVndWxhci5lb3QnO1xuaW1wb3J0IG93Zm9udE90ZiBmcm9tICcuL2Fzc2V0cy9vd2ZvbnQtcmVndWxhci5vdGYnO1xuaW1wb3J0IG93Zm9udFN2ZyBmcm9tICcuL2Fzc2V0cy9vd2ZvbnQtcmVndWxhci5zdmcnO1xuaW1wb3J0IG93Zm9udFR0ZiBmcm9tICcuL2Fzc2V0cy9vd2ZvbnQtcmVndWxhci50dGYnO1xuaW1wb3J0IG93Zm9udFdvZmYgZnJvbSAnLi9hc3NldHMvb3dmb250LXJlZ3VsYXIud29mZic7XG5pbXBvcnQgYmdJbWcgZnJvbSAnLi9hc3NldHMvYmctaW1hZ2UuanBnJztcbmltcG9ydCBvd2ZvbnRSZWd1bGFyQ3NzIGZyb20gJy4vb3dmb250LXJlZ3VsYXIuY3NzJztcbmltcG9ydCAnLi9zdHlsZS5jc3MnXG5cbmxldCBjdXJyZW50RGF0YTtcbndpbmRvdy5vbmxvYWQgPSBpbml0O1xuXG5jb25zdCBkZXNjcmlwdGlvbkUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGVzY3JpcHRpb24nKTtcbmNvbnN0IGNpdHlFID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNpdHknKTtcbmNvbnN0IGN1cnJlbnREYXRlRSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kYXRlJyk7XG5jb25zdCBjdXJyZW50VGltZUUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3VycmVudC10aW1lJyk7XG5jb25zdCB0ZW1wZXJhdHVyZUUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGVtcGVyYXR1cmUnKTtcbi8vIGNvbnN0IHdlYXRoZXJJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndlYXRoZXItaWNvbicpO1xuY29uc3Qgd2VhdGhlckljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3dmJylcbmNvbnN0IGZlZWxzTGlrZUUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGVtcGVyYXR1cmUtZGF0YScpO1xuY29uc3QgSHVtaWRpdHlFID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmh1bWlkaXR5LWRhdGEnKTtcbmNvbnN0IHdpbmRFID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndpbmQtZGF0YScpO1xuY29uc3Qgc3VucmlzZUUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3VucmlzZS1kYXRhJyk7XG5jb25zdCBzdW5zZXRFID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN1bnNldC1kYXRhJyk7XG5jb25zdCBlcnJvck1zZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lcnJvci1tc2cnKTtcbmNvbnN0IHVuaXRUb2dnbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudW5pdC10b2dnbGUnKTtcblxuY29uc3Qgc2VhcmNoRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2gtbG9jYXRpb24nKTtcbmNvbnN0IHNlYXJjaElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaC1pbnB1dCcpO1xuc2VhcmNoRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBhc3luYyAoZSkgPT4ge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIGN1cnJlbnREYXRhID0gYXdhaXQgZ2V0V2VhdGhlcihzZWFyY2hJbnB1dC52YWx1ZSk7XG4gIHVwZGF0ZURpc3BsYXkoKTtcbiAgc2VhcmNoSW5wdXQudmFsdWUgPSAnJztcbiAgZXJyb3JNc2cuY2xhc3NMaXN0LnJlbW92ZSgnZGlzcGxheScpO1xuICBjb25zb2xlLmxvZyhjdXJyZW50RGF0YSk7XG59KVxuXG5hc3luYyBmdW5jdGlvbiBpbml0KCkge1xuICBjb25zdCBtb2RlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3dlYXRoZXJBcHAubW9kZScpO1xuICB1bml0VG9nZ2xlLmNsYXNzTGlzdC5hZGQobW9kZSA/IG1vZGUudG9Mb3dlckNhc2UoKSA6ICdtZXRyaWMnKTtcbiAgdW5pdFRvZ2dsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3dlYXRoZXJBcHAubW9kZScpID09PSAnTWV0cmljJykge1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3dlYXRoZXJBcHAubW9kZScsICdJbXBlcmlhbCcpXG4gICAgfSBlbHNlIHtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd3ZWF0aGVyQXBwLm1vZGUnLCAnTWV0cmljJylcbiAgICB9XG4gICAgdW5pdFRvZ2dsZS5jbGFzc0xpc3QudG9nZ2xlKCdpbXBlcmlhbCcpO1xuICAgIHVuaXRUb2dnbGUuY2xhc3NMaXN0LnRvZ2dsZSgnbWV0cmljJyk7XG4gICAgdXBkYXRlRGlzcGxheSgpO1xuICB9KTtcbiAgY3VycmVudERhdGEgPSBhd2FpdCBnZXRXZWF0aGVyKCdCdWRhcGVzdCcpO1xuICB1cGRhdGVEaXNwbGF5KCk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGdldFdlYXRoZXIoY2l0eSkge1xuICB0cnkge1xuICAgIGNvbnN0IFtsYXQsIGxvbl0gPSBhd2FpdCBnZXRDb29yZGluYXRlcyhjaXR5KTtcbiAgICByZXR1cm4gcHJvY2Vzc1dlYXRoZXJEYXRhKGF3YWl0IGdldFdlYXRoZXJEYXRhKGxhdCwgbG9uKSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5sb2coYEhvdXN0b24sIHdlJ3ZlIGdvdCBhIHByb2JsZW06ICR7ZXJyb3J9YCk7XG4gIH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gZ2V0Q29vcmRpbmF0ZXMoY2l0eSkge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2dlby8xLjAvZGlyZWN0P3E9JHtjaXR5fSZsaW1pdD01JmFwcGlkPTJlM2JjYmNhNjgyMTdkMDFhYTNiOThkYzQ5NGMzY2ExYCwgeyBtb2RlOiAnY29ycycgfSlcbiAgICBjb25zdCBjb29yZGluYXRlcyA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICByZXR1cm4gW2Nvb3JkaW5hdGVzWzBdLmxhdCwgY29vcmRpbmF0ZXNbMF0ubG9uXTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBlcnJvck1zZy5jbGFzc0xpc3QuYWRkKCdkaXNwbGF5Jyk7XG4gIH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gZ2V0V2VhdGhlckRhdGEobGF0LCBsb24pIHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/bGF0PSR7bGF0fSZsb249JHtsb259JnVuaXRzPW1ldHJpYyZhcHBpZD0yZTNiY2JjYTY4MjE3ZDAxYWEzYjk4ZGM0OTRjM2NhMWApO1xuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICByZXR1cm4gZGF0YTtcbn1cblxuZnVuY3Rpb24gdGltZURhdGVUb1N0cmluZyh1dGNVbml4VGltZSwgb2Zmc2V0U2VjKSB7XG4gIGNvbnN0IGNhcmRpbmFsRW5kaW5ncyA9IHtcbiAgICAnMSc6ICc8c3VwPnN0PC9zdXA+JyxcbiAgICAnMjEnOiAnPHN1cD5zdDwvc3VwPicsXG4gICAgJzMxJzogJzxzdXA+c3Q8L3N1cD4nLFxuICAgICcyJzogJzxzdXA+bmQ8L3N1cD4nLFxuICAgICcyMic6ICc8c3VwPm5kPC9zdXA+JyxcbiAgICAnMyc6ICc8c3VwPnJkPC9zdXA+JyxcbiAgICAnMjMnOiAnPHN1cD5yZDwvc3VwPicsXG4gIH1cbiAgY29uc3QgdGltZU9wdGlvbnMgPSB7IHRpbWVab25lOiAnVVRDJywgaG91cjEyOiBmYWxzZSwgaG91cjogJ251bWVyaWMnLCBtaW51dGU6ICcyLWRpZ2l0JyB9O1xuICBjb25zdCBkYXRlT3B0aW9ucyA9IHsgdGltZVpvbmU6ICdVVEMnLCB3ZWVrZGF5OiAnc2hvcnQnLCB5ZWFyOiAnbnVtZXJpYycsIG1vbnRoOiAnc2hvcnQnLCBkYXk6ICdudW1lcmljJyB9O1xuICBjb25zdCB0ID0gbmV3IERhdGUoKHV0Y1VuaXhUaW1lICsgb2Zmc2V0U2VjKSAqIDEwMDApO1xuICBsZXQgZGF0ZVN0ciA9IG5ldyBJbnRsLkRhdGVUaW1lRm9ybWF0KCdlbi1HQicsIGRhdGVPcHRpb25zKS5mb3JtYXQodClcbiAgICAucmVwbGFjZSgvXFxkezEsMn0vLCAobWF0Y2gpID0+IGAke21hdGNofSR7KG1hdGNoIGluIGNhcmRpbmFsRW5kaW5ncykgPyBjYXJkaW5hbEVuZGluZ3NbbWF0Y2hdIDogJzxzdXA+dGg8L3N1cD4nfWApXG4gIHJldHVybiBbbmV3IEludGwuRGF0ZVRpbWVGb3JtYXQoJ2VuLUdCJywgdGltZU9wdGlvbnMpLmZvcm1hdCh0KSwgZGF0ZVN0cl07XG59XG5cbmZ1bmN0aW9uIGNvbnZlcnRDdG9GKGMpIHtcbiAgcmV0dXJuIGMgKiA5IC8gNSArIDMyXG59XG5cbmZ1bmN0aW9uIHByb2Nlc3NXZWF0aGVyRGF0YShyZXNwb25zZSkge1xuICBjb25zdCB0ZW1wTWV0cmljRmxvYXQgPSByZXNwb25zZS5tYWluLnRlbXA7XG4gIGNvbnN0IGZlZWxzTGlrZU1ldHJpY0Zsb2F0ID0gcmVzcG9uc2UubWFpbi5mZWVsc19saWtlXG4gIGNvbnN0IHdpbmRTcGVlZE1ldHJpY0Zsb2F0ID0gcmVzcG9uc2Uud2luZC5zcGVlZDtcbiAgY29uc3QgW2N1cnJlbnRUaW1lLCBjdXJyZW50RGF0ZV0gPSB0aW1lRGF0ZVRvU3RyaW5nKG5ldyBEYXRlKCkudmFsdWVPZigpIC8gMTAwMCwgcmVzcG9uc2UudGltZXpvbmUpXG4gIGNvbnN0IGRheU9yTmlnaHQgPSByZXNwb25zZS53ZWF0aGVyWzBdLmljb247XG4gIGNvbnN0IGRuID0gZGF5T3JOaWdodFtkYXlPck5pZ2h0Lmxlbmd0aCAtIDFdO1xuICBjb25zdCBkZXNjciA9IHJlc3BvbnNlLndlYXRoZXJbMF0uZGVzY3JpcHRpb247XG4gIHJldHVybiB7XG4gICAgY3VycmVudFRpbWUsIGN1cnJlbnREYXRlLFxuICAgIGRlc2NyaXB0aW9uOiBkZXNjci5yZXBsYWNlKGRlc2NyWzBdLCBkZXNjclswXS50b1VwcGVyQ2FzZSgpKSxcbiAgICBjaXR5OiBgJHtyZXNwb25zZS5uYW1lfSwgJHtyZXNwb25zZS5zeXMuY291bnRyeX1gLFxuICAgIHN1bnJpc2U6IHRpbWVEYXRlVG9TdHJpbmcocmVzcG9uc2Uuc3lzLnN1bnJpc2UsIHJlc3BvbnNlLnRpbWV6b25lKVswXSxcbiAgICBzdW5zZXQ6IHRpbWVEYXRlVG9TdHJpbmcocmVzcG9uc2Uuc3lzLnN1bnNldCwgcmVzcG9uc2UudGltZXpvbmUpWzBdLFxuICAgIHRlbXBNZXRyaWM6IGAke01hdGgucm91bmQodGVtcE1ldHJpY0Zsb2F0KX0gXFx1MDBCMENgLFxuICAgIHRlbXBJbXBlcmlhbDogYCR7TWF0aC5yb3VuZChjb252ZXJ0Q3RvRih0ZW1wTWV0cmljRmxvYXQpKX0gXFx1MDBCMEZgLFxuICAgIGZlZWxzTGlrZU1ldHJpYzogYCR7TWF0aC5yb3VuZChmZWVsc0xpa2VNZXRyaWNGbG9hdCl9IFxcdTAwQjBDYCxcbiAgICBmZWVsc0xpa2VJbXBlcmlhbDogYCR7TWF0aC5yb3VuZChjb252ZXJ0Q3RvRihmZWVsc0xpa2VNZXRyaWNGbG9hdCkpfSBcXHUwMEIwRmAsXG4gICAgaHVtaWRpdHk6IGAke3Jlc3BvbnNlLm1haW4uaHVtaWRpdHl9JWAsXG4gICAgd2luZFNwZWVkTWV0cmljOiBgJHtNYXRoLnJvdW5kKHdpbmRTcGVlZE1ldHJpY0Zsb2F0ICogMTApIC8gMTB9IGttL2hgLFxuICAgIHdpbmRTcGVlZEltcGVyaWFsOiBgJHtNYXRoLnJvdW5kKCh3aW5kU3BlZWRNZXRyaWNGbG9hdCAvIDEuNjA5MzQ0KSAqIDEwKSAvIDEwfSBtcGhgLFxuICAgIC8vIGljb246IHJlc3BvbnNlLndlYXRoZXJbMF0uaWNvbixcbiAgICBpY29uOiBgb3dmLSR7cmVzcG9uc2Uud2VhdGhlclswXS5pZH0tJHtkbn1gLFxuICB9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZURpc3BsYXkoKSB7XG4gIGxldCBtb2RlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3dlYXRoZXJBcHAubW9kZScpO1xuICBpZiAoIW1vZGUpIHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnd2VhdGhlckFwcC5tb2RlJywgJ01ldHJpYycpO1xuICAgIG1vZGUgPSAnTWV0cmljJztcbiAgfVxuICBjb25zb2xlLmxvZyhgbW9kZSBpcyBjdXJyZW50bHkgJHttb2RlfWApO1xuICBkZXNjcmlwdGlvbkUudGV4dENvbnRlbnQgPSBjdXJyZW50RGF0YS5kZXNjcmlwdGlvbjtcbiAgY2l0eUUudGV4dENvbnRlbnQgPSBjdXJyZW50RGF0YS5jaXR5O1xuICBjdXJyZW50RGF0ZUUuaW5uZXJIVE1MID0gY3VycmVudERhdGEuY3VycmVudERhdGU7XG4gIGN1cnJlbnRUaW1lRS50ZXh0Q29udGVudCA9IGN1cnJlbnREYXRhLmN1cnJlbnRUaW1lO1xuICB0ZW1wZXJhdHVyZUUudGV4dENvbnRlbnQgPSBjdXJyZW50RGF0YVtgdGVtcCR7bW9kZX1gXTtcbiAgLy8gd2VhdGhlckljb24uc3JjID0gYGh0dHA6Ly9vcGVud2VhdGhlcm1hcC5vcmcvaW1nL3duLyR7Y3VycmVudERhdGEuaWNvbn1ANHgucG5nYDtcbiAgd2VhdGhlckljb24uY2xhc3NOYW1lID0gYG93ZiBvd2YtNXggJHtjdXJyZW50RGF0YS5pY29ufWBcbiAgZmVlbHNMaWtlRS50ZXh0Q29udGVudCA9IGN1cnJlbnREYXRhW2BmZWVsc0xpa2Uke21vZGV9YF07XG4gIEh1bWlkaXR5RS50ZXh0Q29udGVudCA9IGN1cnJlbnREYXRhLmh1bWlkaXR5O1xuICB3aW5kRS50ZXh0Q29udGVudCA9IGN1cnJlbnREYXRhW2B3aW5kU3BlZWQke21vZGV9YF07XG4gIHN1bnJpc2VFLnRleHRDb250ZW50ID0gY3VycmVudERhdGEuc3VucmlzZTtcbiAgc3Vuc2V0RS50ZXh0Q29udGVudCA9IGN1cnJlbnREYXRhLnN1bnNldDtcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=