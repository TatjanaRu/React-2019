import React, { Component } from 'react';
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
// import { register } from "../redux/actions/UserAction";
import Login from "../components/Login/Login";
import { login } from '../redux/actions/UserActions';

class LoginContainer extends Component {
    onLogin = (email, password) => {
        // e.preventDefault()
        // register(username, email, password);
        if (!email || !password) {
            return;
        }

        this.props.login(email, password);
    }

    render() {
        const { isLogedin } = this.props;
        console.log('1234')
        return isLogedin ? <Redirect to="/" /> : <Login onLogin={this.onLogin} />;
    }
}

const mapStateToProps = (state) => ({
    isLogedin: state.loginReducer.isLogedin
});

const mapDispatchToProps = {
    login
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);