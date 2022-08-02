import React from "react";
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const StyledButton = styled.button.attrs((props: ButtonProps) => props)`
    background: #0A6EDD;
    border-radius: 40px;
    box-sizing: border-box;
    color: #FFFFFF;
    cursor: pointer;
    font-size: 16px;
    font-weight: 700;
    line-height: 24px;
    opacity: 1;
    outline: 0 solid transparent;
    padding: 8px 18px;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    width: fit-content;
    word-break: break-word;
    border: 0;
    &:hover {
        transform: translateY(-0.5px) scale(1.03);
        background-color: ${props => props.secondary ? 'whitesmoke' : '#085bba'};
    }
    &:disabled {
        background-color: #d4d1d1;
        border: none;
        cursor: not-allowed;
        color: black;
        transform: none;
        opacity: 0.5;
    }
    & > * {
        color: white;
    }

    ${(props: ButtonProps) =>
        props.header &&
        css`
    background: none;
    border-radius: 0px;
    font-size: 18px;
    &:hover {
        background: none;
        border-bottom: 1px solid #d4d1d1;
    };
    `}

    ${(props: ButtonProps) =>
        props.secondary &&
        css`
        background-color: #e9e9e9;
        color: black;
        & > * {
            color: #0A6EDD;
        }
        `}

        ${(props: ButtonProps) =>
        props.tertiary &&
        css`
        font-size: 15px;
        width: 50px;
        height: 30px;
        background-color: white;
        border: 1px solid black;
        color: black;
        border-radius: 3px;
        &:hover {
            transform: none;
            background-color: whitesmoke;
            color: black;
        }
        `}
`;

interface ButtonProps {
    text?: string,
    component?: React.ReactNode,
    disabled?: boolean,
    onClick?: () => void,
    goTo?: string,
    state?: any,
    secondary?: boolean,
    tertiary?: boolean,
    type?: string,
    header?: boolean
}

const Button = (props: ButtonProps) => {

    var onClick = props.onClick

    if (props.disabled) {
        onClick = () => { }
    }

    let button =
        <StyledButton
            onClick={onClick}
            secondary={props.secondary}
            tertiary={props.tertiary}
            type={props.type}
            header={props.header}
        >
            {props.text} {props.component}
        </StyledButton>;

    if (props.goTo) {
        button = (
            <Link
                to={`${props.goTo}`}
                state={props.state}
            >
                {button}
            </Link>
        )
    }
    return (button)
}

export default Button;