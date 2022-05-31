import React from "react";
import AdCardList from "../../Organisms/AdCardList";
import AdCardProps from "../../Organisms/AdCard/interfaces";
import Search from "../../Organisms/Search";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    `;

interface Props {
    data: AdCardProps[],
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