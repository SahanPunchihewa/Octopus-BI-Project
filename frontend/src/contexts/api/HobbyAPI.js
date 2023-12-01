import axios from "axios";
import requestConfig from "./requestConfig";
import requestConfigJson from "./requestConfigJson";

const BASE_URL = import.meta.env.VITE_BACKEND_URL;

class HobbyAPI {

    static create(values) {
        return axios.post(`${BASE_URL}/api/hobby/create`,values, requestConfigJson)
    }

    static getAll(){
        return axios.get(`${BASE_URL}/api/hobby/`, requestConfig)
    }

    static getById(id) {
        return axios.get(`${BASE_URL}/api/hobby/${id}`, requestConfig)
    }
    
    static update(id,values) {
        return axios.put(`${BASE_URL}/api/hobby/${id}`, values, requestConfig)
    }
}