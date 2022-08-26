import React from "react";
import AdCardList from "../../Organisms/AdCardList";
import { Ad } from "../../../utils/interfaces";
import Search from "../../Organisms/Search";
import styled from "styled-components";
import SearchFilters from "../../Organisms/SearchFilters";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    `;

const SearchContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 1rem;
    background-color: white;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
`;

// have the filters modify the query in the params

const Listings = () => {

    return (
        <Container>
            <SearchContainer>
                <Search />
                <SearchFilters />
            </SearchContainer>
            <AdCardList
                inputType="search"
            />
        </Container>
    )
}

export default Listings;