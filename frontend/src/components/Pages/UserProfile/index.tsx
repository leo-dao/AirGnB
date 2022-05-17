import React from "react";
import { useParams } from "react-router-dom";
import User from "../../Molecules/UserInfo/interfaces";
import UserInfo from "../../Molecules/UserInfo"
import Error from "../../Molecules/Error/index";
import AdCardList from "../../Organisms/AdCardList/index";
import AdCardProps from "../../Molecules/AdCard/interfaces";
import { addSyntheticLeadingComment } from "typescript";

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

    const userAds = props.ads.filter(ad => ad.user.userId === currentUser.userId); // Getting the ads of the user

    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
        }}>
            <div style={{
                display: "flex",
                justifyContent: "center",
                width: "70%",
                borderRadius: "10px",
                boxShadow: "0px 0px 1px black",
                backgroundColor: "white"
            }}>
                <UserInfo
                    name={currentUser.name}
                    avatar={currentUser.avatar}
                    numAds={currentUser.numAds}
                    userId={currentUser.userId} />
            </div>
            <div style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                marginTop: "50px",
            }}>
                <h1>Available ads</h1>
            </div>
            <div style={{
                width: "100%",
                marginTop: "30px",
            }}>
                <AdCardList data={userAds} />
            </div>
        </div >

    )
}

export default UserProfile;