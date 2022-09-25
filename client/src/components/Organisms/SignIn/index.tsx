import React from "react";
import LoginForm from '../../Molecules/LoginForm';
import Input from "../../Atoms/Input";
import Password from '../../Atoms/Password'
import styled from "styled-components";
import ErrorMessage from "../../Atoms/ErrorMessage";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import TopLink from "../../../utils/TopLink";
import { PropertySafetyFilled } from "@ant-design/icons";

const Header = styled.h1`
    font-size: 3rem;
    font-weight: bold;
    margin-bottom: 20px;
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

const RegisterLink = styled.div`
    display: flex;
    gap: 5px;
    margin-top: 20px;
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
        <LoginForm
            id='signin'
            onSubmit={signIn}
        >
            <Header>Welcome back</Header>
            <Socials>
                {/* add login through google and facebook */}
            </Socials>
            <InputContainer>
                <ErrorMessage msg={errMsg} on={errOn} />
                <Input placeholder="Email" type="email" onChange={handleChange} required />
                <Password placeholder="Password" onChange={handleChange} forget />
            </InputContainer>
            <StyledButton type='submit'>LOG IN</StyledButton>
            <RegisterLink>Not a member yet?
                <TopLink to='/register'>Register here</TopLink>
            </RegisterLink>
        </LoginForm>
    );
};

export default SignIn;