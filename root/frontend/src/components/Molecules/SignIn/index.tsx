import React from "react";
import Input from "../../Atoms/Input";
import Button from "../../Atoms/Button";
import styled from "styled-components";
import Login from "../Login";
import { useNavigate } from "react-router-dom";
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

    const signIn = (e: React.FormEvent<HTMLFormElement>) => {

        e.preventDefault();
        axios.post('/signIn', formData)
            .then(res => {
                localStorage.setItem('user', JSON.stringify(res.data));
                navigate('/');
            })
            .catch(err => {
                console.log(err)
            });
    }

    const sign = (
        <Form onSubmit={signIn}>
            <Input placeholder={"Email"} type={"email"} onChange={handleChange} required />
            <Input placeholder={"Password"} type={"password"} onChange={handleChange} required />
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
                    onClick={() => window.location.href = '/register'}
                />
            </ButtonContainer>
        </Form>
    );

    return (
        <Login form={sign} />
    )
};

export default SignIn;