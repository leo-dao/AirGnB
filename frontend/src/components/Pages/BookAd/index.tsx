import React from "react";
import styled from "styled-components";
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

interface State {
    totalPrice: number;
}

const BookAd = () => {

    let params = useParams();

    let adId = params.adId;
    let startDate = params.startDate!;
    let endDate = params.endDate!;

    const location = useLocation();
    const state = location.state as State;
    const { totalPrice } = state;


    const ad = adData.find(ad => ad.adId === adId);

    return (
        <Container>
            <h1>Overview:</h1>
            <Divider>
                <AdInfo>
                    {ad?.title}
                    <Image src={ad?.adImages[0].img} />
                    <Dates>
                        <DateStyled>{startDate}</DateStyled>
                        <LineOutlined style={{ fontSize: "25px" }} />
                        <DateStyled>{endDate}</DateStyled>
                    </Dates>
                </AdInfo>
                <Price>
                    {ad?.price}
                    {totalPrice}
                </Price>
            </Divider>
        </Container>
    )
};

export default BookAd;