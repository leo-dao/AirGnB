import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { LineOutlined } from "@ant-design/icons";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 15%;
`

const Dates = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap:5px;
`

const DateStyled = styled.div`
    border: 1px solid black;
    padding: 5px;
    text-align: center;
    border-radius: 3px;
    width: 95px;
`

const BookAd = () => {

    const { adId, startDate, endDate } = useParams();
    // get rid of timezone information
    const start = startDate?.slice(0, 10);
    const end = endDate?.slice(0, 10);


    return (
        <Container>
            <h1>Overview:</h1>
            <Dates>
                <DateStyled>{start}</DateStyled>
                <LineOutlined style={{ fontSize: "25px" }} />
                <DateStyled>{end}</DateStyled>
            </Dates>

        </Container>
    )
};

export default BookAd;