import React from "react";
import styled from "styled-components";

const FilterContainer = styled.div.attrs((props: FilterInputProps) => props)`
    border-radius: 15px;
    padding: 10px;
    background-color: white;
    border: 1px solid #bcbcbc;
    display: flex;
    align-items: center;
    text-align: center;
    cursor: ${props => props.disabled ? "not-allowed" : "pointer"};
    width: 300px;
    max-width: 90vw;
    height: 50px;
    transition: all 0.2s ease-in-out;
    &:hover {
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    }

    .ant-select-selection-placeholder {
        color: grey;
    }
`;

const StyledContent = styled.div`
    margin-left: 10px;
    margin-right: 10px;
    width: 100%;
    font-size: 18px;
    overflow: hidden;
    color: black;
`;

const StyledLogo = styled.div`
    border-left: 1px solid #ccc;
    padding-left: 1vw;
    padding-right: 1vw;
    user-select: none;
`;

export interface FilterInputProps {
    content?: React.ReactNode;
    logo?: React.ReactNode;
    width?: string;
    disabled?: boolean;
}

const FilterInput = (props: FilterInputProps) => {
    return (
        <FilterContainer
            width={props.width}
            disabled={props.disabled}
        >
            <StyledContent>
                {props.content}
            </StyledContent>
            <StyledLogo>
                {props.logo}
            </StyledLogo>
        </FilterContainer>
    )
};

export default FilterInput