import React from "react";
import Input from "../../Atoms/Input";
import Password from '../../Atoms/Password'
import Button from "../../Atoms/Button";
import styled from "styled-components";
import Login from "../Login";
import ErrorMessage from "../../Atoms/ErrorMessage";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

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

    const initialState = {
        email: '',
        password: ''
    }

    const [formData, updateFormData] = React.useState(initialState);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        updateFormData({
            ...formData,
            [e.target.placeholder.toLowerCase()]: e.target.value
        })
    }

    const navigate = useNavigate();


    const [errMsg, updateErrMsg] = React.useState('');
    const [errOn, updateErr] = React.useState(false);


    const signIn = (e: React.FormEvent<HTMLFormElement>) => {

        e.preventDefault();
        axios.post('/signIn', formData)
            .then(res => {
                localStorage.setItem('authToken', JSON.stringify(res.data));

                //navigate('/');
            })
            .catch(err => {
                updateErrMsg(err.response.data.error);
                updateErr(true);
            });
    }

    const sign = (
        <Form onSubmit={signIn}>
            <Input placeholder={"Email"} type={"email"} onChange={handleChange} required />
            <Password placeholder={"Password"} onChange={handleChange} />
            <ButtonContainer>
                <Button
                    text={"Sign in"}
                    width={'170px'}
                    height={'55px'}
                    secondary
                    type={"submit"}
                />
                <Button
                    text={"Create profile"}
                    width={'170px'}
                    height={'55px'}
                    onClick={() => window.location.href = '/register'}
                />
            </ButtonContainer>
            <ErrorMessage msg={errMsg} on={errOn} />
        </Form>
    );

    return (
        <Login form={sign} />
    )
};

export default SignIn;