import React, { useEffect, useContext } from "react";
import { AuthContext } from "../../../authContext";
import { useParams } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";
import Error from "../../Molecules/Error/index";
import { Ad } from "../../../utils/interfaces";
import styled from "styled-components";
import Avatar from "antd/lib/avatar/avatar";
import { Rate } from "antd";
import axios from "axios";
import Button from "../../Atoms/Button";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Background = styled.div`
    background-image: url('https://img.freepik.com/free-vector/white-abstract-background_23-2148810113.jpg?w=2000');
    width: 100%;
    height: 250px;
`;

const Info = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    right: 350px;
    top: -50px;
    border-radius: 10px;
    background-color: white;
    padding: 40px 50px;
    box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.5);

    @media (max-width: 900px) {
        right: 0;
    }
`;

const Name = styled.h1`
    font-weight: bold;
    font-size: 30px;
    margin-top: 20px;
`;

const Location = styled.h2`
    font-size: 15px;
`;

const Listings = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const userProfileById = (userId: string) => {
    return axios.get('/getUsers').then((res) => {
        // @ts-ignore
        return res.data.filter(user => user._id === userId)[0]
    })
}

const GET_USER = gql`
    query user($id: String!) {
        user(id: $id) {
            email
        }
    }
`;

const GET_ADS = gql`
    query ads($id: String!) {
        ads(id: $id) {
            id
            }
        }
`;

const UserProfile = () => {

    let params = useParams();
    const context = useContext(AuthContext);

    const { loading, error, data } = useQuery(GET_USER, {
        variables: { id: params.userId },
    });

    const profileUser = data;

    // Getting the current user in session
    const token = context.user;

    // Checking if the user page is the current user
    const [isLoggedUser, setIsLoggedUser] = React.useState(true);

    useEffect(() => {

        if (token) {
            setIsLoggedUser(Object.values(token)[0] === params.userId);
        }

    }, [params.userId]);

    // GET ALL ADS BY USER ID

    if (!profileUser) {
        return <Error msg="Sorry, this user does not exist" />
    }

    let userAds: Ad[] = [];
    const numAds = userAds.length;
    const ad = numAds === 1 ? "ad" : "ads";
    const signUpDateString = (new Date(profileUser.createdAt)).toLocaleDateString('en-US', { month: 'long', year: 'numeric' });

    return (
        <Container>
            <Background />
            <Info>
                <Avatar src={profileUser.avatar} size={100} />
                <Name>{profileUser.username}</Name>
                <Location>{profileUser.location}</Location>
                <p>Member since {signUpDateString}</p>
                <Rate defaultValue={profileUser.rating} disabled />
                <p>{profileUser.numRatings} {profileUser.numRatings === 1 ? "rating" : "ratings"}</p>


                {/* <div style={{
                    flexDirection: 'column',
                }}>
                    Verified information:
                    <p>{currentUser.verified.identity ? "Verified" : 'Not verified'}</p>
                    <p>{currentUser.verified.phone ? "Verified" : "Not verified"}</p>
                    <p>{currentUser.verified.email ? "Verified" : "Not verified"}</p>
                </div> */}

                {isLoggedUser &&
                    <Button goTo="/account-settings" text="Edit profile" />
                }

            </Info>
            <Listings>
                <p> {profileUser.username} has {numAds} available {ad}</p>
            </Listings>
        </Container >

    )
}

export default UserProfile;