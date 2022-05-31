import React from "react";
import { useParams } from "react-router-dom";
import AdCardProps from "../../Organisms/AdCard/interfaces";
import Error from "../../Molecules/Error/index";
import AdPhotos from "../../Organisms/AdPhotos";
import UserInfo from "../../Molecules/UserInfoCard/index";
import UserContact from "../../Organisms/UserContact/index";
import Price from "../../Atoms/Price/index";
import styled from "styled-components";

const CenterContainer = styled.div`
    display: flex;
    flex-direction: column;
    `;

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`

const InfoContainer = styled.div`
    display: flex;  
    flex-direction: column;
    margin-left: 30px;
    border: 0.5px solid black;
    border-radius: 10px;
    background-color: white;
    padding: 20px;
    width: 400px;
`

const TopInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    justify-content: center;
    width: 100%;
`
const UserInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    justify-content: space-evenly;
    margin-top: 30px;
    border-top: 0.5px solid black;
    height: 100%;
`

interface Props {
    data: AdCardProps[],
}

const AdProfile = (props: Props) => {

    let params = useParams();

    const currentAd = (props.data.filter(ad => ad.adId === params.adId))[0];

    if (!currentAd) {
        return <Error msg="Sorry, this ad does not exist" />
    }

    return (
        <CenterContainer>
            <Container>
                <AdPhotos
                    adId={currentAd.adId}
                    user={currentAd.user}
                    adImages={currentAd.adImages}
                    title={currentAd.title}
                    description={currentAd.description}
                    price={currentAd.price}
                />
                <InfoContainer>
                    <TopInfoContainer>
                        <h1>{currentAd.title}</h1>
                        <p>{currentAd.description}</p>
                        <Price price={currentAd.price} width={200} />
                    </TopInfoContainer>

                    <UserInfoContainer>
                        <UserInfo
                            userId={currentAd.user.userId}
                            avatar={currentAd.user.avatar}
                            name={currentAd.user.name}
                            rating={currentAd.user.rating}
                            numRatings={currentAd.user.numRatings}
                            location={currentAd.user.location}
                            clickAble={true}
                            fontSize={20}
                            avatarSize={80}
                        />
                        <UserContact />

                    </UserInfoContainer>
                </InfoContainer>
            </Container>
        </CenterContainer >
    )
};

export default AdProfile;