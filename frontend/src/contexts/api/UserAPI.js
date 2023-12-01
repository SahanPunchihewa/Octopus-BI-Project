import axios from "axios";

const BASE_URL = import.meta.env.VITE_BACKEND_URL;

class UserAPI {

    static register(values) {
        return axios.post(`${BASE_URL}/users/login`, values);
    }

    static getAll(){
        return axios.get(`${BASE_URL}/users/`)
    }

    static getById(id) {
        return axios.get(`${BASE_URL}/users/${id}`)
    }

    static edit(id, values) {
        return axios.put(`${BASE_URL}/users/${id}`)
    }

    static deleteUser(id) {
        return axios.delete(`${BASE_URL}/users/${id}`)
    }
    
}

export default UserAPI;