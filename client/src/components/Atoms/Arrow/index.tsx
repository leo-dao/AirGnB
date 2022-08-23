import React from "react";
import styled from 'styled-components';
import { RightOutlined } from "@ant-design/icons";

const StyledDirection = styled(RightOutlined)`
    font-size: 20px;
    color: white;
    border-radius: 50%;
    padding: 5px;
    background-color: #a2a1a1;
    opacity: 0.5;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    &:hover {
        opacity: 0.8;
    }

    ${(props: { direction: string }) =>
        props.direction === 'goLeft' && `
        transform: rotate(180deg);
    `}
    
`;

interface ArrowProps {
    direction: () => void;
}

const Arrow = (props: ArrowProps) => {

    const direction = props.direction.name;

    return (
        <StyledDirection
            direction={direction}
            onClick={props.direction} />
    )
}

export default Arrow;