import React from 'react';
import { Link } from 'react-router-dom';
import HeaderButtons from '../../Molecules/HeaderButtons';
import styled from 'styled-components';

const StyledHeader = styled.div`
    //background-color: #fff;
    background: transparent linear-gradient(87deg,#181923,#142637) 0 0;
    z-index: 1;
    position: sticky;
    display: flex;
    top: 0;
    flex-direction: row;
    align-items: center;
    padding: 0.5em;
    margin-bottom: 5%;
    width: 100%;
    height: 70px;
    @media (max-width: 750px) {
        vertical-align: middle;
    }
`

const TitleStyled = styled.a`
    font-size: 2.5rem;
    font-weight: bold;
    margin-left: 5%;
    color: #ebebeb;
    transition: 0.3s;
    &:hover {
        color: white;
        transform: scale(1.03);
    }
   /*  @media (max-width: 750px) {
        margin-left: auto;
        margin-right: auto;
    } */
`

const SubtitleStyled = styled.div`
    font-style: italic;
    font-size: 1rem;
    margin-left: 1rem;
    @media (max-width: 1000px) {
        display: none;
    }
    color: #c7c7c7;
    `

const ButtonStyled = styled.div`
    position: absolute;
    right: 5%;
   /*  @media (max-width: 750px) {
        display: none;
    } */
`

const Header = () => {

    return (
        <StyledHeader>
            <TitleStyled href="/">AirGnB</TitleStyled>
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