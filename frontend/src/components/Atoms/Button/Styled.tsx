import styled, { css } from 'styled-components';
import { ButtonProps } from '.';

const StyledButton = styled.button`
    background-color: #0A6EDD;
    color: white;
    text-align: center;
    white-space: nowrap;
    box-shadow: 0px 0px 1px black;
    font-size: 1.4em;
    width: 6em;
    min-width: 6em;
    height: 2.5em;
    border-radius: 5px;
    font-weight: bold;
    cursor: pointer;
    outline: none;
    border: 1px solid #0A6EDD;
    transition: all 0.3s ease-in-out;

    &:hover {
        transform: translateY(-1px) scale(1.03);
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
        & > * {
            color: #0A6EDD;
        }
        `}
`;

export default StyledButton;