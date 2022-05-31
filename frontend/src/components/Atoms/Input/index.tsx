import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
    display: flex;
    align-items: center;
    background-color: transparent;
    width: 100%;
    height: 3em;
    padding: 10px;
    margin: 10px;
    border: none;
    outline: none;
    border-bottom: 1px solid #ccc;
    &:focus {
        ::placeholder {
            transition: all 0.3s ease-in-out;
            color: #ccc;
            transform: translateY(-1.5em);
            font-size: 0.8em;
        }
    }
`

interface InputProps {
    type?: string,
    placeholder?: string,
    required?: boolean
}

const Input = (props: InputProps) => {
    return (
        <StyledInput type={props.type} placeholder={props.placeholder} required={props.required} />
    )
}

export default Input;