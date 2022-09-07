import React from "react";
import Input from "../../Atoms/Input";
import Password from '../../Atoms/Password'
import Button from "../../Atoms/Button";
import styled from "styled-components";
import ErrorMessage from "../../Atoms/ErrorMessage";
import { useNavigate } from "react-router-dom";
import Close from "../../Atoms/Close";
import axios from "axios";
import TopLink from "../../../utils/TopLink";

const Background = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 50px;
    width: 100vw;
    height: 100vh;
    z-index: 100;
    background: linear-gradient(87deg,#17324c, #000000);
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
    padding: 20px;
    width: 40%;
    border-radius: 5px;
`;

const Header = styled.h1`
    font-size: 3rem;
    font-weight: bold;
`;

const InputContainer = styled.div`
    width: 100%;
    margin: 20px;
    text-align: left;
    display: inline;   
`;

const StyledButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #2d67cc;
    color: white;
    font-weight: bold;
    width: 100%;
    height: 3em;
    border-radius: 30px;
    border: none;
    outline: none;
    font-size: 16px;
    letter-spacing: 0.1em;
    transition: all 0.2s ease-in-out;
    &:hover{
        background-color: #175996;
        cursor: pointer;
    }
`;

const Socials = styled.div`
    display: flex;
    align-items: center;    
    gap: 10px;
    width: 100%;
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
        <Background>
            <Form onSubmit={signIn}>
                <Header>Welcome back</Header>
                <Socials>
                </Socials>
                <InputContainer>
                    <ErrorMessage msg={errMsg} on={errOn} />
                    <Input placeholder="Email" type="email" onChange={handleChange} required />
                    <Password placeholder="Password" onChange={handleChange} forget />
                </InputContainer>
                <StyledButton>LOG IN</StyledButton>
                <p>Not a member yet? <TopLink to='/register'>Register here</TopLink></p>

                <Close to='/' />
            </Form>
        </Background >
    );
};

export default SignIn;