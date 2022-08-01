import React from "react";
import AdCardList from "../../Organisms/AdCardList";
import { Ad } from "../../../interfaces";
import Search from "../../Organisms/Search";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    `;


const Catalog = () => {

    return (
        <Container>
            <Search />
            <AdCardList
                inputType="search"
            />
        </Container>
    )
}

export default Catalog;