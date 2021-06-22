import React, { Component } from 'react';
import AppNav from './AppNav';
import './App.css';
import { Table,Container,Input,Button,Label,FormGroup,Form } from 'reactstrap';
import { Link } from 'react-router-dom';

class Persons extends Component {

    idd = 3;  //id what will be changed

    //Structure of the packet what we will send to endpoint.
    emptyItem = {
        id : this.idd + 1,
        age : this.age,
        height : this.height,
        name : this.name,
        weight : this.weight
    }
    
    //Props - you pass component and not able to change those values.
    //Constructor - first method what will be called.
    constructor(props) {
        super(props)   //We are passing data to superclass, because we extend component.

        this.state = {  //Initate our state
            isLoading : false,   //Won't show loading screen.
            Persons : [],   //array
            item : this.emptyItem
        }
        //We need to bind it in construction or will be undefined function and 
        //nothing will be done to that object.
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        console.log("Blaablaa1 siin: " + this.idd);
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

    //async - you send the request, you don't have to wait.
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

        event.peventDefault();   //To prevent - form submits itself
        this.props.history.push("/persons");   //refreshing persons page
        // console.log("Blaaaaa2 siin: " + this.id);
    }

    // For changing my inserted data
    handleChange(event){
        const target = event.target;
        const value = target.value;
        const name = target.name;
        let item = {...this.state.item};
        item[name] = value;
        this.setState({item});
        // console.log(item);
    }

    //Remove method
    async remove(id) {   //Receives id
        await fetch(`api/persons/${id}`, {   //call to api
            method : 'DELETE',
            headers : {
                'Accpet' : 'application/json',
                'Content-Type' : 'application/json'
            }
        }).then(() => {
            //... - with 3 dots Persons object what contains many elements in it.
            //filter - we itarate through all components what are inside Persons, we look for id.
            let updatedPersons = [...this.state.Persons].filter(i => i.id !== id);   //Type and value comparison.
            this.setState({Persons : updatedPersons});   //We update our list because we didn't do 2nd api call.
        });
    }

    //async - We make call and don't have to wait response and 
    //can do other things until result is ready.
    //When result is ready then React will update the dom.

    //Don't update state directly, use setState, otherwise devastating results.
    //Api call, async call - event driven programming.
    async componentDidMount() {
        
        //We load everything to into a variable Persons.
        const responsePer = await fetch('api/persons');
        const bodyPer = await responsePer.json();
        this.setState({Persons : bodyPer, isLoading : false});
    }

    render() { 
        const title = <h3>Add Person</h3>;
        const {Persons,isLoading} = this.state;

        if (isLoading)
            return(<div>Loading....</div>)

        let rows = 
            Persons.map( person => 
                <tr key={person.id}>
                    <td>{person.name}</td>
                    <td>{person.age} years</td>
                    <td>{person.weight} kg</td>
                    <td>{person.height} m</td>
                    <td><Button size="sm" color="danger" onClick={() => this.remove(person.id)}>Delete</Button></td>
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
                        <th widht="10%">Action</th>
                    </thead>
                    <tbody>
                        {rows}
                    </tbody>
                    <thead>
                        <th widht="20%">{this.idd} people</th>   {/* nt nii {this.findMaxId(this.idd)} */}
                        <th widht="10%">60</th>   {/* {this.findAverageNumber(this.idd)} */}
                        <th>81.5</th>
                        <th widht="20%">1.9333</th>
                        <th widht="10%">Averages</th>
                    </thead>
                </Table>
            </Container>
            </div>
        );
    }
}
 
export default Persons;