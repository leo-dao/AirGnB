import React from "react";
import Search from "../../Organisms/Search";
import styled from "styled-components";
import VideoBg from "../../Organisms/VideoBg";


const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    `;

const Main = styled.div`
    position: absolute;
    margin-top: 100px;
    top:0;
    left: 0;
    right: 0;
    text-align: center;
    z-index: 1; 
    display: flex;
    flex-direction: column;
    text-align: center;
    user-select: none;
`

const Title = styled.h1`
    font-weight: bold;
    font-size: 3rem;
    color: white;
    margin-bottom: 0.7rem;
    ;
`

const Subtitle = styled.h2`
    font-size: 2rem;
    padding: 10px;
    color: #f9f9f9;
    margin-bottom: 6rem;
`

const Description = styled.p`
    margin-top: 20%;
    font-size: 20px;
    text-align: center;
    color: white;
`

const Home = () => {

    return (
        <Container>
            <VideoBg />
            <Main>
                <Title>Lend or borrow musical instruments</Title>
                <Subtitle>Connect with local musicians and trade gear </Subtitle>
                <Search />
            </Main>
        </Container >
    )
};

export default Home;