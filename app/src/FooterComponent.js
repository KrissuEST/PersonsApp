import React, { Component } from 'react';

//Footer
class FooterComponent extends Component {
    state = {  }
    
    render() { 
        return ( 
            <div>
                <footer className = "footer">
                    <span className = "text-white-50">All rights reserved 2021 {' '} 
                    <a rel="noopener noreferrer" target="_blank" 
                    href="https://www.linkedin.com/in/kristjan-t%C3%B5nism%C3%A4e-70971419a/">
                        @Kristjan Tõnismäe</a>
                    </span>
                </footer>
            </div>
         );
    }
}

export default FooterComponent;