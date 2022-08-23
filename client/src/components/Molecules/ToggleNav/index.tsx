import React from "react";
import styled from "styled-components";
import Button from "../../Atoms/Button";
import useFindUser from "../../../hooks/useFindUser";
import { CloseOutlined, UserOutlined } from "@ant-design/icons";
import TopLink from '../../../utils/TopLink';
import { useEffect } from "react";

interface ToggleProps {
    display: boolean,
    close: () => void
}

const Container = styled.div.attrs((props: ToggleProps) => props)`
    display: ${props => props.display ? 'flex' : 'none'};
    background-color: white;
    flex-direction: column;
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.75);
    z-index: 10;
    position: fixed;
    top: 0;
    left: 0;
    min-width: 25%;
    height: 100%;
    overflow-y: scroll;

    & > * {
        user-select: none;
    }
    
    @media (min-width: 850px) {
        display: none;
    }
`;

const Top = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 5px;
    justify-content: left;
    gap: 20px;
    border-bottom: 1.2px solid grey;
    `;

const Title = styled.div`
    font-size: 2rem;
    font-weight: bold;
    padding: 5px;
    `;

const StyledClose = styled(CloseOutlined)`
    color: #6d6d6d;
    padding: 0.5rem;
    font-size: 1.3rem;
    border-radius: 50%;
    margin-left: 10px;
    &:hover {
        background: #ebebeb;
    }
`;

const ButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const StyledLink = styled(TopLink)`
    color: black;
    font-size: 14px;
    margin-left: 2%;
    padding: 10px;
    border-bottom: 0.5px grey solid;
    > * {
        color: black;
    }
    transition: 0.1s;
    :hover {
        color: #cccccc;
        > * {
            color: #cccccc;
        }
    }
`;

const StyledUser = styled(UserOutlined)`
    font-size: 1.3rem;
`;

const ToggleNav = (props: ToggleProps) => {

    let user: any = useFindUser();

    var post = user ? "/post-ad" : "/sign-in";


    var userOrLog = user ?
        <StyledLink to='/account'>
            <StyledUser />
        </StyledLink>
        :
        <div style={{
            display: 'flex',
            flexDirection: 'column',
        }}>
            <StyledLink to="/sign-in">Sign In</StyledLink>
            <StyledLink to="/register">Register</StyledLink>
        </div>
        ;


    useEffect(() => {

        const handleClickOutside = (e: any) => {
            if (e.target.id === "sitemask") {
                props.close();
            }
        };

        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        }
    }, [props.display]);


    return (
        <Container display={props.display} id='side-bar'>
            <Top>
                <StyledClose onClick={props.close} />
                <Title>AirGnB</Title>
            </Top>
            <ButtonContainer onClick={() => {
                props.close();
            }}>
                <StyledLink to={post}>
                    Post an ad
                </StyledLink>
                {userOrLog}
                <StyledLink to='/about-us'>
                    About us
                </StyledLink>
                <StyledLink to='/renter-info'>
                    How renting works
                </StyledLink>
                <StyledLink to='/leaser-info'>
                    How leasing works
                </StyledLink>
                <StyledLink to='/faq'>
                    FAQ
                </StyledLink>
                <StyledLink to='/insurance'>
                    Insurance
                </StyledLink>
            </ButtonContainer>
        </Container>
    )
};

export default ToggleNav;