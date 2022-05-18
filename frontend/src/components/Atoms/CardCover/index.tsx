import React from "react";

interface Props {
    image: string
}

const CardCover = (props: Props) => {

    return (
        <img src={props.image} style={{
            borderTopLeftRadius: '10px',
            borderTopRightRadius: '10px',
            objectFit: 'cover',
            height: "180px",
            width: "250px",
        }}></img>
    )
}

export default CardCover;