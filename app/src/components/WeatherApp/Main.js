import React, { useState } from "react"
import axios from "axios"   //first do: npm install axios

import Header from "./Layout/Header"
import Tagline from "./Tagline"
import Content from "./Layout/Content"
import WeatherSearch from "./WeatherSearch"
import WeatherData from "./WeatherData"
import Context from "./Context"
import Error from "./Error"
import DateTime from "./DateTime"
import Footer from "./Layout/Footer"
// import "../../styles/styles.scss"   //new for WeatherApp

//functional components - React way of doing things
//Big square is main component
const Main = () => {
    const [weather,setWeather] = useState()
    const [weather2,setWeather2] = useState()
    const [weather3,setWeather3] = useState()
    const [city, setCity] = useState()
    const [error, setError] = useState()
    
    const api_call = async e => {
        e.preventDefault()   //page doesen't refresh when the form gets submitted
        const location = e.target.elements.location.value
        if (!location) {
            return setError("Please enter the name of the city."), setWeather(null), setWeather2(null), setWeather3(null)
        }
        //Default behaviour of any webpage is that it's going through a refresh whenever a form gets submitted.

        //My personal API key when I created an account at https://openweathermap.org/
        //For security, api key comes from .env file, what is gitignored.
        const API_KEY = process.env.REACT_APP_SECRET_KEY   //Best is to put all api key logic to back-end
        //``- inject variables inside the string
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`
        const request = axios.get(url)
        const response = await request
        setWeather(response.data.main)
        setWeather2(response.data.wind)
        setWeather3(response.data.sys)
        setCity(response.data.name)
        setError(null)
    }
    // weather && console.log(weather);

    return (
        <div className="main">
            <Header/>
            <Content>
                <Context.Provider value={{api_call, weather, weather2, weather3, city}}>
                    <DateTime/>
                    <Tagline/>
                    <WeatherSearch/>
                    { weather && weather2 && weather3 && <WeatherData/> }   {/* If sentence here */}
                    { error && <Error error={error}/> }
                </Context.Provider>
                <Footer/>
            </Content>
        </div>
    )
}

export default Main