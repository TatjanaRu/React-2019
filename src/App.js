import React, { Component } from 'react';
import logo from './logo.svg';
import Posts from "./components/Posts/Posts";
import UserList from "./components/UserList/UserList";
import Header from "./components/Header/Header";
import './App.css';
// import { Button } from 'reactstrap';

class App extends Component {
  render() {
    return (
      <div className="App App__background">
      <Header />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-8">
            <Posts />
          </div>
          <div className="col-4 mt-3">
            <UserList />
          </div>
          {/* <Openmodal /> */}
        </div>
      </div>
        
        {// everything in this brackets - javascript with return 
        }
        {/* comment */}
        {// comment
        }
        <header className="App-header pb-5">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>My first React App</h1>
          <button className="btn btn-primary mt-3">Button</button>
          {/*<Button color="primary">Button</Button>*/}
        </header>
      </div>
    );
  }
}

export default App;
