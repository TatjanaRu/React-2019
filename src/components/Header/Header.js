import React, { Component } from "react";
import logoImage from "../../assets/logo.jpg";
import "./Header.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Openmodal from "../Openmodal/Openmodal"

class Header extends Component{
    constructor(props) {
        super(props);

        this.state= {
            isOpen: false,
        }
        this.onOpenModal = this.onOpenModal.bind(this);
        this.onCloseModal = this.onCloseModal.bind(this);
    }
    onOpenModal() {
    // onOpenModal = () =>{
        console.log("opened");
        this.setState({isOpen: true});
    }
    onCloseModal() {
        // onOpenModal = () =>{
            console.log("closed");
            this.setState({isOpen: false});
        }
    
    render(){
        const { isOpen } = this.state;
        console.log(isOpen)
        return (
            <div className="Header container-fluid pt-3 pb-3">
             <div className="row">
                <div className="col-10 Header__content-left">
                    <img className="Header__inline" src={logoImage} alt="Logo" width="50px" height="50px"></img>
                    <div className="Header__inline"> Bootcamp JS</div>
                </div>
                <div className="col-2 Header__content-right">
                    <button className="btn btn-dark Header__button-width" onClick={this.onOpenModal}> Upload</button>
                </div>
                {
                    isOpen && (<Openmodal onClose={this.onCloseModal} />)
                }
             </div>
            </div>
        )
    }
};

export default Header;
