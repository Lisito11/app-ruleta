import axios from 'axios';

const production = "https://api-ruleta.up.railway.app/api";
// const development = "https://localhost:7069/api"

const ruletaApi = axios.create({
    baseURL: production
});

export default ruletaApi;