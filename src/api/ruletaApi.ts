import axios from 'axios';

const ruletaApi = axios.create({
    baseURL: 'https://localhost:7069/api'
});

export default ruletaApi;