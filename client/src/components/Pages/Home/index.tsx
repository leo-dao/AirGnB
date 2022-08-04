import React from "react";
import Search from "../../Organisms/Search";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    height: 100%;
    `;

const Title = styled.h1`
    font-weight: bold;
    text-align: center;
    font-size: 2.5rem;
    text-transform: none;
    max-width: 85%;
    //background-image: url();
    //background-repeat: no-repeat;
    ;
`

const Subtitle = styled.h3`
    font-size: 1.3rem;
    text-align: center;
    padding: 10px;
    margin-bottom: 40px;
`

const Home = () => {

    return (
        <Container>
            <Title>Lend or borrow musical instruments</Title>
            <Subtitle>Connect with local musicians and trade gear </Subtitle>
            <Search />
        </Container >
    )
};

export default Home;