import React from "react";

interface Props {
    text?: string,
    component?: React.ReactNode,
    width?: number,
    height?: number,
    fontSize?: number,
    backgroundColor?: string,
    disabled?: boolean,
    color?: string,
    borderRadius?: number,
    onClick?: () => void,
    goTo?: string,
}

const Button = (props: Props) => {

    var onClick = props.onClick

    if (props.disabled) {
        onClick = () => { }
    }

    const style = {
        borderRadius: props.borderRadius ? props.borderRadius : "10px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        boxShadow: "0px 0px 1px black",
        cursor: props.disabled ? "not-allowed" : "pointer",
        width: props.width ? `${props.width}%` : "5em",
        height: props.height ? `${props.width}%` : "1.7em",
        fontSize: props.fontSize,
        border: "0.8px solid #0A6EDD",
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
        button = <div style={style} onClick={onClick}> {props.text} {props.component}</div>
    }


    return (button);
}

export default Button;