
import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';
import placeHolderImage from "../../assets/image-placeholder.svg";
import "./PostCard.css";

class PostCard extends Component{
    render(){
        const { title, description } = this.props;
        return (
            <Card className="PostCard mt-5 mb-5">
                {/*<CardImg top width="100%" src="http://..." alt="Card image cap" />*/}
                <CardImg top width="100%" src={placeHolderImage} alt="Card image cap" />
                <CardBody>
                    <CardTitle  className="PostCard__card-title">{title}</CardTitle>
                    <CardText>{description}</CardText>
                    <Button>Button</Button>
                </CardBody>
            </Card>
        )
    }
}

export default PostCard;
 