import React, { Component } from 'react';   //imrc - shortcut here
import AppNav from '../../AppNav';
import { Table,Container,Input,Button,Label,FormGroup,Form } from 'reactstrap';
import { Link } from 'react-router-dom';
import NationalitiesService from '../services/NationalitiesService';

class Nationality extends Component {   //cc - shortcut here
    //State is an object what lives within the component.
    state = {
        isLoading : true,
        Nationalities : []
    }

    handleNationalityNameChange = (event) => {
        this.setState({age: event.target.value});
    }

    //Function to remove data from database
    async removeNationality(id) {   //Receives id
        await fetch(`api/nationalities/${id}`, {   //call to api
            method : 'DELETE',
            headers : {
                'Accpet' : 'application/json',
                'Content-Type' : 'application/json'
            }
        }).then(() => {
            //... - Persons object what contains many elements in it, that's how we pass it.
            //filter - we itarate through all components what are inside Persons, we look for id.
            let updatedNationalities = [...this.state.Nationalities].filter(i => i.id !== id);   //Type and value comparison.
            this.setState({Nationalities : updatedNationalities});   //We update our list because we didn't do 2nd api call.
        });
    }

    //sync - you send a request and you wait for the response...
    //async - you send a request and you don't have to wait....
    // async componentDidMount() {
    async componentDidMount() {
        
        // NationalitiesService.getNationalities().then((res) => {
        //     this.setState({ Nationalities: res.data });
        // });
        const response = await fetch('api/nationalities');
        const body = await response.json();
        this.setState({Nationalities : body , isLoading : false});   //we need to use setState
    }

    //Render helps to display data what goes inside the component.
    render() {   //render returns jsx file
        const {Nationalities,isLoading} = this.state;
        const title = <h3>Add Nationality</h3>;

        if (isLoading)
            return (<div>Loading...</div>);

        let rowsNationalities = 
            Nationalities.map( nationality => 
                <tr key={nationality.id}>   {/* Id - to make it unique for this application */}
                    <td>{nationality.name}</td>
                    <td>
                        <Button size="sm" color="danger" onClick={() => this.removeNationality(nationality.id)}>Delete</Button>
                    </td>
                </tr>
            )
        
        return (   //returning some real data to the user
            <div>
                <AppNav/>
                <br/>
                <Container>
                    {title}
                    <Form onSubmit={this.handleSubmit}>
                        <div className="row">
                            <FormGroup className="col-md-4 mb-3">
                                <Label for="nationality">Nationality</Label>
                                <Input type="text" name="nationality" id="nationality" onChange={this.handleNationalityNameChange}/>
                            </FormGroup>
                        </div>
                        <FormGroup>
                            <Button color="success" type="submit">Save</Button>{' '}
                            <Button color="secondary" tag={Link} to="/">Cancel</Button>
                        </FormGroup>
                    </Form>
                </Container>

                <br/>
                <Container>
                    <h2>Nationalities List</h2>
                    <Table className="col-md-5 mb-3 mt-4">
                        <thead>
                            <th widht="20%">Nationality</th>
                            <th widht="10%">Action</th>
                        </thead>
                        <tbody>
                            {rowsNationalities}
                        </tbody>
                    </Table>
                </Container>

                {/* <h2>Current nationalities</h2> */}
                {/* {   //Map - same like for loop, but in React
                    Nationalities.map( nationality => 
                        <div id={nationality.id}>
                            {nationality.name}
                        </div>
                    )
                } */}
            </div>
        );
    }
}
 
//Export - Make App component available for other files to import it.
export default Nationality;