import React, { Component } from 'react';   //imrc - shortcut here
import { Table,Container,Input,Button,Label,FormGroup,Form } from 'reactstrap';
import NationalitiesService from '../services/NationalitiesService';

class NationalitiesListAdd extends Component {   //cc - shortcut here

    //State is an object what lives within the component.
    constructor(props) {
        super(props);

        this.state = {
            // id: this.props.match.params.id,
            nationalityName: '',
            isLoading : false,   //false - Won't show loading screen.
            Nationalities: []
        }
        this.handleNationalityNameChange = this.handleNationalityNameChange.bind(this);
        // this.deleteNationality = this.deleteNationality.bind(this);
        this.saveNationalityButton = this.saveNationalityButton.bind(this);
    }

    handleNationalityNameChange = (event) => {
        this.setState({nationalityName: event.target.value});
    }

    // //Delete button
    // deleteNationality(id) {
    //     NationalitiesService.deleteNationality(id).then( res => {   //Filtering out particular nationality what I want to delete
    //         this.setState({Nationalities: this.state.Nationalities.filter(nationality => nationality.id !== id)});
    //     });
    // }

    //Save button
    saveNationalityButton = (e) => {
        e.preventDefault();
        let nationality = {
            nationalityName: this.state.nationalityName
        };

        NationalitiesService.createNationality(nationality).then(res => {
            this.props.history.push('/');
            this.props.history.push('/nationalities');  //Navigating back to persons list
        });
    }

    //Cancel button
    cancelButton() {
        this.props.history.push('/');
    }

    componentDidMount() {
        NationalitiesService.getNationalities().then((res) => {
            this.setState({ Nationalities: res.data });
        });
    }

    //Render helps to display data what goes inside the component.
    render() {   //render returns jsx file
        const {Nationalities,isLoading} = this.state;
        const title = <h2 className="text-left">Add Nationality</h2>;

        if (isLoading)
            return (<div>Loading...</div>);

        let rowsNationalities = 
            Nationalities.map( nationality => 
                <tr key={nationality.id}>   {/* Id - to make it unique for this application */}
                    <td>{nationality.nationalityName}</td>
                    {/* <td>
                        <button onClick={() => this.deleteNationality(nationality.id)} style={{marginLeft: "10px"}} className="btn btn-danger">Delete</button>
                    </td> */}
                </tr>
            )
        
        return (   //returning some real data to the user
            <div className = "body-footer">
                <br/>
                <Container>
                    {title}
                    <Table className="mt-4 col-md-5 mb-3">
                        <FormGroup>
                            <Label>Nationality name:</Label>
                            <Input placeholder="Nationality" name="nationalityName" className="form-control" 
                                value={this.state.nationalityName} onChange={this.handleNationalityNameChange}/>
                        </FormGroup>
                        <FormGroup>
                            <Button className="btn btn-success" onClick={this.saveNationalityButton}>Save</Button>
                            <Button className="btn btn-secondary" onClick={this.cancelButton.bind(this)} style={{marginLeft: "10px"}}>Cancel</Button>
                        </FormGroup>
                    </Table>
                </Container>
             
                <Container className="mt-4">
                    <h2>Nationalities List</h2>
                    {/* className = "table table-striped table-bordered col-md-5 mb-3 mt-4" */}
                    <Table className="table-striped mt-4 col-md-5 mb-3">
                        <thead>
                            <th widht="20%">Nationality</th>
                            {/* <th widht="10%">Action</th> */}
                        </thead>
                        <tbody>
                            {rowsNationalities}
                        </tbody>
                    </Table>
                </Container>
            </div>
        );
    }
}

//export - Make App component available for other files to import it.
export default NationalitiesListAdd;