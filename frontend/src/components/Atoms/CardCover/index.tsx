import React from "react";
import styled from "styled-components";

const StyledCardCover = styled.img`
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    object-fit: cover;
    height: 180px;
    width: 100%;
`;
interface Props {
    image: string
}

const CardCover = (props: Props) => {

    return (
        <StyledCardCover src={props.image} />
    )
}

export default CardCover;