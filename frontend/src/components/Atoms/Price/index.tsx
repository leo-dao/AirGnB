import React from "react";
import StyledPrice from "./Styled";

interface Props {
    price: number;
    width?: number;
}

const Price = (props: Props) => {
    return (
        <StyledPrice >
            <b>{props.price}$</b>/week
        </StyledPrice>
    )
}
export default Price;