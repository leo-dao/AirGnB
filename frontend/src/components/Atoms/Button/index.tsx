import React from "react";
import { Link } from "react-router-dom";

interface Props {
    text?: string,
    component?: React.ReactNode,
    width?: number,
    height?: number,
    fontSize?: number,
    backgroundColor?: string,
    color?: string,
    onClick?: () => void,
    goTo?: string,
}

const Button = (props: Props) => {

    let button =
        <div style={{
            borderRadius: "10px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            boxShadow: "0px 0px 1px black",
            cursor: "pointer",
            fontSize: props.fontSize ? props.fontSize : "15px",
            width: props.width ? props.width : '100px',
            height: props.height ? props.height : '30px',
            backgroundColor: props.backgroundColor ? props.backgroundColor : '#0A6EDD',
            color: props.color ? props.color : 'white',
        }} onClick={props.onClick}>
            {props.text} {props.component}
        </div>

    if (props.goTo) {   // add link to a page if goTo is provided
        button = <Link to={props.goTo}>{button}</Link>;
    }

    return (button);
}

export default Button;