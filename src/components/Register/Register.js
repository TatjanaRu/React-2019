import React, { Component } from "react";
import "./Register.css";


class Register extends Component {
    constructor() {
        super();

        this.state = {
            username: "",
            email: "",
            password: ""
        }
    }

    onInputChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        const { username, email, password } = this.state;
        const { onRegister } = this.props;
        return (
            <div className="Register">
                <div className="Register__content">
                    <h2>Register</h2>
                    <form>
                        <div className="form-group">
                            <label>username</label>
                            <input
                                onChange={this.onInputChange}
                                className="form-control"
                                type="text"
                                name="username"
                                value={username} />
                            {username}
                        </div>
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
                            onClick={() => onRegister(username, email, password)}
                            className="btn btn-dark">Login</button>
                    </form>
                </div>
            </div >
        )
    }
}

export default Register;