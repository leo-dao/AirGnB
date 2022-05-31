import React from "react";
import Button from "../../Atoms/Button";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const LoginPage = () => {

    return (
        <Container>
            <h1>Welcome to AirGnB</h1>

        </Container>
    )
}

export default LoginPage;