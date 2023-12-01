import axios from "axios";
const BASE_URL = import.meta.env.VITE_BACKEND_URL;

class AdminAPI {

    static register(values) {
        return axios.post(`${BASE_URL}/admin/register`, values)
    }

    static login(values){
        return axios.post(`${BASE_URL}/admin/login`, values)
    }
}

export default AdminAPI;