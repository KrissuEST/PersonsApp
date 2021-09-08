import React, { Component } from 'react';
import PersonsService from '../services/PersonsService';
import NationalitiesService from '../services/NationalitiesService';
import DatePicker from "react-datepicker";
import Moment from 'react-moment';

class UpdatePerson extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            id: this.props.match.params.id,   //getting id from route
            firstName: '',
            lastName: '',
            birthdayDate: '',
            emailAddress: '',
            Nationalities: [],
            age: null,
            height: null,
            weight: null
        } 
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.changeBirthdayDateHandler = this.changeBirthdayDateHandler.bind(this);
        // this.changeNationalityHandler = this.changeNationalityHandler.bind(this);
        this.changeEmailAddressHandler = this.changeEmailAddressHandler.bind(this);
        this.changeAgeHandler = this.changeAgeHandler.bind(this);
        this.changeHeightHandler = this.changeHeightHandler.bind(this);
        this.changeWeightHandler = this.changeWeightHandler.bind(this);
        this.updatePersonButton = this.updatePersonButton.bind(this);
    }

    componentDidMount() {
        PersonsService.getPersonById(this.state.id).then( (res) => {
            let person = res.data;
            this.setState({
                firstName: person.firstName,
                lastName: person.lastName,
                birthdayDate: person.birthdayDate,
                emailAddress: person.emailAddress,
                age: person.age,
                height: person.height,
                weight: person.weight
            });
        });

        NationalitiesService.getNationalities().then((res) => {
            this.setState({ Nationalities: res.data });
        });
    }
    
    changeFirstNameHandler = (event) => {
        this.setState({firstName: event.target.value});  //Assigning value to first name
    }

    changeLastNameHandler = (event) => {
        this.setState({lastName: event.target.value});
    }

    changeBirthdayDateHandler = (date) => {
        let item = {...this.state.item};
        item.birthdayDate = date;
        this.setState({birthdayDate: item.birthdayDate});
    }

    // //Nationality event handler
    // changeNationalityHandler = (event) => {
    //     this.setState({emailAddress: event.target.value});
    // }

    changeEmailAddressHandler = (event) => {
        this.setState({emailAddress: event.target.value});
    }

    changeAgeHandler = (event) => {
        this.setState({age: event.target.value});
    }

    changeHeightHandler = (event) => {
        this.setState({height: event.target.value});
    }

    changeWeightHandler = (event) => {
        this.setState({weight: event.target.value});
    }

    //Save button
    updatePersonButton = (e) => {
        e.preventDefault();
        let person = {    //We capture the update person form data
            firstName: this.state.firstName, 
            lastName: this.state.lastName, 
            birthdayDate: this.state.birthdayDate,
            // nationalityName: this.state.person.nationalityName,
            emailAddress: this.state.emailAddress,
            age: this.state.age,
            height: this.state.height,
            weight: this.state.weight
        };
        // console.log('person => ' + JSON.stringify(person));

        PersonsService.updatePerson(person, this.state.id).then( res => {
            this.props.history.push('/persons');
        });
    }

    //Cancel button
    cancelButton() {
        this.props.history.push('/persons');
    }

    render() {
        const {Nationalities, isLoading} = this.state;

        if (isLoading)
            return(<div>Loading....</div>)

        let optionListNat = 
            Nationalities.map( (nationality) =>
                <option value={nationality.id}>
                            {nationality.nationalityName}
                </option>
        )

        return (
            <div className = "body-footer">
                <div className = "container">
                    <div className = "row">
                        <div className = "card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Update Person</h3>
                            <div className = "card-body">
                                <form>
                                    <div className = "form-group">
                                        <label>First name:</label>
                                        <input placeholder="First name" name="firstName" className="form-control" 
                                            value={this.state.firstName} onChange={this.changeFirstNameHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label>Last name:</label>
                                        <input placeholder="Last name" name="lastName" className="form-control" 
                                            value={this.state.lastName} onChange={this.changeLastNameHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label>Birthday date:</label>
                                        {' '}
                                        <DatePicker onChange={this.changeBirthdayDateHandler}/>
                                        {<Moment date = {this.state.birthdayDate} format="DD/MM/YYYY"/>}
                                    </div>
                                    <div className = "form-group">
                                        <label>Nationality:</label>
                                        {' '}
                                        <select onChange={this.changeNationalityHandler} name="nationalityName">
                                            {optionListNat}
                                        </select>
                                        <label style={{color: "#FF0003",marginLeft: "10px"}}>Nationality update not working!</label>
                                    </div>
                                    <div className = "form-group">
                                        <label>Email address:</label>
                                        <input placeholder="Email address" name="emailAddress" className="form-control" 
                                            value={this.state.emailAddress} onChange={this.changeEmailAddressHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label>Age:</label>
                                        <input placeholder="Age" name="age" className="form-control" 
                                            value={this.state.age} onChange={this.changeAgeHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label>Height:</label>
                                        <input placeholder="Height" name="height" className="form-control" 
                                            value={this.state.height} onChange={this.changeHeightHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label>Weight:</label>
                                        <input placeholder="Weight" name="weight" className="form-control" 
                                            value={this.state.weight} onChange={this.changeWeightHandler}/>
                                    </div>

                                    <button className="btn btn-primary" onClick={this.updatePersonButton}>Update</button>
                                    <button className="btn btn-secondary" onClick={this.cancelButton.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default UpdatePerson;