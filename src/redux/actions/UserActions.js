import BootcampAPI from "../../helpers/BootcampAPI";
import sha256 from 'crypto-js/sha256';
import API from "../../constants";

const register = (username, email, password) => {
    return dispatch => {
        BootcampAPI.post(API.REGISTER, {
            email,
            username,
            hashedPassword: sha256(password)
        })
            .then(res => console.log(res))
            .catch(err => console.log(err))
    };
};

export default register;