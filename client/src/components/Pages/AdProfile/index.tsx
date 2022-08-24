import React, { useState } from "react";
import { useParams } from "react-router-dom";
import type { AdCardProps } from "../../Organisms/AdCard/index";
import Error from "../../Molecules/Error/index";
import AdPhotos from "../../Organisms/AdPhotos";
import UserInfo from "../../Molecules/UserInfoCard/index";
import Availability from "../../Molecules/Availability";
import Description from "../../Molecules/Description";
import Button from "../../Atoms/Button";
import useFindUser from "../../../hooks/useFindUser";
import useFindImages from "../../../hooks/useFindImages";
import AdInfo from "../../Organisms/AdInfo";
import axios from "axios";
import { Ad } from "../../../utils/interfaces";
import styled from "styled-components";

// Testing
import testAds from "../../../utils/testData/ads";
import TopLink from "../../../utils/TopLink";

const Title = styled.h1`
    font-size: 35px;
    letter-spacing: 0.4px;

    @media (max-width: 1200px) {
        font-size: 25px;
    }
`

const Container = styled.div`
    display: flex;
    flex-direction: row;
    margin-left: 20px;

    @media (max-width: 850px) {
        flex-direction: column;
    }
`

const InfoContainer = styled.div`
    display: flex;  
    flex-direction: column;
    margin-left: 70px;
    justify-content: center;
    gap: 20px;

    @media (max-width: 850px) {
        display: flex;
        margin-top: 20px;
        margin-left: 0px;
    }
`

const Policy = styled.div`
    color: grey;
    font-size: 14px;
`;

const StyledLink = styled(TopLink)`
    color: grey;
    text-decoration: underline;
    margin-left: 4px;
`;

const TotalPrice = styled.b`
    font-size: 25px;
`


const AdProfile = () => {

    let user: any = useFindUser();

    let params = useParams();

    const [ads, setAds] = React.useState<Ad[]>([]);
    React.useEffect(() => {
        axios.get('/getAds')
            .then(function (res) {
                setAds(res.data);
            })
    }, [])

    //const currentAd = (ads.filter(ad => ad._id === params._id))[0];

    // Testing
    const currentAd = testAds[4];

    const [startDate, setStartDate] = useState(new Date());

    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const [endDate, setEndDate] = useState(tomorrow);

    if (!currentAd) {
        return <Error msg="Sorry, this ad does not exist" />
    }

    var numDays = Math.ceil((endDate.getTime() - startDate.getTime()) / (1000 * 3600 * 24));
    var totalPrice = currentAd.price * numDays;
    var price = (`${totalPrice.toString()}$`);


    var booking = "/booking/" + currentAd._id + "+" + startDate.toISOString().slice(0, 10) + "+" + endDate.toISOString().slice(0, 10);
    var signIn = '/sign-in';

    var url = user ? booking : signIn;

    return (
        <div>
            <div>Back to search</div>
            <Container>
                <AdPhotos
                    _id={currentAd._id}
                    user={currentAd.user}
                    images={currentAd.images}
                    title={currentAd.title}
                    description={currentAd.description}
                    price={currentAd.price}
                />
                <InfoContainer>
                    <Title>{currentAd.title}</Title>
                    <TotalPrice>{price}</TotalPrice>
                    <Policy>
                        Learn more about our insurance policy
                        <StyledLink to="/insurance">
                            here
                        </StyledLink>
                    </Policy>
                    <Availability
                        startDate={startDate}
                        endDate={endDate}
                        setStartDate={setStartDate}
                        setEndDate={setEndDate}
                    />
                    <Button
                        disabled={endDate.getTime() === startDate.getTime()}
                        text="Continue"
                        goTo={url}
                        state={{
                            totalPrice: totalPrice,
                            numDays: numDays,
                        }}
                    />
                </InfoContainer>
            </Container>
        </div >
    )
};

export default AdProfile;

// check which div can be removed

// top box: price total, start date, end date, then add rent (continue) button + add to favorites button
// bottom box: Info: Price/day, Description, Smaller user contact