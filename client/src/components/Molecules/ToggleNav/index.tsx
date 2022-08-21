import React from "react";
import styled from "styled-components";
import Button from "../../Atoms/Button";
import useFindUser from "../../../hooks/useFindUser";
import { CloseOutlined, UserOutlined } from "@ant-design/icons";
import TopLink from '../../../utils/TopLink';
import Close from "../../Atoms/Close";

interface ToggleProps {
    display: boolean,
    close: () => void
}

const Container = styled.div.attrs((props: ToggleProps) => props)`
    display: ${props => props.display ? 'flex' : 'none'};
    background: white;
    flex-direction: column;
    justify-content: center;
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.75);


    z-index: 3;
    position: fixed;
    top: 0;
    left: 0;
    overflow: hidden;
    width: 35%;


    & > * {
        user-select: none;
    }
    
    @media (min-width: 600px) {
        display: none;
    }
`;

const Top = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 90%;
    height: 50px;
    `;

const Title = styled.div`
    font-size: 1.8rem;
    font-weight: bold;
    `;

const SubContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const StyledClose = styled(CloseOutlined)`
    color: #6d6d6d;
    padding: 0.5rem;
    border-radius: 50%;
    margin-left: 0.5rem;
    &:hover {
        background: #ebebeb;
    }
`;


const StyledLink = styled(TopLink)`
    color: black;
    font-size: 16px;
    margin-left: 2%;
    padding: 5px;
    border-top: 0.5px grey solid;
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

const ToggleNav = (props: ToggleProps) => {

    let user: any = useFindUser();
    var account = user ? `/account` : "/sign-in";
    var post = user ? "/post-ad" : "/sign-in";


    return (
        <Container display={props.display}>
            <Top>
                <StyledClose onClick={props.close} />
                <Title>AirGnB</Title>
            </Top>
            <SubContainer>
                <StyledLink to={post}>
                    Post Ad
                </StyledLink>
                <StyledLink to={account}>
                    <UserOutlined style={{ fontSize: '1.5rem' }} />
                </StyledLink>
            </SubContainer>
        </Container>
    )
};

export default ToggleNav;