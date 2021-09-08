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
                {/* <AppNav/> */}
                {/* Inline CSS commands in React application */}
                <h2 style={{display: 'flex', justifyContent:'center', alignItems:'center', height: '25vh'}}>
                Welcome to app for adding persons!</h2>
                <h2 style={{display: 'flex', justifyContent:'center', alignItems:'center', height: '30vh'}}>
                Front-end built with <img src={ReactLogo} alt="Logo" /></h2>
                <h2 style={{display: 'flex', justifyContent:'center', alignItems:'center', height: '50vh'}}>
                Back-end built with <img src={SpringBootLogo} alt="Logo" /></h2>
            </div>
        );
    }
}
 
export default Home;