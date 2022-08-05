import React from "react";
import Search from "../../Organisms/Search";
import styled from "styled-components";
import guitar from '../../../assets/guitar.mp4';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    height: 100%;
    `;

const ImageContainer = styled.div`
    background-image: 
        //linear-gradient(to bottom, rgba(255,255,0,0.5), rgba(0,0,255,0.5)),
        url('https://images.squarespace-cdn.com/content/v1/59734746914e6b7850352b3f/1536496874176-3MQNZBHR7583544CHLFS/Guitar+Horizontal+Icon.jpg');
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    align-items: center;
    justify-content: center;
    width: 100%;
`

const Title = styled.h1`
    font-weight: bold;
    text-align: center;
    font-size: 3rem;
    text-transform: none;
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
            <ImageContainer>
                <video autoPlay loop muted>
                    <source src={guitar} type='video/mp4' />
                </video>
                <Title>Lend or borrow musical instruments</Title>
                <Subtitle>Connect with local musicians and trade gear </Subtitle>
            </ImageContainer>
            <Search />
        </Container >
    )
};

export default Home;