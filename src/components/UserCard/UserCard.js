import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';
import placeHolderImage from "../../assets/image-placeholder.svg";
import "./UserCard.css";

class UserCard extends Component{
    render(){
        const { name, description, image } = this.props;
        return (
            <div className="UserCard container">
                <div className="row">
                    <div className="col-4 justify-content-center ">
                        <img className="UserCard__image" src={image} alt="user image" />
                    </div>
                    <div className="col-8">
                        <div className="col-12 UserCard__name">{name}</div>
                        <div className="col-12 UserCard__description">{description}</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default UserCard;