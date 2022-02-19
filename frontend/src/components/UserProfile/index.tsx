import React from "react";
import { useParams } from "react-router-dom";
import { User } from "../AdCard"
import { Avatar } from 'antd';
import Error from "../Error/index";

interface UserProfileProps {
    data: User[];
}

const UserProfile = (props: UserProfileProps) => {

    let params = useParams();

    // Best way of getting all the ad cards of the user?

    const currentUser = (props.data.filter(user => user.userId === params.userId))[0];   // Getting the correct user based on id from the url

    if (!currentUser) {
        return <Error msg="Sorry, this user does not exist" />
    }

    return (
        <div>
            <Avatar size={64} src={currentUser.avatar} />
            <h2>{currentUser.name}</h2>
        </div>
    )
}

export default UserProfile;