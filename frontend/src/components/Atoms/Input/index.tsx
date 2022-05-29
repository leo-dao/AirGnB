import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 80%;
    padding: 10px;
    margin: 10px;
    border: none;
    outline: none;
    border-bottom: 1px solid #ccc;
    &:focus {
        border-bottom: 1px solid #000;
        ::placeholder {
            transition: all 0.3s ease-in-out;
            color: #ccc;
        }
    }
`

interface InputProps {
    type?: string,
    placeholder?: string,
}

const Input = (props: InputProps) => {
    return (
        <StyledInput type={props.type} placeholder={props.placeholder} />
    )
}

export default Input;