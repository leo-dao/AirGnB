import React from "react";
import styled from "styled-components";

const StyledFooter = styled.div`
    background-color: #212121;
    text-align: center;
    padding: 20px;
    position: fixed;
    left: 0;
    bottom: 0;
    height: 90px;
    width: 100%;
    color: white;

    & > * {
        color: white;
    }
`;

const Bottom = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
`

const Footer = () => {
    return (
        <StyledFooter>
            <Bottom>
                <h2 style={{ color: 'white' }}>AirGnB</h2>
                <p style={{ color: 'lightgrey' }}>@2022</p>
            </Bottom>
        </StyledFooter>
    )
};

export default Footer;