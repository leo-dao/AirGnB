import React from "react";
import LoginForm from '../../Molecules/LoginForm';
import Input from "../../Atoms/Input";
import Password from '../../Atoms/Password'
import styled from "styled-components";
import ErrorMessage from "../../Atoms/ErrorMessage";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import TopLink from "../../../utils/TopLink";
import { useEffect } from "react";

const Socials = styled.div`
    display: flex;
    align-items: center;    
    gap: 10px;
    width: 100%;
`;

const Bottom = styled.div`
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: space-between;
    margin-top: 20px;
    width: 100%;
`;

const ForgotPassword = styled.div`
    color: #175996;
    font-weight: bold;
    cursor: pointer;
    &:hover{
        text-decoration: underline;
    }
`;

const RegisterLink = styled.span`
    margin-left: 5px;
    color: #175996;
    font-weight: bold;
    &:hover{
        cursor: pointer;
        color: #2d67cc;
    }
`;


const SignIn = () => {

    const navigate = useNavigate();

    const initialState = {
        email: '',
        password: ''
    }

    const noError = {
        message: '',
        display: false
    }

    const [emailError, setEmailError] = React.useState(noError);

    const [errMsg, setErrorMessage] = React.useState('');
    const [errOn, setError] = React.useState(false);
    const [formData, updateFormData] = React.useState(initialState);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        updateFormData({
            ...formData,
            [e.target.placeholder.toLowerCase()]: e.target.value
        });
    }


    const signIn = (e: React.FormEvent<HTMLFormElement>) => {

        e.preventDefault();

        if (formData.email === '') {
            setEmailError({
                message: 'Email is required',
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
                setErrorMessage(err.response.data);
                setError(true);
            });
    };

    useEffect(() => {
        const handleClickOutside = (event: any) => {

            if (event.target.id === 'sitemask' || event.target.id === 'close') {

                // Removeing error messages
                setEmailError(noError);
                // Resetting all inputs
                updateFormData(initialState);
                const inputs = document.querySelectorAll('input');
                inputs.forEach((input) => {
                    input.value = '';
                }
                )

            }
        }
        document.addEventListener("mousedown", handleClickOutside);
    }, []);

    const signInJSX = (
        <div style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        }}>
            <Input
                placeholder="Email"
                type="email"
                onChange={handleChange}
                required
                onBlur={() => {
                    if (!formData.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
                        setEmailError({
                            message: 'Email is not valid',
                            display: true
                        })
                    }
                }}
                error={emailError.message}
                errorDisplay={emailError.display}
            />
            <Password
                placeholder="Password"
                onChange={handleChange}
            />
            <ForgotPassword onClick={() => {
                const signin = document.getElementById('signin');
                const forgot = document.getElementById('forgot');
                // @ts-ignore
                signin.style.display = 'none';
                // @ts-ignore
                forgot.style.display = 'block';
            }}>Forgot password?</ForgotPassword>

            <ErrorMessage
                msg={errMsg}
                on={errOn}
            />
        </div>
    )

    return (
        <LoginForm
            id='signin'
            onSubmit={signIn}
            submit='SIGN IN'
            header='Welcome back'
            children={signInJSX}
            childrenBottom={
                <div>Not a member yet?
                    <RegisterLink
                        onClick={() => {
                            const register = document.getElementById('register');
                            // @ts-ignore
                            register.style.display = 'block';
                            const signin = document.getElementById('signin');
                            // @ts-ignore
                            signin.style.display = 'none';
                        }}
                    >
                        Register here
                    </RegisterLink>
                </div>
            }
        />
    );
};

export default SignIn;