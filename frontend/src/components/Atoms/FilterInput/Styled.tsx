import styled from "styled-components";
import { FilterInputProps } from ".";

export const FilterContainer = styled.div`
    border-radius: 15px;
    background-color: #FAFAFA;
    border: 1px solid #ccc;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    width: 25vw;
`;

export const StyledContent = styled.div`
    width: 100%;
    margin-right: 10px;
    margin-left: 10px;
`;

export const StyledLogo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-left: 1px solid #ccc;
    font-size: 16px;
    width: 30%;
    margin-right: 10px;
`;
