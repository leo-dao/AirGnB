import React from "react";
import Search from "../../Organisms/Search";
import styled from "styled-components";
import guitar from '../../../assets/guitar.mp4';
import VideoLoop from "../../Organisms/VideoLoop";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    height: 100%;
    `;

const ImageContainer = styled.div`
    //background-image: 
        //linear-gradient(to bottom, rgba(255,255,0,0.5), rgba(0,0,255,0.5)),
      //  url('https://images.squarespace-cdn.com/content/v1/59734746914e6b7850352b3f/1536496874176-3MQNZBHR7583544CHLFS/Guitar+Horizontal+Icon.jpg');
    width: 100%;

`
const Text = styled.div`
    position: absolute;
    margin-top: 100px;
    top:0;
    left: 0;
    right: 0;
    text-align: center;
    z-index: 0;
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
            <ImageContainer>
                <VideoLoop src={guitar} />
                <Text>
                    <Title>Lend or borrow musical instruments</Title>
                    <Subtitle>Connect with local musicians and trade gear </Subtitle>
                </Text>
            </ImageContainer>
            <Search />
        </Container >
    )
};

export default Home;