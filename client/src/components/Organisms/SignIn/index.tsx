import React from "react";
import LoginForm from '../../Molecules/LoginForm';
import Input from "../../Atoms/Input";
import Password from '../../Atoms/Password'
import styled from "styled-components";
import ErrorMessage from "../../Atoms/ErrorMessage";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import TopLink from "../../../utils/TopLink";

const Header = styled.h1`
    font-size: 3rem;
    font-weight: bold;
    margin-bottom: 20px;
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

    const emailError = {
        message: '',
        display: false
    }

    const [emailErrorState, updateEmailError] = React.useState(emailError);

    const passwordError = {
        message: '',
        display: false
    }

    const [passwordErrorState, updatePasswordError] = React.useState(passwordError);

    const [errMsg, updateErrMsg] = React.useState('');
    const [errOn, updateErr] = React.useState(false);
    const [formData, updateFormData] = React.useState(initialState);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        updateFormData({
            ...formData,
            [e.target.placeholder.toLowerCase()]: e.target.value
        })

        // Removing error message when user starts typing if error is displayed
        if (e.target.value !== '') {
            if (e.target.placeholder.toLowerCase() === 'email') {
                updateEmailError({
                    message: '',
                    display: false
                })
            } else {
                updatePasswordError({
                    message: '',
                    display: false
                })
            }
        }
    }


    const signIn = (e: React.FormEvent<HTMLFormElement>) => {

        e.preventDefault();

        if (formData.email === '') {
            updateEmailError({
                message: 'Email is required',
                display: true
            })
            return;
        }

        if (formData.password === '') {
            updatePasswordError({
                message: 'Password is required',
                display: true
            })
            return;
        }

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
            {/* <Socials>
                // TODO: Add socials
            </Socials> */}

            <Input
                placeholder="Email"
                type="email"
                onChange={handleChange}
                required
                onBlur={() => {
                    if (formData.email === '') {
                        updateEmailError({
                            message: 'Email cannot be empty',
                            display: true
                        })
                    }
                    else if (!formData.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
                        updateEmailError({
                            message: 'Email is not valid',
                            display: true
                        })
                    }
                }}
                error={emailErrorState.message}
                errorDisplay={emailErrorState.display}
            />
            <Password
                placeholder="Password"
                //error={passwordErr.message}
                //errorDisplay={passwordErr.display}
                onChange={handleChange}
            />
            <ErrorMessage
                msg={errMsg}
                on={errOn}
            />

            <StyledButton type='submit'>LOG IN</StyledButton>

            <TopLink to='/'>Forgot password?</TopLink>

            <RegisterLink>Not a member yet?
                <TopLink to='/register'>Register here</TopLink>
            </RegisterLink>
        </LoginForm>
    );
};

export default SignIn;