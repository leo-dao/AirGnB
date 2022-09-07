import React from "react";
import styled from "styled-components";


const OldStyledInput = styled.input`
    display: flex;
    align-items: center;
    background: none;
    width: 100%;
    height: 3em;
    border: none;
    outline: none;
    font-size: 14px;
    border-bottom: 1px solid grey;
    color: white;
    ::placeholder {
            color: white;
            position: relative;
            left: 10px;
        }

    &:hover{
        transition: all 0.3s ease-in-out;
        border-color: #1eb5f0;
    }
    &:focus {
        ::placeholder {
            transition: all 0.3s ease-in-out;
            color: #ccc;
            transform: translateY(-1.5em);
            font-size: 0.8em;
        }
    }
`;

const StyledInput = styled.input`
    width: 100%;
    height: 40px;
    border-radius: 5px;
    border: 1px solid #ccc;
    padding: 0 10px;
    outline: none;
    margin: 10px;
`;

interface InputProps {
    type?: string,
    placeholder?: string,
    required?: boolean,
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    min?: number;
    name?: string;
}

const Input = (props: InputProps) => {

    return (
        <StyledInput
            type={props.type}
            placeholder={props.placeholder}
            required={props.required}
            onChange={props.onChange}
            minLength={props.min}
            name={props.name}
        />
    )
}

export default Input;