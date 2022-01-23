import React from "react";
import { Routes, Route, useParams } from "react-router-dom";


interface UserProfileProps {
    //userId: string,
}

const UserProfile = (props: UserProfileProps) => {

    let params = useParams();
    return (
        <div>
            {params.userId} who is dumb
        </div>
    )
}

export default UserProfile;