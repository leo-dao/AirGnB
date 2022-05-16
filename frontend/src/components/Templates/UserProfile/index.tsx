import React from "react";
import { useParams } from "react-router-dom";
import User from "../../Molecules/UserInfo/Interfaces";
import UserInfo from "../../Molecules/UserInfo"
import Error from "../../Molecules/Error/index";
import AdCardList from "../../Organisms/AdCardList/index";
import AdCardProps from "../../Molecules/AdCard/interfaces";

interface UserProfileProps {
    data: User[];
    ads: AdCardProps[];
}


const UserProfile = (props: UserProfileProps) => {

    let params = useParams();

    const currentUser = (props.data.filter(user => user.userId === params.userId))[0];   // Getting the correct user based on id from the url

    if (!currentUser) {
        return <Error msg="Sorry, this user does not exist" />
    }

    return (
        <div>
            <UserInfo
                name={currentUser.name}
                avatar={currentUser.avatar}
                numAds={currentUser.numAds}
                userId={currentUser.userId} />

            <AdCardList data={props.ads} />

        </div>
    )
}

export default UserProfile;