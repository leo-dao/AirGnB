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
    justify-content: center;
    margin-top: 5%;
`;

const Register = () => {

    const navigate = useNavigate();

    const createAccount = (e: React.FormEvent<HTMLFormElement>) => {
        console.log("Account created");
        e.preventDefault();
        navigate('/')
    }

    const register = (
        <Form onSubmit={createAccount}>
            <Input placeholder={"Email"} type={"email"} required />
            <Input placeholder={"Username"} type={"text"} required />
            <Input placeholder={"Password"} type={"password"} required />
            <Input placeholder={"Confirm password"} type={"password"} required />
            <ButtonContainer>
                <Button
                    text={"Create profile"}
                    width={'170px'}
                    type={'submit'}
                />
            </ButtonContainer>
        </Form>
    )

    return (
        <Login form={register} />
    );
};

export default Register;