import React from "react";
import styled from "styled-components";
import UserButton from "../../Atoms/UserButton";
import useFindUser from "../../../hooks/useFindUser";
import SignIn from "../SignIn";
import Register from "../Register";


const UserContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const RegisterButton = styled.button`
    background: none;
    margin: none;
    border: 1px solid white;
    padding: 5px 10px;
    color: white;
    font-weight: bold;
    cursor: pointer;
    transition: 0.3s;
    user-select: none;
    &:hover {
        transform: scale(1.03);
    }
`;

const SignInButton = styled.button`
    background: none;
    margin: none;
    border: none;
    white-space: nowrap;
    color: white;
    font-weight: bold;
    cursor: pointer;
    transition: 0.3s;
    user-select: none;
    &:hover {
        transform: scale(1.03);
    }
`;

const LoginButtons = () => {


    const [showSignIn, setShowSignIn] = React.useState(false);
    const [showRegister, setShowRegister] = React.useState(false);

    let user: any = useFindUser();
    var post = user ? "/post-ad" : "/sign-in";

    const userButton = user ? (
        <UserButton header />
    ) : (
        <div>
            <UserContainer>
                <SignInButton onClick={() => setShowSignIn(true)}>
                    Sign In
                </SignInButton>
                <RegisterButton onClick={() => setShowRegister(true)}>
                    Register
                </RegisterButton>
            </UserContainer>

            <Register display={showRegister} close={() => setShowRegister(false)} />
            <SignIn display={showSignIn} close={() => setShowSignIn(false)} />
        </div>
    );

    return (
        userButton
    );
};

export default LoginButtons;