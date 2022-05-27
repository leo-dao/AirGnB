import React from "react";
import StyledArrow from "./Styled";

interface ArrowProps {
    direction: () => void;
    image: React.ReactNode;
}

const Arrow = (props: ArrowProps) => {
    return (
        <StyledArrow onClick={props.direction}>
            {props.image}
        </StyledArrow>
    )
}

export default Arrow;