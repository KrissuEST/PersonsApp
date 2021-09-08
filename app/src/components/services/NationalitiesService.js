import axios from 'axios';

const NATIONALITY_API_BASE_URL = "http://localhost:8080/api/nationalities";

class NationalitiesService {

    //Getting all database records
    getNationalities() {
        return axios.get(NATIONALITY_API_BASE_URL);
    }

    getNationalityById(nationalityId) {
        return axios.get(NATIONALITY_API_BASE_URL + '/' + nationalityId);
    }

    //Sending form data to REST API through post http method
    createNationality(nationality) {
        return axios.post(NATIONALITY_API_BASE_URL, nationality);
    }

    deleteNationality(nationalityId) {
        return axios.delete(NATIONALITY_API_BASE_URL + '/' + nationalityId);
    }
}

export default new NationalitiesService();