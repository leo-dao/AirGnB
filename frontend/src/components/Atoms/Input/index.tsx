import React from "react";
import StyledInput from "./Styled";

interface InputProps {
    type?: string,
}

const Input = (props: InputProps) => {
    return (
        <StyledInput type={props.type} />
    )
}

export default StyledInput;