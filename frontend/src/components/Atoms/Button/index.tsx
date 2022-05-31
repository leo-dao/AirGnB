import React from "react";
import styled, { css } from 'styled-components';

const StyledButton = styled.button.attrs((props: ButtonProps) => props)`
    background-color: #0A6EDD;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 0px 1px black;
    font-size: 1.4em;
    width: ${props => props.width ? props.width : '6em'};
    height: 40px;
    border-radius: 20px;
    cursor: pointer;
    outline: none;
    border: 0.5px solid #0A6EDD;
    transition: all 0.3s ease-in-out;
    &:hover {
        transform: translateY(-0.5px) scale(1.03);
        background-color: ${props => props.secondary ? '#fafafa' : '#085bba'};
    }
    &:disabled {
        background-color: #ccc;
        cursor: not-allowed;
    }
    & > * {
        color: white;
    }

    ${(props: ButtonProps) =>
        props.secondary &&
        css`
        background: white;
        color: #0A6EDD;
        & > * {
            color: #0A6EDD;
        }
        `}
`;

interface ButtonProps {
    text?: string,
    width?: string,
    component?: React.ReactNode,
    backgroundColor?: string,
    disabled?: boolean,
    borderRadius?: number,
    onClick?: () => void,
    goTo?: string,
    secondary?: boolean,
    type?: string,
}

const Button = (props: ButtonProps) => {

    var onClick = props.onClick

    if (props.disabled) {
        onClick = () => { }
    }

    const type = props.type ? props.type : 'button'

    let button;

    if (props.goTo) {
        button = (
            <a href={`${props.goTo}`}>
                <StyledButton
                    secondary={props.secondary}
                    width={props.width}
                    type={type}
                >
                    {props.text}
                    {props.component}
                </StyledButton>
            </a>
        )
    }
    else {
        button =
            <StyledButton onClick={onClick} secondary={props.secondary} width={props.width}>
                {props.text} {props.component}
            </StyledButton>
    }


    return (
        button
    )
}

export default Button;