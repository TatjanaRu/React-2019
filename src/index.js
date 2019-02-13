import React, { Component } from 'react';
import ReactDOM from 'react-dom'; //rendering 
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import { Provider } from "react-redux";
import dotenv from "dotenv";
import './index.css';
import "bootstrap/dist/css/bootstrap.min.css";
import rootReducer from "./redux/reducers";
import App from './App';
import * as serviceWorker from './serviceWorker';
// import Login from "./components/Login/Login";
import RegisterContainer from "./containers/RegisterContainer";
import LoginContainer from "./containers/LoginContainer";

dotenv.config();

const store = createStore(rootReducer, {}, applyMiddleware(reduxThunk));
// reduxRhunk allow to performe assinc posibility
// additional feture for redux, that indicates usage of asinchronious functions to comunicate with server
// {} empty object - initial state parameter in this function

class Root extends Component {
    render() {
        return (
            <Provider store={store}> {/* Nevajag, ja nelieto redux, datu uzglabasanai*/}
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={App} />
                        <Route exact path="/login" component={LoginContainer} />
                        <Route exact path="/register" component={RegisterContainer} />
                    </Switch>
                </BrowserRouter>
            </Provider>
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
