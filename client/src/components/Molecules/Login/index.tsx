import React from "react";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
`

const StyledHeader = styled.h1`
    font-size: 4em;
    font-weight: bold;
`

interface LoginProps {
    form: React.ReactNode;
}

const Login = (props: LoginProps) => {

    return (
        <Container>
            <StyledHeader>Welcome to AirGnB</StyledHeader>
            {props.form}
        </Container>
    )
}

export default Login;