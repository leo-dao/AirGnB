import React from 'react';
import HeaderButtons from '../../Molecules/HeaderButtons';
import styled from 'styled-components';
import DropdownMenu from '../../Molecules/DropdownMenu';
import Button from '../../Atoms/Button';
import { MenuOutlined } from '@ant-design/icons';
import ToggleNav from '../../Molecules/ToggleNav';

const Container = styled.div`
    width: 100%;
`

const StyledHeader = styled.div`
    background: transparent linear-gradient(87deg,#181923,#142637) 0 0;
    z-index: 1;
    position: sticky;
    display: flex;
    top: 0;
    flex-direction: row;
    align-items: center;
    //padding: 0.5em;
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

const MenuStyled = styled(MenuOutlined)`
    color: white;
    font-size: 30px;
    transition: 0.2s;

    :hover {
        transform: scale(1.05);
    }
    @media (min-width: 600px) {
        display: none;
    }
`

const Header = () => {

    const [visibility, setVisibility] = React.useState(false);

    const flip = () => {
        setVisibility(!visibility);
    }


    return (
        <Container>
            <StyledHeader>
                <TitleStyled href="/">AirGnB</TitleStyled>
                <SubtitleStyled>
                    Music rental made easy
                </SubtitleStyled>

                <ButtonContainer>

                    <HeaderButtons />
                    <MenuStyled onClick={flip} />
                </ButtonContainer>
            </StyledHeader >
            <ToggleNav
                display={visibility}
            />
        </Container>
    )
}
export default Header;