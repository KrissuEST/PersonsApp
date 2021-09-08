import axios from 'axios';   //using Axios

const PERSON_API_BASE_URL = "http://localhost:8080/api/persons";

class PersonsService {

    //Getting all database records
    getPersons() {
        return axios.get(PERSON_API_BASE_URL);
    }

    //Sending form data to REST API through post http method
    createPerson(person) {  //person object here as a method argument
        return axios.post(PERSON_API_BASE_URL, person);
    }

    getPersonById(personId) {
        return axios.get(PERSON_API_BASE_URL + '/' + personId);
    }

    updatePerson(person, personId) {
        return axios.put(PERSON_API_BASE_URL + '/' + personId, person);
    }

    deletePerson(personId) {
        return axios.delete(PERSON_API_BASE_URL + '/' + personId);
    }
}

export default new PersonsService();   //We actually exporting here an object.