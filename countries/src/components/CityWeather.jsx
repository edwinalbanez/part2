import { useEffect } from "react"
import weatherService from "../services/weather"
import { useState } from "react"

const CityWeather = ({city}) => {

  const [weather, setWeather] = useState(null)

  const imgStyles = {
    width: 100
  }

  useEffect(() => {
    weatherService
      .get(city)
      .then(data => setWeather(data));
      
  }, [city])

  if (!weather) {
    return (
      <>
        <h2> Weather in {city} </h2>
        <p>No information available</p>
      </>
    );
  }

  return (
    <div>
      <h2> Weather in {city} </h2>
      
      <p>Temperature: {weather.temp} Celsius </p>
      <img
        src={` https://openweathermap.org/img/wn/${weather.icon}.png`}
        alt={`${city} weather icon`}
        style={imgStyles}
      />
      <p> Wind: {weather.windSpeed} m/s </p>
    </div>
  );
}

export default CityWeather