import React from "react";
import StyledInput from "./Styled";

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