import React from "react";
import Input from "../../Atoms/Input";
import Button from "../../Atoms/Button";
import styled from "styled-components";
import { PropertySafetyFilled } from "@ant-design/icons";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 30%;
`;

const ButtonContainer = styled.div`
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 5%;
`;

export interface SignInProps {
    changeView: () => void;
}

const SignIn = (props: SignInProps) => {

    const signIn = () => {
        console.log("Sign in");
    }

    return (
        <Container>
            <Input placeholder={"Email"} type={"email"} required />
            <Input placeholder={"Password"} type={"password"} required />
            <ButtonContainer>
                <Button text={"Sign in"} width={'170px'} secondary onClick={signIn} />
                <Button text={"Create profile"} width={'170px'} onClick={props.changeView} />
            </ButtonContainer>
        </Container>

    );
};

export default SignIn;