import axios from "axios";


const api = axios.create({
    baseURL: "https://localhost:7172/"
});

export default api