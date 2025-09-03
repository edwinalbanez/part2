import axios from "axios";

const api_key = import.meta.env.VITE_WEATHER_KEY;
const api = `https://api.openweathermap.org/data/2.5/weather?q=`;

const get = (city) => 
  axios
  .get(`${api}${city}&appid=${api_key}`)
  .then(({ data }) =>
    ({ 
      temp: data.main.temp, 
      windSpeed: data.wind.speed, 
      icon: data.weather[0].icon 
    })
  )
  

export default { get }