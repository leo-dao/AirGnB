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

interface Props {
    data: Ad[],
}

const Catalog = (props: Props) => {

    return (
        <Container>
            <Search />
            <AdCardList
                inputType="search"
                data={props.data} />
        </Container>
    )
}

export default Catalog;