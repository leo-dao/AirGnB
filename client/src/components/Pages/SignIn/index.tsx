import React from "react";
import Input from "../../Atoms/Input";
import Password from '../../Atoms/Password'
import Button from "../../Atoms/Button";
import styled from "styled-components";
import ErrorMessage from "../../Atoms/ErrorMessage";
import { useNavigate } from "react-router-dom";
import Close from "../../Atoms/Close";
import axios from "axios";

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 50px;
    max-width: 100vw;
    max-height: 100vh;
    z-index: 10;
    background: linear-gradient(87deg,#17324c, #000000);
    position:absolute;
    top:0px;
    right:0px;
    bottom:0px;
    left:0px;
`;

const Header = styled.h1`
    font-size: 2.5rem;
    font-weight: bold;
    color: white;
    margin-bottom: 20px;
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 30%;
`;

const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 20px;
    width: 100%;
    align-items: center;
    justify-content: center;
`;

const StyledButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #176fc1;
    color: white;
    font-weight: bold;
    width: 100%;
    height: 3em;
    border: none;
    outline: none;
    font-size: 20px;
    transition: all 0.2s ease-in-out;
    &:hover{
        background-color: #175996;
        cursor: pointer;
    }
`;

const SignIn = () => {

    const navigate = useNavigate();

    const initialState = {
        email: '',
        password: ''
    }

    const [errMsg, updateErrMsg] = React.useState('');
    const [errOn, updateErr] = React.useState(false);
    const [formData, updateFormData] = React.useState(initialState);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        updateFormData({
            ...formData,
            [e.target.placeholder.toLowerCase()]: e.target.value
        })
    }


    const signIn = (e: React.FormEvent<HTMLFormElement>) => {

        e.preventDefault();
        axios.post('/signIn', formData)
            .then(res => {
                localStorage.setItem('authToken', JSON.stringify(res.data));
                navigate('/');
            })
            .catch(err => {
                updateErrMsg(err.response.data.error);
                updateErr(true);
            });
    }

    return (
        <Form onSubmit={signIn}>
            <Header>Welcome back</Header>
            <Container>
                <Input placeholder={"Email"} type={"email"} onChange={handleChange} required />
                <Password placeholder={"Password"} onChange={handleChange} />
                <ButtonContainer>
                    <Button
                        type="submit"
                        text="Sign In" />
                    <Button
                        text='Create Account'
                        goTo="/register"
                        secondary />
                </ButtonContainer>

            </Container>

            <ErrorMessage msg={errMsg} on={errOn} />

            <Close to='/' />
        </Form >
    );
};

export default SignIn;