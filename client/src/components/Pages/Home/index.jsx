import React from "react";
import Search from "../../Organisms/Search";
import styled from "styled-components";
import guitar from '../../../assets/guitar.mp4';
import VideoLoop from "../../Organisms/VideoBg";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    `;

const Text = styled.div`
   /*  position: absolute;
    margin-top: 100px;
    top:0;
    left: 0;
    right: 0;
    text-align: center;
    z-index: 0; */

    display: flex;
    flex-direction: column;
    text-align: center;
    user-select: none;
`

const Title = styled.h1`
    font-weight: bold;
    font-size: 3rem;
    color: white;
    ;
`

const Subtitle = styled.h3`
    font-size: 1.3rem;
    padding: 10px;
    color: white;
`

const Home = () => {

    return (
        <Container>
            <Text>
                <Title>Lend or borrow musical instruments</Title>
                <Subtitle>Connect with local musicians and trade gear </Subtitle>
            </Text>

            <Search />
        </Container >
    )
};

export default Home;