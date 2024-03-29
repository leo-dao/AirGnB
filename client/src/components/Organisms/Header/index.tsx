import React from 'react';
import HeaderButtons from '../../Molecules/HeaderButtons';
import styled from 'styled-components';
import { MenuOutlined } from '@ant-design/icons';
import ToggleNav from '../../Molecules/ToggleNav';
import TopLink from '../../../utils/TopLink';
import LoginButtons from '../LoginButtons';

const Container = styled.div`
    width: 100%;
    height: 100%;
    margin-bottom: 60px;
`

const StyledHeader = styled.div`
    background: linear-gradient(87deg,#181923,#17324c);
    display: flex;
    position: fixed;
    z-index: 2;
    top: 0;
    flex-direction: row;
    align-items: center;
    width: 100%;
    height: 60px;
`

const TitleStyled = styled(TopLink)`
    font-size: 2.2rem;
    font-weight: bold;
    margin-left: 5%;
    color: #ebebeb;
    transition: 0.3s;
    &:hover {
        color: white;
        transform: scale(1.03);
    }

    @media (max-width: 400px) {
        font-size: 1.5rem;
    }
`

const SubtitleStyled = styled.div`
    font-style: italic;
    font-size: 1rem;
    margin-left: 1.5rem;
    color: #c7c7c7;

    @media (max-width: 700px) {
        display: none;
    }
    `

const ButtonContainer = styled.div`
    position: absolute;
    right: 5%;
`

const MenuStyled = styled(MenuOutlined)`
    color: white;
    font-size: 2rem;
    transition: 0.2s;
    margin-left: 5%;
    :hover {
        transform: scale(1.05);
    }
    @media (min-width: 850px) {
        display: none;
    }

    @media (max-width: 400px) {
        margin-left: 2%;
        font-size: 1.5rem;
    }
`

const Header = () => {

    const [menuOpen, openMenu] = React.useState(false);

    const flip = () => {
        openMenu(!menuOpen);

        // fixing side nav and sitemask
        const body = document.getElementsByTagName('body')[0];
        const sitemask = document.getElementById('sitemask');

        if (!menuOpen) {
            body.style.overflow = 'hidden';
            body.style.height = '100vh';
            //@ts-ignore
            sitemask.style.display = 'block';
        }
        else {
            body.style.overflow = 'visible';
            body.style.height = 'auto';
            //@ts-ignore
            sitemask.style.display = 'none';
        }
    }

    return (
        <Container id='header'>
            <StyledHeader>
                <MenuStyled id='toggle-nav' onClick={flip} />
                <TitleStyled to='/'>AirGnB</TitleStyled>
                <SubtitleStyled>
                    Music rental made easy
                </SubtitleStyled>

                <ButtonContainer>
                    <HeaderButtons />
                </ButtonContainer>
            </StyledHeader >

            <LoginButtons />

            <ToggleNav
                display={menuOpen}
                close={flip}
            />
        </Container>
    )
}
export default Header;