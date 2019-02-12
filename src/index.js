import React, { Component } from 'react';
import ReactDOM from 'react-dom'; //rendering 
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import dotenv from "dotenv";
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Login from "./components/Login/Login";
import RegisterContainer from "./containers/RegisterContainer";

dotenv.config();

class Root extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={App} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/register" component={RegisterContainer} />
                </Switch>
            </BrowserRouter>
        )
    }
}
//const element = <h1>JS example</h1>;
//ReactDOM.render(element, document.getElementById('root'));
ReactDOM.render(<Root />, document.getElementById('root'));
//ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
