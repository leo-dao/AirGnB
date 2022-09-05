import React from "react";
import styled from "styled-components";
import Cross from '../../../assets/icons/cross.png';
import TopLink from "../../../utils/TopLink";

interface CloseProps {
    onClick?: () => void;
    to?: string;
    black?: boolean;
}

const StyledClose = styled.img.attrs((props: CloseProps) => props)`
    filter: ${props => props.black ? 'invert(0%)' : 'invert(100%)'};
    width: 30px;
    margin-left: 10px;
    cursor: pointer;
    position: absolute;
    top: 0;
    right: 0;
    margin: 10px;
    border-radius: 50%;
    border: 1px solid white;
    padding: 5px;
    transition: 0.3s;
    &:hover {
        background:#edededeb;
    }
    `;

const Close = (props: CloseProps) => {

    const close = <StyledClose
        src={Cross}
        onClick={props.onClick}
        black={props.black}
        id='close' />

    if (props.to) {
        return (
            <TopLink to={props.to}>
                {close}
            </TopLink>
        )
    }
    return close;
};

export default Close;