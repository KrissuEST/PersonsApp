import React, { useContext } from "react"   //useContext - Hooks are a new addition in React 16.8.
import Context from "./Context"

const WeatherData = () => {

    const {weather, weather2, weather3, city} = useContext(Context)
    const {temp, humidity, pressure} = weather
    const {speed} = weather2
    const {country} = weather3
    // console.log(props);

    return (
        <div className="weather-data">
            <p className="weather__tagline">Weather information for <span className="weather-data__city">{city}
            </span></p>
            <div className="weather-data__box">
                <span className="weather-data__property">
                    <p className="weather-data__title">Temperature</p>
                    <p className="weather-data__value">{temp}</p>
                </span>
                <span className="weather-data__property">
                    <p className="weather-data__title">Humidity</p>
                    <p className="weather-data__value">{humidity}</p>
                </span>
                <span className="weather-data__property">
                    <p className="weather-data__title">Pressure</p>
                    <p className="weather-data__value">{pressure}</p>
                </span>
                <span className="weather-data__property">
                    <p className="weather-data__title">Wind speed</p>
                    <p className="weather-data__value">{speed}</p>
                </span>
                <span className="weather-data__property">
                    <p className="weather-data__title">Country</p>
                    <p className="weather-data__value">{country}</p>
                </span>
            </div>
        </div>
    )
}
 
export default WeatherData