import React, { Component } from 'react';   //imrc - shortcut here
import AppNav from './AppNav';

class Nationality extends Component {   //cc - shortcut here
    state = {
        isLoading : true,
        Nationalities : []
    }

    //sync - you send a request and you wait for the response...
    //async - you send a request and you don't have to wait....
    async componentDidMount() {
        const response = await fetch('api/nationalities');
        const body = await response.json();
        this.setState({Nationalities : body , isLoading : false});   //we need to use setState
    }

    render() {   //render returns jsx file
        const {Nationalities,isLoading} = this.state;

        if (isLoading)
            return (<div>Loading...</div>);
        
        return (   //returning some real data to the user
            <div>
                <AppNav/>
                <h2>Current nationalities</h2>
                {   //Map - same like for loop, but in React
                    Nationalities.map( nationality => 
                        <div id={nationality.id}>
                            {nationality.name}
                        </div>
                    )
                }
            </div>
        );
    }
}
 
export default Nationality;