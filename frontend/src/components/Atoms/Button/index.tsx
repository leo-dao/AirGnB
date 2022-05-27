import React from "react";
import StyledButton from "./Styled";


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

    let button;

    if (props.goTo) {
        button = (
            <StyledButton>
                <a href={`${props.goTo}`}>
                    {props.text}
                    {props.component}
                </a>
            </StyledButton>
        )
    }
    else {
        button = <StyledButton onClick={onClick}> {props.text} {props.component}</StyledButton>
    }


    return (
        button
    )
}

export default Button;