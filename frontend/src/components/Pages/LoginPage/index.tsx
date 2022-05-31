import React from "react";
import Button from "../../Atoms/Button";
import SignIn from "../../Molecules/SignIn";
import Register from "../../Molecules/Register";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const LoginPage = () => {

    const [isSignIn, setIsSignIn] = React.useState(true);

    const changeView = () => {
        setIsSignIn(!isSignIn);
    }

    return (
        <Container>
            <h1>Welcome to AirGnB</h1>
            {isSignIn ? <SignIn changeView={changeView} /> : <Register />}
        </Container>
    )
}

export default LoginPage;