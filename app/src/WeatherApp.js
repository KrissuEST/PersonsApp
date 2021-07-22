import React from "react"
import AppNav from "./AppNav"
import Wrapper from "./components/WeatherApp/Layout/Wrapper"
import Main from "./components/WeatherApp/Main"
import "./styles/styles.scss"   //Using SASS for WeatherApp

//https://codetoart.com/blog/reactjs-2-ways-to-create-react-components
//In WeatherApp project with less code, I use 1) Stateless Functional Components.
const WeatherApp = () => {

    return ( 
        <div>
            <AppNav/>
            <Wrapper>
                <Main/>
            </Wrapper>
        </div>
    )
}
 
export default WeatherApp