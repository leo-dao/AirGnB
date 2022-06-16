import React from "react";
import Input from "../../Atoms/Input";
import Button from "../../Atoms/Button";
import styled from "styled-components";
import Login from "../Login";
import { useState } from "react";
const axios = require('axios').default;

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

    const initialState = {
        email: "",
        username: "",
        password: "",
    }

    const [formData, updateFormData] = React.useState(initialState);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        updateFormData({
            ...formData,
            [e.target.placeholder.toLowerCase()]: e.target.value
        })
    }

    const createAccount = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        axios.post('/register', formData);
    }

    const register = (
        <Form onSubmit={createAccount}>
            <Input placeholder={"Email"} type={"email"} onChange={handleChange} required />
            <Input placeholder={"Username"} type={"text"} onChange={handleChange} required />
            <Input placeholder={"Password"} type={"password"} onChange={handleChange} required />
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