import bgImg from './assets/bg-image.jpg';
import './style.css'


const iconImg = document.querySelector('.current-icon');


async function getWeather() {
  try {
    const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=London&appid=2e3bcbca68217d01aa3b98dc494c3ca1');
    const weatherData = await response.json();
    const icon = weatherData.weather[0].icon;
    const sunRise = new Date(weatherData.sys.sunrise * 1000);
    const sunset = new Date(weatherData.sys.sunset * 1000);
    sunset.setMinutes(sunset.getMinutes() + sunset.getTimezoneOffset())
    const currentTime = new Date(weatherData.dt * 1000);
    currentTime.setMinutes(currentTime.getMinutes() + currentTime.getTimezoneOffset());
    sunRise.setMinutes(sunRise.getMinutes() + sunRise.getTimezoneOffset())
    console.log(weatherData);
    console.log(weatherData.weather[0].icon);
    console.log(sunRise);
    console.log(`Current time: ${currentTime.getHours()}:${currentTime.getMinutes()}`)
    console.log(`Sunset: ${sunset.getHours()}:${sunset.getMinutes() < 10 ? '0' + sunset.getMinutes() : sunset.getMinutes()}:${sunset.getSeconds()}`)
    console.log();
    console.log(sunRise.getTimezoneOffset());
    iconImg.src = `http://openweathermap.org/img/wn/${icon}@2x.png`
  } catch (error) {
    console.log(`Houston, we've got a problem: ${error}`);
  }
}

function formatDateTime(date) {

}

getWeather()