import React, { Component } from 'react';
import '../../App.css';
import ReactLogo from '../../react.png';
import SpringBootLogo from '../../SpringBootLogo.png';

//Home page
class Home extends Component {
    state = {  }
    
    render() { 
        return ( 
            <div className = "body-footer">
                <form className = "mt-3" style={{color: "#14673E"}}>
                    <h1  className="text-center color: green">Welcome to app for managing persons</h1>
                    <h1 className="text-center">and searching for weather info!</h1>
                </form>
                <form className = "mt-5">
                    <h2 className="text-center">Front-end built with <img src={ReactLogo} alt="Logo"/></h2>
                </form>
                <form className = "mt-4">
                    <h2 className="text-center">Back-end built with <img src={SpringBootLogo} alt="Logo"/></h2>
                </form>
            </div>
        );
    }
}

export default Home;