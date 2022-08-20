import React from "react";
import styled from "styled-components";
import { CloseOutlined } from '@ant-design/icons';
import TopLink from "../../../utils/TopLink";

const StyledClose = styled(CloseOutlined)`
    color: white;
    font-size: 1.5rem;
    margin-left: 10px;
    cursor: pointer;
    position: absolute;
    top: 0;
    right: 0;
    margin: 20px;
    border-radius: 50%;
    border: 1px solid white;
    padding: 5px;
    transition: 0.3s;
    &:hover {
        background: white;
        color: black;
    }
`;

const Close = () => {
    return (
        <TopLink to="/">
            <StyledClose />
        </TopLink>
    )
};

export default Close;