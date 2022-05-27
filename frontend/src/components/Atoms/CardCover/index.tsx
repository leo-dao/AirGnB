import React from "react";
import StyledCardCover from "./Styled";

interface Props {
    image: string
}

const CardCover = (props: Props) => {

    return (
        <StyledCardCover src={props.image} />
    )
}

export default CardCover;