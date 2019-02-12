import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import placeHolderImage from "../../assets/image-placeholder.svg";
import UserCard from "../UserCard/UserCard"
import "./UserList.css";

const users = [
    {name:"user name",description:"some description of user ",image:placeHolderImage},
    {name:"user name",description:"some description of user ",image:placeHolderImage},
    {name:"user name",description:"some description of user ",image:placeHolderImage}
];

class UserList extends Component{
    // copies the original constructor from component
    // it will be react component
    render(){
        return (
            <div className="UserList">          
                {users.map(user =>( 
                    <UserCard 
                        name={user.name}
                        description={user.description}
                        image={user.image}
                    />
                ))}
            </div>
        )
    }
}

export default UserList;
