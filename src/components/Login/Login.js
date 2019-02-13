import React, { Component } from "react";
import "./Login.css";

class Login extends Component {
    constructor() {
        super();

        this.state = {
            email: "",
            password: ""
        }
    }

    // onEmailChange = (e) => {
    //     this.setState({email: e.target.value});
    // }

    // onPasswordChange = (e) => {
    //     this.setState({password: e.target.value});
    // }

    // do the same as previous two
    onInputChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        const { email, password } = this.state;
        const { onLogin } = this.props;
        return (
            <div className="Login">
                <div className="Login__content">
                    <h2>Login</h2>
                    <form>
                        <div className="form-group">
                            <label>email</label>
                            <input
                                onChange={this.onInputChange}
                                className="form-control"
                                type="text"
                                name="email"
                                value={email} />
                            {email}
                        </div>
                        <div className="form-group">
                            <label>password</label>
                            <input
                                onChange={this.onInputChange}
                                className="form-control"
                                type="password"
                                name="password"
                                value={password} />
                            {password}
                        </div>
                        <button
                            onClick={() => onLogin(email, password)}
                            type="button"
                            className="btn btn-dark">login</button>
                    </form>
                </div>
            </div >
        )
    }
}

export default Login;