import React from "react";
import Button from "../../Atoms/Button";
import SignIn from "../SignIn";
import Register from "../Register";
import styled from "styled-components";
import { PropertySafetyFilled } from "@ant-design/icons";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
`

interface LoginProps {
    form: React.ReactNode;
}

const Login = (props: LoginProps) => {

    return (
        <Container>
            <h1>Welcome to AirGnB</h1>
            {props.form}
        </Container>
    )
}

export default Login;