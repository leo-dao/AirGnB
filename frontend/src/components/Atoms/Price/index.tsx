import React from "react";

interface Props {
    price: number;
}

const Price = (props: Props) => {
    return (
        <div style={{
            backgroundColor: "#9729A8",
            fontSize: "14px",
            fontWeight: "bold",
            borderRadius: "5px",
            color: "white",
            padding: "5px",
        }}>
            {props.price} $ a week
        </div>
    )
}
export default Price;