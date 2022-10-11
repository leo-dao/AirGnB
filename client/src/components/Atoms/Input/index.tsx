import { ButtonProps } from "antd";
import React from "react";
import styled from "styled-components";
import ErrorMessage from "../ErrorMessage";


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

const StyledInput = styled.input.attrs((props: InputProps) => props)`
    width: 100%;
    height: 40px;
    border-radius: 5px;
    border: ${props => props.errorDisplay ? "2px solid red" : "1px solid #ccc"};
    padding: 0 10px;
    outline: none;
    margin: 5px;
`;

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    `;

interface InputProps {
    type?: string,
    placeholder?: string,
    required?: boolean,
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    min?: number;
    name?: string;
    error?: string;
    errorDisplay?: boolean;
}

const Input = (props: InputProps) => {

    const input = (
        <StyledInput
            id='input'
            type={props.type}
            placeholder={props.placeholder}
            required={props.required}
            onChange={props.onChange}
            minLength={props.min}
            onBlur={props.onBlur}
            name={props.name}
            // ignoring html error message
            onInvalid={(e: React.ChangeEvent<HTMLInputElement>) => {
                e.currentTarget.setCustomValidity(' ')
            }}
            errorDisplay={props.errorDisplay}
            error={props.error}
        />
    )

    // Input that supports error handling
    if (props.error !== undefined && props.errorDisplay !== undefined) {
        return (
            <Container>
                {input}
                <ErrorMessage
                    msg={props.error}
                    on={props.errorDisplay} />
            </Container>
        )
    }

    return input;
}

export default Input;