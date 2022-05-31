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

const Home = () => {
    return (
        <Container>
            <h1>Lend or borrow musical instruments</h1>
            <Search />
        </Container >
    )
};

export default Home;