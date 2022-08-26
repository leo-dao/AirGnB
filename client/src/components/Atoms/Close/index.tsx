import React from "react";
import styled from "styled-components";
import { CloseOutlined, PropertySafetyFilled } from '@ant-design/icons';
import TopLink from "../../../utils/TopLink";

interface CloseProps {
    onClick?: () => void;
    to?: string;
    black?: boolean;
}

const StyledClose = styled(CloseOutlined).attrs((props: CloseProps) => props)`
    color: ${props => props.black ? 'black' : 'white'};
    font-size: 1.5rem;
    margin-left: 10px;
    cursor: pointer;
    position: absolute;
    top: 0;
    right: 0;
    margin: 10px;
    border-radius: 50%;
    border: 1px solid white;
    padding: 0px;
    transition: 0.3s;
    &:hover {
        background: ${props => props.black ? '#edededeb' : 'black'};
        color: ${props => props.black ? 'black' : 'white'};
    }
    `;

const Close = (props: CloseProps) => {

    const close = <StyledClose onClick={props.onClick} black={props.black} />

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