import React from "react";
import { useParams } from "react-router-dom";


interface UserProfileProps {
    //userId: string,
}

const UserProfile = (props: UserProfileProps) => {

    let params = useParams();
    return (
        <div>
            {params.userId}
        </div>
    )
}

export default UserProfile;