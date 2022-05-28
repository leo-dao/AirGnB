import React from "react";
import StyledPrice from "./Styled";

export interface PriceProps {
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