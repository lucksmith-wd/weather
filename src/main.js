import owfontEot from './assets/owfont-regular.eot';
import owfontOtf from './assets/owfont-regular.otf';
import owfontSvg from './assets/owfont-regular.svg';
import owfontTtf from './assets/owfont-regular.ttf';
import owfontWoff from './assets/owfont-regular.woff';
import bgImg from './assets/bg-image.jpg';
import owfontRegularCss from './owfont-regular.css';
import './style.css'

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
    const response = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=2e3bcbca68217d01aa3b98dc494c3ca1`, { mode: 'cors' })
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