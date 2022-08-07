import React from "react";
import styled from "styled-components";

const Container = styled.div`
    top: 100px; 
    margin-left: 30%;
    justify-content: center;
    gap: 20px;
    margin-top: 10%;
    margin-bottom: 10%
    `

interface LoginProps {
    form: React.ReactNode;
}

const Login = (props: LoginProps) => {

    return (
        <Container>
            {props.form}
        </Container>
    )
}

export default Login;