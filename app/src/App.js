import React, { Component } from 'react';
import { Route, BrowserRouter as Router,Switch } from 'react-router-dom';
import Home from './Home';
import Persons from './Persons';

//App.js brings everything together and sends back to index.js
class App extends Component {
    state = {  }
    render() { 
        return (  
            <Router>
                <Switch>
                     <Route path='/' exact={true} component={Home}/>
                     <Route path='/persons' exact={true} component={Persons}/>
                </Switch>
             </Router>
        );
    }
}

export default App;