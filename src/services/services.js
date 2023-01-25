import axios from "axios";
import https from 'https'


axios.defaults.httpsAgent = new https.Agent({  
    rejectUnauthorized: false
});
const api = axios.create({
    baseURL: "https://localhost:7172/"
});

export default api