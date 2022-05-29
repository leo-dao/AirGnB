import React from "react";
import styled from "styled-components";

const StyledPrice = styled.div`
    color: white;
    background-color: #6699cc;
    border-radius: 5px;
    width: 35%;
    text-align: center;
    padding: ${(props: PriceProps) => props.type === "card" ? "5px" : "10px"};
    font-size: ${(props: PriceProps) => props.type === "card" ? "13px" : "20px"};
`;

interface PriceProps {
    price?: number;
    width?: number;
    type?: string;
}

const Price = (props: PriceProps) => {
    return (
        <StyledPrice type={props.type}>
            <b>{props.price}$</b>/week
        </StyledPrice>
    )
}
export default Price;