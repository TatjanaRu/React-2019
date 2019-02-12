import React, { Component } from "react";

import placeHolderImage from "../../assets/image-placeholder.svg";
import PostCard from "../Post/PostCard"
//import "./Posts.css";
const posts = [
    {   title: "First title",
        description: "Here is description part.",
        image: placeHolderImage},

        {   title: "Second title",
        description: "Here is description part.",
        image: placeHolderImage},

        {   title: "Third title",
        description: "Here is description part.",
        image: placeHolderImage},

        {   title: "Fourth title",
        description: "Here is description part.",
        image: placeHolderImage},

        {   title: "Fifth title",
        descripton: "Here is description part.",
        image: placeHolderImage},
];
// export default class Posts extends Component{ // other way how to export
class Posts extends Component{
    // copies the original constructor from component
    // it will be react component
    render(){
        return (
            <div className="Posts pt-1">        
                {/* posts.map(post, index) =>{ <PostCard  key={index}; ...}} */}
                {posts.map((post,index) => ( //post is one item from posts, map - izsauc funciju ar rezult'atu katram masiva elementam vienu reizi
                    <PostCard
                        key={index} 
                        title={post.title}
                        description={post.description}
                        image={post.image}
                    />
                ))}
                {/* Second 
                <PostCard 
                    title="Second title"
                    description="bla-bla-bla"
                    image={placeHolderImage}
                />
                <PostCard />
                <PostCard />
                <PostCard /> */}

                {/* First: <Card className="mt-5">
                    {/*<CardImg top width="100%" src="http://..." alt="Card image cap" />*/}
                 {/*    <CardImg top width="100%" src={placeHolderImage} alt="Card image cap" />
                    <CardBody>
                        <CardTitle  className="Posts__card-title">First</CardTitle>
                        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                        <Button>Button</Button>
                    </CardBody>
                </Card>
                <Card className="mt-5">
                    {/*<CardImg top width="100%" src="http://..." alt="Card image cap" />*/}
                 {/*   <CardImg top width="100%" src={placeHolderImage} alt="Card image cap" />
                    <CardBody>
                        <CardTitle  className="Posts__card-title">Second</CardTitle>
                        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                        <Button>Button</Button>
                    </CardBody>
                </Card>
                */}
            </div>
        )
    }
}

export default Posts;