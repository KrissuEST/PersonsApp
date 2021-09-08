import React, { Component } from 'react';
import { Route, BrowserRouter as Router,Switch } from 'react-router-dom';
import Home from './components/HomePage/Home';
import NationalitiesListAdd from './components/NationalitiesPage/NationalitiesListAdd';
import WeatherApp from './components/WeatherAppPage/WeatherApp';
import HeaderNavComponent from './HeaderNavComponent';
import FooterComponent from './FooterComponent';
import AddNewPerson from './components/PersonsListPage/AddNewPerson';
import PersonsList from './components/PersonsListPage/PersonsList';
import ViewPerson from './components/PersonsListPage/ViewPerson';
import UpdatePerson from './components/PersonsListPage/UpdatePerson';

//App.js brings everything(all the pages) together and sends it back to index.js
//Our route component.
class App extends Component {
    state = {  }
    
    render() { 
        return ( 
            <div>
                <HeaderNavComponent/>
                    <Router>
                        <Switch>
                            <Route path='/' exact={true} component={Home}/>
                            <Route path='/home' exact={true} component={Home}/>
                            <Route path='/nationalities' exact={true} component={NationalitiesListAdd}/>
                            <Route path='/persons' exact={true} component={PersonsList}/>
                            <Route path='/add-person' exact={true} component={AddNewPerson}/>
                            <Route path='/update-person/:id' exact={true} component={UpdatePerson}/>
                            <Route path='/view-person/:id' exact={true} component={ViewPerson}/>
                            <Route path='/weather-info' exact={true} component={WeatherApp}/>
                        </Switch>
                    </Router>
                <FooterComponent/>
            </div>
        );
    }
}

export default App;