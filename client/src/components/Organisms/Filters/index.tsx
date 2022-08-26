import React from "react";
import styled from "styled-components";

const FilterContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
`;

const Title = styled.h1`
    font-size: 1.5rem;
    font-weight: bold;
    color: black;
    margin-bottom: 1rem;
`;


const Filters = () => {
    return (
        <div>
            <FilterContainer>
                <Title>Price</Title>
                Max
                <input />
                Min
                <input />
            </FilterContainer>
            <FilterContainer>
                <Title>Categories</Title>
            </FilterContainer>
            <button>Apply filters</button>
        </div>
    );
};

export default Filters;