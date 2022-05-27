import React from "react";
import StyledButton from "./Styled";


export interface ButtonProps {
    text?: string,
    component?: React.ReactNode,
    backgroundColor?: string,
    disabled?: boolean,
    borderRadius?: number,
    onClick?: () => void,
    goTo?: string,
    secondary?: boolean,
}

const Button = (props: ButtonProps) => {

    var onClick = props.onClick

    if (props.disabled) {
        onClick = () => { }
    }

    let button;

    if (props.goTo) {
        button = (
            <StyledButton secondary={props.secondary}>
                <a href={`${props.goTo}`} style={{ color: "inherit" }}>
                    {props.text}
                    {props.component}
                </a>
            </StyledButton>
        )
    }
    else {
        button =
            <StyledButton onClick={onClick} secondary={props.secondary}>
                {props.text} {props.component}
            </StyledButton>
    }


    return (
        button
    )
}

export default Button;