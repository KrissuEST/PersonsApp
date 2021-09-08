import React, { Component } from 'react';
import PersonsService from '../services/PersonsService';
import NationalitiesService from '../services/NationalitiesService';
import DatePicker from "react-datepicker";
import Moment from 'react-moment';

import "react-datepicker/dist/react-datepicker.css";

class AddNewPerson extends Component {

    constructor(props) {
        super(props);

        //Initsialize fields with empty ''.
        //These properties will help us to get form data, this data will be available in form submission.
        this.state = {
            // id: this.props.match.params.id,
            isLoading : false,
            firstName: '',
            lastName: '',
            birthdayDate: new Date(),   //Today's date by default
            Nationalities: [],
            emailAddress: '',
            age: null,
            height: null,
            weight: null
        } 
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.changeBirthdayDateHandler = this.changeBirthdayDateHandler.bind(this);
        // this.changeNationalityHandler = this.changeNationalityHandler.bind(this);
        this.changeEmailAddresslHandler = this.changeEmailAddresslHandler.bind(this);
        this.changeAgeHandler = this.changeAgeHandler.bind(this);
        this.changeHeightHandler = this.changeHeightHandler.bind(this);
        this.changeWeightHandler = this.changeWeightHandler.bind(this);
        this.savePersonButton = this.savePersonButton.bind(this);
        //Recomended by React documentation to bind it here.
    }
    
    //First name event handler
    changeFirstNameHandler = (event) => {
        this.setState({firstName: event.target.value});  //Assigning value to first name
    }

    //Last name event handler
    changeLastNameHandler = (event) => {
        this.setState({lastName: event.target.value});
    }

    changeBirthdayDateHandler = (date) => {
        let item = {...this.state.item};
        item.birthdayDate = date;
        this.setState({birthdayDate: item.birthdayDate});
        // console.log(item.birthdayDate);
    }

    // changeNationalityHandler = (event) => {
    //     this.setState({nationalityName: event.target.value});
    // }

    //Email address event handler
    changeEmailAddresslHandler = (event) => {
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
    savePersonButton = (e) => {
        e.preventDefault();
        let person = {
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
        
        PersonsService.createPerson(person).then(res => {
            this.props.history.push('/persons');   //Navigating back to persons list page
        });
    }

    //Cancel button
    cancelButton() {
        this.props.history.push('/persons');
    }

    // console.log('person => ' + JSON.stringify(this.props.history));
    componentDidMount() {
        NationalitiesService.getNationalities().then((res) => {
            this.setState({ Nationalities: res.data });
        });
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
                            <h3 className="text-center">Add Person</h3>
                            <div className = "card-body">
                                <form>
                                    <div className = "form-group">
                                        <label>First name:</label>
                                        <input placeholder="First name" name="firstName" className="form-control" 
                                            value={this.state.firstName} onChange={this.changeFirstNameHandler}/>
                                        {/* At first value is empty, later onChange is changeFirstNameHandler */}
                                    </div>
                                    <div className = "form-group">
                                        <label>Last name:</label>
                                        <input placeholder="Last name" name="lastName" className="form-control" 
                                            value={this.state.lastName} onChange={this.changeLastNameHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label>Birthday date:</label>
                                        {' '}
                                        <DatePicker selected={this.state.birthdayDate} name="birthdayDate" 
                                            onChange={this.changeBirthdayDateHandler}/>
                                        {/* <input placeholder="Birthday date" name="birthdayDate" className="form-control" 
                                            DatePicker selected={this.state.birthdayDate} onChange={this.changeBirthdayDateHandler}/> */}
                                    </div>
                                     <div className = "form-group">
                                        <label>Nationality:</label>
                                        {' '}
                                        <select onChange={this.changeNationalityHandler} name="nationalityName">
                                            {optionListNat}
                                        </select>
                                        <label style={{color: "#FF0003",marginLeft: "10px"}}>Nationality save not working!</label>
                                    </div>
                                    {/* <input placeholder="Nationality" name="nationality" className="form-control" 
                                            value={this.state.age} onChange={this.changeAgeHandler}/> */}
                                    <div className = "form-group">
                                        <label>Email Address:</label>
                                        <input placeholder="Email Address" name="emailAddress" className="form-control" 
                                            value={this.state.emailAddress} onChange={this.changeEmailAddresslHandler}/>
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

                                    {/* {this.getSaveOrUpdateButton()} */}
                                    <button className="btn btn-success" onClick={this.savePersonButton}>Save</button>
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

export default AddNewPerson;