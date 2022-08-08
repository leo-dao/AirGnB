import React from 'react';
import HeaderButtons from '../../Molecules/HeaderButtons';
import styled from 'styled-components';
import DropdownMenu from '../../Molecules/DropdownMenu';
import Buttons from './Buttons';
import { MenuFoldOutlined } from '@ant-design/icons';

const StyledHeader = styled.div`
    background: transparent linear-gradient(87deg,#181923,#142637) 0 0;
    z-index: 1;
    position: sticky;
    display: flex;
    top: 0;
    flex-direction: row;
    align-items: center;
    padding: 0.5em;
    width: 100%;
    height: 70px;
    @media (max-width: 750px) {
        vertical-align: middle;
    }
`

const TitleStyled = styled.a`
    font-size: 2.2rem;
    font-weight: bold;
    margin-left: 5%;
    color: #ebebeb;
    transition: 0.3s;
    &:hover {
        color: white;
        transform: scale(1.03);
    }
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

const ButtonContainer = styled.div`
    position: absolute;
    right: 5%;

`

const MenuFoldStyled = styled(MenuFoldOutlined)`
    color: white;
    font-size: 30px;
    transition: 0.2s;
    :hover {
        font-size: 28px;
    }
    @media (min-width: 600px) {
        display: none;
    }
`

const Header = () => {

    return (
        <StyledHeader>
            <TitleStyled href="/">AirGnB</TitleStyled>
            <SubtitleStyled>
                Music rental made easy
            </SubtitleStyled>

            <ButtonContainer>

                <HeaderButtons />
                <DropdownMenu
                    menu={<Buttons />}
                    button={<MenuFoldStyled />}
                />
            </ButtonContainer>


        </StyledHeader >
    )
}
export default Header;