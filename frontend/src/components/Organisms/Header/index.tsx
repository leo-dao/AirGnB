import React from 'react';
import { Link } from 'react-router-dom';
import HeaderButtons from '../../Molecules/HeaderButtons';
import styled from 'styled-components';

const StyledHeader = styled.div`
    background-color: #fff;
    z-index: 1;
    position: sticky;
    display: flex;
    top: 0;
    flex-direction: row;
    align-items: center;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    padding: 0.5em;
    width: 100%;

`

const TitleStyled = styled.div`
    font-size: 3rem;
    font-weight: bold;
    margin-left: 10%;
`

const SubtitleStyled = styled.div`
    font-style: italic;
    font-size: 1rem;
    margin-left: 1rem;
    @media (max-width: 1000px) {
        display: none;
    }
    `

const ButtonStyled = styled.div`
    position: absolute;
    right: 10%;
    @media (max-width: 750px) {
        display: none;
    }
`

const Header = () => {

    return (
        <StyledHeader>
            <TitleStyled>
                <Link to="/"> AirGnB </Link>
            </TitleStyled>

            <SubtitleStyled>
                Music rental made easy
            </SubtitleStyled>

            <ButtonStyled>
                <HeaderButtons />
            </ButtonStyled>
        </StyledHeader >
    )
}
export default Header;