import React from "react";
import { useParams } from "react-router-dom";
import User from "../../Molecules/UserInfo/interfaces";
import UserInfo from "../../Molecules/UserInfo"
import Error from "../../Molecules/Error/index";
import AdCardList from "../../Organisms/AdCardList/index";
import { Ad } from "../../../interfaces";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    `

const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 70%;
    border-radius: 10px;
    box-shadow: 0px 0px 1px black;
    background-color: white;
`

interface UserProfileProps {
    data: User[];
    ads: Ad[];
}

const UserProfile = (props: UserProfileProps) => {

    let params = useParams();

    const currentUser = (props.data.filter(user => user._id === params.userId))[0];   // Getting the correct user based on id from the url

    if (!currentUser) {
        return <Error msg="Sorry, this user does not exist" />
    }

    const userAds = props.ads.filter(ad => ad.user._id === currentUser._id);
    const numAds = userAds.length;
    const ad = numAds === 1 ? "ad" : "ads";

    return (
        <Container>
            <InfoContainer>
                <UserInfo
                    name={currentUser.name}
                    avatar={currentUser.avatar}
                    _id={currentUser._id}
                    location={currentUser.location}
                    rating={currentUser.rating}
                    numRatings={currentUser.numRatings}
                />
            </InfoContainer>
            <h1> {numAds} available {ad}</h1>
            <AdCardList
                inputType="user"
                data={userAds} />
        </Container >

    )
}

export default UserProfile;