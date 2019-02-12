import React, { Component } from 'react';
// import { register } from "../redux/actions/UserAction";
import Register from "../components/Register/Register";
import { register } from '../serviceWorker';

class RegisterContainer extends Component {
    onRegister = (username, email, password) => {
        register(username, email, password);
    }

    render() {
        return <Register onRegister={this.onRegister} />;
    }
}

export default RegisterContainer;