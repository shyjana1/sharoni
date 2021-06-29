import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:5001/sharoni/us-central1/api/payment/create' //the API (cloud function) URL
})

export default instance;