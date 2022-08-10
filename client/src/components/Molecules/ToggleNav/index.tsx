import React from "react";
import styled from "styled-components";
import Button from "../../Atoms/Button";
import UserButton from "../../Atoms/UserButton";
import useFindUser from "../../../hooks/useFindUser";
import { UserOutlined } from "@ant-design/icons";


interface ToggleProps {
    display: boolean
}

const Container = styled.div.attrs((props: ToggleProps) => props)`
    background-image: linear-gradient(87deg,#181923,#17324c);
    justify-content: center;
    border-bottom: 1px solid grey;
    display: ${props => props.display ? 'flex' : 'none'};
    @media (min-width: 600px) {
        display: none;
    }
`

const SubContainer = styled.div`
    width: 95%;
    display: flex;
    flex-direction: column;
`


const StyledA = styled.a`
    color: white;
    font-size: 16px;
    margin-left: 2%;
    padding: 5px;
    border-top: 0.5px grey solid;
    > * {
        color: white;
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
        <Container
            display={props.display}
        >
            <SubContainer>
                <StyledA href={post}>Post ad</StyledA>
                <StyledA href={account}><UserOutlined /></StyledA>
            </SubContainer>
        </Container>
    )
};

export default ToggleNav;