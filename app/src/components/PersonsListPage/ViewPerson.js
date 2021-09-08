import React, { Component } from 'react';
import PersonsService from '../services/PersonsService';
import Moment from 'react-moment';;

class ViewPerson extends Component {

    constructor(props) {
        super(props);

        this.state = {
            id: this.props.match.params.id,
            person: {}  //state object have person property
        }
    }

    componentDidMount() {
        PersonsService.getPersonById(this.state.id).then( res => {
            this.setState({person: res.data});  
        });   //assigning response data to person property using setState method
    }

    //Back button
    backButton() {
        this.props.history.push('/persons');
    }
    
    render() {
        // const {persons,isLoading} = this.state;   //state mode
        // const {Nationalities,isLoading} = this.state;

        // console.log(this.state.person.nationalityName);  //here is basically solution

        return (
            <div className = "body-footer">
                <br/>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center">View Person's Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label>First Name: </label>
                            <div style={{marginLeft: "5px",fontWeight: "bold"}}>{this.state.person.firstName}</div>
                        </div>
                        <div className = "row mt-1">
                            <label>Last Name:</label>
                            <div style={{marginLeft: "5px",fontWeight: "bold"}}>{this.state.person.lastName}</div>
                        </div>
                        <div className = "row mt-1">
                            <label>Birthday date:</label>
                            <div style={{marginLeft: "5px",fontWeight: "bold"}}>
                                {<Moment date = {this.state.person.birthdayDate} format="DD/MM/YYYY"/>}</div>
                        </div>
                        <div className = "row mt-1">
                            <label>Nationality:</label>
                            <div style={{color: "#FF0003",marginLeft: "5px"}}>Not working!</div>
                            {/* <div style={{marginLeft: "5px",fontWeight: "bold"}}>{this.state.person.nationalityName}</div> */}
                        </div>
                        <div className = "row mt-1">
                            <label>Email Address:</label>
                            <div style={{marginLeft: "5px",fontWeight: "bold"}}>{this.state.person.emailAddress}</div>
                        </div>
                        <div className = "row mt-1">
                            <label>Age:</label>
                            <div style={{marginLeft: "5px",fontWeight: "bold"}}>{this.state.person.age} years</div>
                        </div>
                        <div className = "row mt-1">
                            <label>Height:</label>
                            <div style={{marginLeft: "5px",fontWeight: "bold"}}>{this.state.person.height} m</div>
                        </div>
                        <div className = "row mt-1">
                            <label>Weight:</label>
                            <div style={{marginLeft: "5px",fontWeight: "bold"}}>{this.state.person.weight} kg</div>
                        </div>
                        <button className="btn btn-info mt-2" onClick={this.backButton.bind(this)} style={{marginLeft: "-15px"}}>Back</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default ViewPerson;