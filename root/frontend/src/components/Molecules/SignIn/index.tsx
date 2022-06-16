import React from "react";
import Input from "../../Atoms/Input";
import Button from "../../Atoms/Button";
import styled from "styled-components";
import Login from "../Login";
import { useNavigate } from "react-router-dom";

const Form = styled.form`
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

const SignIn = () => {

    const navigate = useNavigate();

    const signIn = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Signed in");
        navigate('/')
    }

    const sign = (
        <Form onSubmit={signIn}>
            <Input placeholder={"Email"} type={"email"} required />
            <Input placeholder={"Password"} type={"password"} required />
            <ButtonContainer>
                <Button
                    text={"Sign in"}
                    width={'170px'}
                    secondary
                    type={"submit"}
                />
                <Button
                    text={"Create profile"}
                    width={'170px'}
                    goTo={"/register"}
                />
            </ButtonContainer>
        </Form>
    );

    return (
        <Login form={sign} />
    )
};

export default SignIn;