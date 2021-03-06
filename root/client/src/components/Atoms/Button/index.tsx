import React from "react";
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const StyledButton = styled.button.attrs((props: ButtonProps) => props)`
    background-color: ${(props: ButtonProps) => props.backgroundColor ? props.backgroundColor : '#506bcd'};
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 0px 1px black;
    font-size: ${props => props.fontSize ? props.fontSize : '20px'};
    width: ${props => props.width ? props.width : '120px'};
    height: ${props => props.height ? props.height : '40px'};
    border-radius: ${props => props.borderRadius ? props.borderRadius : '20px'};
    cursor: pointer;
    outline: none;
    border: 0.5px solid #0A6EDD;
    transition: all 0.3s ease-in-out;
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
        props.secondary &&
        css`
        background-color: white;
        color: #0A6EDD;
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
    width?: string,
    height?: string,
    fontSize?: string,
    component?: React.ReactNode,
    backgroundColor?: string,
    disabled?: boolean,
    borderRadius?: string,
    onClick?: () => void,
    goTo?: string,
    state?: any,
    secondary?: boolean,
    tertiary?: boolean,
    type?: string,
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
            width={props.width}
            height={props.height}
            disabled={props.disabled}
            fontSize={props.fontSize}
            borderRadius={props.borderRadius}
            type={props.type}
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