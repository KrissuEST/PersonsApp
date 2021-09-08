import React from "react"
import Wrapper from "./Layout/Wrapper"
import Main from "./Main"
import "../../styles/styles.scss"   //Using SASS for WeatherApp

//https://codetoart.com/blog/reactjs-2-ways-to-create-react-components
//In WeatherApp project with less code, I use 1) Stateless Functional Components.
const WeatherApp = () => {

    return (
        <Wrapper>
            <Main/>
        </Wrapper>
    )
}

export default WeatherApp