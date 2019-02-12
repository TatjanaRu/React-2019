import axios from "axios";

class APIClass {
    constructor() {
        this.instance = axios.create({
            baseURL: process.env.REACT_APP_APIURL,
            timeout: 1000
        });
    }

    getDefaultHeaders() {
        return { //object
            Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
            // localStorage is browser storage. there is sessionstorage until close session
            responseType: "application/json"
            // want we wont see from API, how will look body of response
        };
    }

    get(url) {
        return this.instance.get(url, {
            // method: "get",
            headers: this.getDefaultHeaders()
        });
    }

    post(url, data) {
        return this.instance.post(url, data, {
            // method: "post",
            headers: this.getDefaultHeaders()
        });
    }

    call(method, url, data) {
        // we will get back this.instance[method] - get or post
        return this.instance[method](url, data, {
            method,
            headers: this.getDefaultHeaders(),
        });
    }
}

const API = new APIClass();

export default API;