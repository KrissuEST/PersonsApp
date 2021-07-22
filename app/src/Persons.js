import React, { Component } from 'react';
import AppNav from './AppNav';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './App.css';
import { Table,Container,Input,Button,Label,FormGroup,Form } from 'reactstrap';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';

//https://codetoart.com/blog/reactjs-2-ways-to-create-react-components
//In PersonsApp project with more code, I use 2) Class Components.
class Persons extends Component {

    //Data, with what we are working.
    // {
    //     "id": 1,
    //     "name": "Priit",
    //     "age": 50,
    //     "personDate": "2019-06-16T17:00:00Z",
    //     "weight": 80.3,
    //     "height": 1.8,
    //     "nationality": {
    //         "id": 1,
    //         "name": "Estonian"
    //     }
    // },

    //Structure of the packet what we will send to endpoint.
    //Hardcoded
    emptyItem = {
        id : 4,
        age : this.age,
        height : this.height,
        personDate : new Date(),   //Today's date
        name : this.name,
        weight : this.weight,
        nationality : {id:1, name: 'English'}
    }
    
    //Props - you pass component and not able to change those values.
    //Constructor - first method what will be called upon object creation.
    constructor(props) {
        super(props)   //We are passing data to superclass, because we extend component.

        this.state = {  //Initate our state
            isLoading : false,   //Won't show loading screen.
            Nationalities : [],
            Persons : [],   //array of persons
            date : new Date(),
            item : this.emptyItem
        }
        //We need to bind it in construction or it will be undefined function and 
        //nothing will be done to that object.
        this.handleSubmit = this.handleSubmit.bind(this);  //bind this object handlesubmit, connecting dots
        this.handleChange = this.handleChange.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
    }

    // //Find max id and print it out
    // findMaxId(idd) {
    //     max = this.idd;   //enne oli max = 0
    //     $('.note-row').each(function() {
    //         max = Math.max(this.idd, max);
    //     });
    // }

    // //Find average number of numbers
    // findAverageNumber() {
    //     const sum = times.reduce((a,b) => (a+b)) / times.length;;
    //     // const avg = (sum / times.length) || 0;
    // }

    //Function for submitting data
    //async - sending data back to database
    async handleSubmit(event) {   //JavaScript - event driven
        const item = this.state.item;
        
        await fetch(`api/persons`, {
            method : 'POST',
            headers : {    //Passing different parameters to our request
                'Accept' : 'application/json',
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify(item),   //stringify - converts JavaScript to JSON
        });

        event.peventDefault();   //To prevent - form submits itself, prevents all auto submission
        this.props.history.push("/persons");   //It's for refreshing persons page
        //console.log("Blabla2 siin: " + this.id);
    }

    //Function for changing my already inserted data
    handleChange(event) {   //We pass the event
        const target = event.target;
        const value = target.value;
        const name = target.name;
        let item = {...this.state.item};
        item[name] = value;
        this.setState({item});
        // console.log(item);
    }

    //Function for changing date
    handleDateChange(date) {
        let item = {...this.state.item};
        item.personDate = date;
        this.setState({item});
    }

    //Function to remove data from database
    async remove(id) {   //Receives id
        await fetch(`api/persons/${id}`, {   //call to api
            method : 'DELETE',
            headers : {
                'Accpet' : 'application/json',
                'Content-Type' : 'application/json'
            }
        }).then(() => {
            //... - Persons object what contains many elements in it, that's how we pass it.
            //filter - we itarate through all components what are inside Persons, we look for id.
            let updatedPersons = [...this.state.Persons].filter(i => i.id !== id);   //Type and value comparison.
            this.setState({Persons : updatedPersons});   //We update our list because we didn't do 2nd api call.
        });
    }

    // //Function to edit data
    // async edit(id) {

    // }

    //async - We make call and don't have to wait response and 
    //can do other things until result is ready.
    //When result is ready then React will update the dom.
    //Api call, async call - event driven programming.

    //Function to load all data from database
    async componentDidMount() {

        const responseNat = await fetch('api/nationalities');
        const bodyNat = await responseNat.json();
        //Do not update state directly, always use setState, otherwise devastating results.
        this.setState({Nationalities : bodyNat, isLoading : false});  //false - loading is over, we received data
        
        //We load everything to into a variable Persons.
        const responsePer = await fetch('api/persons');
        const bodyPer = await responsePer.json();
        this.setState({Persons : bodyPer, isLoading : false});
    }

    render() { 
        const title = <h3>Add Person</h3>;
        const {Nationalities} = this.state;
        const {Persons,isLoading} = this.state;   //state mode

        if (isLoading)
            return(<div>Loading....</div>)

        let optionListNat  =
            Nationalities.map( (nationality) =>
                <option value={nationality.id} key={nationality.id}>
                            {nationality.name}
                </option>
            )

        let rowsPersons = 
            Persons.map( person => 
                <tr key={person.id}>   {/* Id - to make it unique for this application */}
                    <td>{person.name}</td>
                    <td>{person.age} years</td>
                    <td>{person.weight} kg</td>
                    <td>{person.height} m</td>
                    <td><Moment date = {person.personDate} format="YYYY/MM/DD"/></td>
                    <td>{person.nationality.name}</td>
                    {/* <td><Button size="sm" color="danger" onClick={() => this.remove(person.id)}>Delete</Button></td> */}
                    <FormGroup>
                        <Button size="sm" color="danger" onClick={() => this.remove(person.id)}>Delete</Button>{' '}
                        <Button size="sm" color="info" tag={Link} to="/">Edit</Button>
                    </FormGroup>
                </tr>
            )

        return (
            <div>
                <AppNav/>
                <Container>
                    {title}
                    <Form className="col-md-4 mb-3" onSubmit={this.handleSubmit}>
                        <FormGroup>
                            <Label for="name">Name</Label>
                            <Input type="text" name="name" id="name"  
                            onChange={this.handleChange} autoComplete="name"/>
                        </FormGroup>

                        <FormGroup>
                            <Label for="age">Age</Label>
                            <Input type="number" name="age" id="age"  
                            onChange={this.handleChange} autoComplete="age"/>
                        </FormGroup>

                        <FormGroup>
                            <Label for="nationality">Nationality</Label>
                            <select onChange={this.handleChange}>
                                {optionListNat}
                            </select>
                        </FormGroup>

                        <FormGroup>
                            <Label for="date">Date</Label>
                            <DatePicker selected={this.state.item.personDate} onChange={this.handleDateChange}/>
                        </FormGroup>

                        <FormGroup>
                            <Label for="weight">Weight</Label>
                            <Input type="number" name="weight" id="weight"  
                            onChange={this.handleChange} autoComplete="weight"/>
                        </FormGroup>

                        <FormGroup>
                            <Label for="height">Height</Label>
                            <Input type="number" name="height" id="height"  
                            onChange={this.handleChange} autoComplete="height"/>
                        </FormGroup>

                        <FormGroup>
                            <Button color="primary" type="submit">Save</Button>{' '}
                            <Button color="secondary" tag={Link} to="/">Cancel</Button>
                        </FormGroup>
                    </Form>
                </Container>
            
                {' '}
                <Container>  {/* Datagrid to show all Persons */}
                    <h3>Persons list</h3>
                    <Table className="mt-4">
                        <thead>
                            <th widht="20%">Name</th>
                            <th widht="10%">Age</th>
                            <th>Weight</th>
                            <th widht="20%">Height</th>
                            <th widht="30%">Date</th>
                            <th widht="20%">Nationality</th>
                            <th widht="10%">Action</th>
                        </thead>
                        <tbody>
                            {rowsPersons}
                        </tbody>
                        <thead>   {/* Datagrid to show results */}
                            <th widht="20%">4 people</th>   {/* for example {this.findMaxId(this.idd)} */}
                            <th widht="10%">60</th>   {/* {this.findAverageNumber(this.idd)} */}
                            <th>81.5</th>
                            <th widht="20%">1.9333</th>
                            <th widht="30%">Latest date</th>
                            <th widht="20%">3 of them</th>
                            <th widht="10%">Averages</th>
                        </thead>
                    </Table>
                </Container>
            </div>
        );
    }
}
 
export default Persons;