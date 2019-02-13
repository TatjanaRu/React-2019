import React, { Component } from 'react';
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
// import { register } from "../redux/actions/UserAction";
import Register from "../components/Register/Register";
import { register } from '../redux/actions/UserActions';

class RegisterContainer extends Component {
    onRegister = (username, email, password) => {
        // e.preventDefault()
        // register(username, email, password);
        if (!username || !email || !password) {
            return;
        }

        this.props.register(username, email, password);
    }

    render() {
        const { isRegistered } = this.props;

        return isRegistered ? <Redirect to="/login" /> : <Register onRegister={this.onRegister} />;
    }
}

const mapStateToProps = (state) => ({
    isRegistered: state.registerReducers.isRegistered
});

const mapDispatchToProps = {
    register
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterContainer);