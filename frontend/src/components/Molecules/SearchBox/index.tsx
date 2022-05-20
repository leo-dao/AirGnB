import React from "react";

interface Props {
    text: string;
    type: string;
    icon: React.ReactElement;
    onClick?: () => void;
}

const SearchBox = (props: Props) => {
    return (
        <div style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-evenly",
            width: "100%",
            backgroundColor: "#FAFAFA",
            border: "1px solid #ccc",
            borderRadius: "5px",
            fontSize: "15px",
            cursor: "pointer",
        }}>
            <input
                type={props.type}
                value={props.text}
                style={{ border: 'none', backgroundColor: "#FAFAFA", cursor: "pointer", }}>
            </input>

            <div style={{
                fontSize: '120%',
                marginLeft: '10px',
                marginRight: '10px',

            }} onClick={props.onClick}>  {props.icon}</div>
        </div >
    )
}
export default SearchBox;