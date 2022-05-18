import React from "react";

interface Props {
    image: string
}

const CardCover = (props: Props) => {

    return (
        <img src={props.image} style={{
            borderTopLeftRadius: '10px',
            borderTopRightRadius: '10px',
            boxShadow: '0px 0px 10px rgba(0,0,0,0.5)',
            objectFit: 'cover',
            height: "150px",
            width: "250px",
        }}></img>
    )
}

export default CardCover;