import BootcampAPI from "../../helpers/BootcampAPI";
import CryptoJS from 'crypto-js';
import { API, REGISTER_SUCCESS, REGISTER_ERROR, LOGIN_SUCCESS, LOGIN_ERROR } from "../constants";

const registerSuccess = () => {
    return {
        type: REGISTER_SUCCESS,
        isRegistered: true,
    }
}

const registerError = () => {
    return {
        type: REGISTER_ERROR,
        isRegistered: false,
    }
}

const loginSuccess = () => {
    return {
        type: LOGIN_SUCCESS,
        isLogedin: true,
    }
}

const loginError = () => {
    return {
        type: LOGIN_ERROR,
        isLogedin: false,
    }
}

export const register = (username, email, password) => {
    return dispatch => {
        BootcampAPI.post(API.REGISTER, {
            email,
            username,
            hashedPassword: CryptoJS.SHA256(password).toString()
        })
            .then(res => dispatch(registerSuccess()))
            .catch(err => dispatch(registerError()))
    };
};

export const login = (email, password) => {
    return dispatch => {
        BootcampAPI.post(API.LOGIN, {
            email,
            hashedPassword: CryptoJS.SHA256(password).toString()
        })
            .then(res => dispatch(loginSuccess()))
            .catch(err => dispatch(loginError()))
    };
};
