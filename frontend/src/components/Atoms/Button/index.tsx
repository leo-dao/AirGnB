import React from "react";

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

    const style = {
        borderRadius: "10px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        boxShadow: "0px 0px 1px black",
        cursor: "pointer",
        width: `${props.width}%` || "100%",
        height: props.height || "100%",
        fontSize: props.fontSize,
        backgroundColor: props.backgroundColor ? props.backgroundColor : '#0A6EDD',
        color: props.color ? props.color : 'white',
    }

    let button;

    if (props.goTo) {
        button = (
            <a href={`${props.goTo}`} style={style}>{props.text} {props.component}</a>
        )
    }
    else {
        button = <div style={style} onClick={props.onClick}> {props.text} {props.component}</div>
    }


    return (button);
}

export default Button;