import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Error from "../../Molecules/Error/index";
import { Ad } from "../../../utils/interfaces";
import styled from "styled-components";
import Avatar from "antd/lib/avatar/avatar";
import { Rate } from "antd";
import axios from "axios";
import Button from "../../Atoms/Button";
import useFindLoggedUser from "../../../hooks/useFindLoggedUser";

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

const UserProfile = () => {

    let params = useParams();

    const [currentUser, setUser] = React.useState<any>();
    const [isLoggedUser, setIsLoggedUser] = React.useState<boolean>(false);

    const loggedUser = useFindLoggedUser();

    useEffect(() => {

        if (!params.userId) {
            setUser(undefined);
            return
        }
        userProfileById(params.userId)
            .then((u) => {
                setUser(u);
            }
            )
            .catch((err) => { console.log(err); setUser(undefined) })
    }, []);

    useEffect(() => {
        if (loggedUser) {
            setIsLoggedUser(loggedUser._id === currentUser._id)
        }
    }, [loggedUser])



    const [ads, setAds] = React.useState<Ad[]>([]);
    useEffect(() => {
        axios.get('/getAds')
            .then(function (res) {
                setAds(res.data);
            })
    }, [])

    if (!currentUser) {
        return <Error msg="Sorry, this user does not exist" />
    }

    const userAds = ads.filter(ad => ad.user._id === currentUser._id);
    const numAds = userAds.length;
    const ad = numAds === 1 ? "ad" : "ads";
    const signUpDateString = (new Date(currentUser.createdAt)).toLocaleDateString('en-US', { month: 'long', year: 'numeric' });

    return (
        <Container>
            <Background />
            <Info>
                <Avatar src={currentUser.avatar} size={100} />
                <Name>{currentUser.name}</Name>
                <Location>{currentUser.location}</Location>
                <p>Member since {signUpDateString}</p>
                <Rate defaultValue={currentUser.rating} disabled />
                <p>{currentUser.numRatings} {currentUser.numRatings === 1 ? "rating" : "ratings"}</p>


                {/* <div style={{
                    flexDirection: 'column',
                }}>
                    Verified information:
                    <p>{currentUser.verified.identity ? "Verified" : 'Not verified'}</p>
                    <p>{currentUser.verified.phone ? "Verified" : "Not verified"}</p>
                    <p>{currentUser.verified.email ? "Verified" : "Not verified"}</p>
                </div> */}

                {isLoggedUser &&
                    <Button goTo="edit-profile" text="Edit profile" />
                }

            </Info>
            <Listings>
                <p> {currentUser.name} has {numAds} available {ad}</p>
            </Listings>
        </Container >

    )
}

export default UserProfile;