import axios from "axios";
import requestConfig from "./requestConfig";
import requestConfigJson from "./requestConfigJson";

const BASE_URL = import.meta.env.VITE_BACKEND_URL;

class UserAPI {

    static register(values) {
        return axios.post(`${BASE_URL}/api/users/register`, values, requestConfigJson);
    }

    static getAll(){
        return axios.get(`${BASE_URL}/api/users/`, requestConfig)
    }

    static getById(id) {
        return axios.get(`${BASE_URL}/api/users/${id}`, requestConfig)
    }

    static edit(id, values) {
        return axios.put(`${BASE_URL}/api/users/${id}`, requestConfigJson)
    }

    static deleteUser(id) {
        return axios.delete(`${BASE_URL}/api/users/${id}`, requestConfig)
    }
    
    static login(values) {
        return axios.post(`${BASE_URL}/api/users/login`, requestConfigJson)
    }
}

export default UserAPI;