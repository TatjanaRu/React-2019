import { REGISTER_SUCCESS, REGISTER_ERROR, LOGIN_SUCCESS, LOGIN_ERROR } from "../constants";
const defaultState = {
    isRegistered: false,
    isLogedin: false
}

export const registerReducers = (state = defaultState, action) => {
    switch (action.type) {
        case REGISTER_SUCCESS:
            return { ...state, isRegistered: true };
        case REGISTER_ERROR:
            return { ...state, isRegistered: false };
        default:
            return state;
    }
}

export const loginReducer = (state = defaultState, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return { ...state, isLogedin: true };
        case LOGIN_ERROR:
            return { ...state, isLogedin: false };
        default:
            return state;
    }
}