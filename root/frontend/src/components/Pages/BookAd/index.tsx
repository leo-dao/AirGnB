import React from "react";
import styled from "styled-components";
import Button from "../../Atoms/Button";
import { useParams } from "react-router-dom";
import { LineOutlined } from "@ant-design/icons";
import { adData } from "../../../fakeData";
import { useLocation } from "react-router-dom";

const Container = styled.div`
    display: flex;
    text-align: center;
    flex-direction: column;
`

const Divider = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-left: 15%;
    margin-right: 15%;
`

const AdInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
`

const Image = styled.img`
    max-width: 400px;
    max-height: 250px;
    object-fit: cover;
    border-radius: 10px;
`

const Price = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
`

const Dates = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 5px;
`

const DateStyled = styled.div`
    border: 1px solid black;
    padding: 5px;
    text-align: center;
    border-radius: 3px;
    width: 95px;
`

const ButtonContainer = styled.div`
    margin-top: 20px;
    display: flex;
    flex-direction: row;
    justify-content: center;
`

interface State {
    totalPrice: number;
    numDays: number;
}

const BookAd = () => {

    let params = useParams();

    let adId = params.adId;
    let startDate = params.startDate!;
    let endDate = params.endDate!;

    const location = useLocation();
    const state = location.state as State;
    const { totalPrice } = state;
    const { numDays } = state;


    const ad = adData.find(ad => ad.adId === adId);

    return (
        <Container>
            <h1>Overview:</h1>
            <Divider>
                <AdInfo>
                    <h2>{ad?.title}</h2>
                    <Image src={ad?.adImages[0].img} />
                </AdInfo>
                <Price>
                    <Dates>
                        <DateStyled>{startDate}</DateStyled>
                        <LineOutlined style={{ fontSize: "25px" }} />
                        <DateStyled>{endDate}</DateStyled>
                    </Dates>
                    <h3>{numDays} days * {ad?.price}$ = {totalPrice}$</h3>
                </Price>
            </Divider>
            <ButtonContainer>
                <Button
                    text="Pay"
                    width="180px"
                    height="60px"
                    fontSize="30px"
                    borderRadius="10px"
                />
            </ButtonContainer>
        </Container>
    )
};

export default BookAd;