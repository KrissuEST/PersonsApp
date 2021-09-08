import React, { Component } from 'react';   //rcc - React class component lühend
import { Table,Container,Input,Button,Label,FormGroup,Form } from 'reactstrap';
import PersonsService from '../services/PersonsService';
import Moment from 'react-moment';

class PersonsList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading : false,   //false - Won't show loading screen.
            // Nationalities : [],
            persons: []
        }
        this.addPerson = this.addPerson.bind(this);
        this.updatePerson = this.updatePerson.bind(this);
        this.deletePerson = this.deletePerson.bind(this);
        this.viewPerson = this.viewPerson.bind(this);
    }

    //History object using props makes us manually control the history of the browser.
    //Add Person button
    addPerson() {
        //Need to navigate to CreatePerson component.
        this.props.history.push('/add-person');
    }

    //Method to navigate to update person page.
    updatePerson(id) {
        this.props.history.push(`/update-person/${id}`);   //We pass id dynamically to update person page.
    }

    //Delete button logic
    deletePerson(id) {
        PersonsService.deletePerson(id).then( res => {   //Filtering out particular person what I want to delete
            this.setState({persons: this.state.persons.filter(person => person.id !== id)});
        });
    }

    //Here we define view person event handler
    viewPerson(id) {
        this.props.history.push(`/view-person/${id}`);
    }

    // findMaxId(Id) {
    //     let maxId = this.state.id;   //enne oli max = 0
        // $('.note-row').each(function() {
        //     max = Math.max(this.idd, max);
        // });
    // }

    componentDidMount() {
        PersonsService.getPersons().then((res) => {
            this.setState({ persons: res.data });
        });
    }

    render() {
        const {persons,isLoading} = this.state;   //state mode

        if (isLoading)
            return(<div>Loading....</div>)

        let rowsPersons = 
            persons.map( person => 
                <tr key={person.id}>   {/* Id - to make it unique for this application */}
                    <td>{person.firstName}</td>
                    <td>{person.lastName}</td>
                    <td><Moment date = {person.birthdayDate} format="DD/MM/YYYY"/></td>
                    {/* <td>{person.nationality.nationalityName}</td> */}
                    <td>{person.age} years</td>
                    <td>{person.height} m</td>
                    <td>{person.weight} m</td>
                    <td>
                        <button onClick={() => this.viewPerson(person.id)} className="btn btn-info">View More</button>
                        <button onClick={() => this.updatePerson(person.id)} style={{marginLeft: "10px"}} className="btn btn-primary">Update</button>
                        <button onClick={() => this.deletePerson(person.id)} style={{marginLeft: "10px"}} className="btn btn-danger">Delete</button>
                    </td>
                </tr>
        )

        return (
            <div className = "body-footer">
                <Container>
                    <h2 className="text-center">Persons List</h2>
                    <br/>
                    <div className = "row">
                        <button className="btn btn-success" onClick={this.addPerson}>Add Person</button>
                    </div>
                    <br/>
                    <div className = "row">
                        <table className = "table table-striped table-bordered">
                            <thead>
                                <tr>
                                    <th>First name</th>
                                    <th>Last name</th>
                                    {/* <th>Nationality</th> */}
                                    <th>Birthday Date</th>
                                    <th>Age</th>
                                    <th>Height</th>
                                    <th>Weight</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {rowsPersons}
                            </tbody>
                            {/* <thead>   Datagrid to show results
                                <th>...person(s)</th>  for example {this.findMaxId(this.idd)}
                                <th></th>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th>Average</th>
                            </thead> */}
                        </table>
                    </div>
                </Container>
            </div>
        );
    }
}

export default PersonsList;