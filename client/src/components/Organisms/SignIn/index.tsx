import React from "react";
import { useNavigate } from "react-router-dom";
import { gql, useMutation, useQuery } from '@apollo/client';
import TopLink from "../../../utils/TopLink";
import { useEffect, useContext } from "react";
import { AuthContext } from "../../../authContext";
import LoginForm from '../../Molecules/LoginForm';
import Input from "../../Atoms/Input";
import Password from '../../Atoms/Password'
import styled from "styled-components";
import ErrorMessage from "../../Atoms/ErrorMessage";


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

    const context = useContext(AuthContext);

    const initialState = {
        email: '',
        password: ''
    }

    const noError = {
        message: '',
        display: false
    }

    const [emailError, setEmailError] = React.useState(noError);
    const [passwordError, setPasswordErrorMessage] = React.useState(noError);
    const [formData, updateFormData] = React.useState(initialState);

    const SIGN_IN = gql`
        mutation tokenAuth($email: String!, $password: String!) {
            tokenAuth(email: $email, password: $password) {
                success,
                errors,
                token,
                refreshToken
            }
        }
    `;


    const [tokenAuth, { data, loading, error }] = useMutation(SIGN_IN, {
        onCompleted: (data) => {
            if (data.tokenAuth.success) {
                // Setting JWT token in local storage
                context.login(data.tokenAuth);
                window.location.href = '/';
            }
            else {

                data.tokenAuth.errors.map((error: any) => {
                    setEmailError({
                        message: 'Email or password is incorrect',
                        display: true
                    })
                    setPasswordErrorMessage({
                        message: 'Email or password is incorrect',
                        display: true
                    })
                })
            }
        },
        onError: (error) => {
            setEmailError({
                message: 'Email or password is incorrect',
                display: true
            })
            setPasswordErrorMessage({
                message: 'Email or password is incorrect',
                display: true
            })
        }
    });

    const SignIn = (e: React.FormEvent<HTMLFormElement>) => {

        e.preventDefault();

        if (formData.email === '') {
            setEmailError({
                message: 'Email is required',
                display: true
            })
            return;
        }

        else {
            tokenAuth({
                variables: {
                    email: formData.email,
                    password: formData.password
                }
            });
        }
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

    const signInTSX = (
        <div style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        }}>
            <Input
                placeholder="Email"
                type="email"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    updateFormData({
                        ...formData,
                        email: e.target.value
                    })
                    setEmailError(noError);
                }}
                required
                error={emailError.message}
                errorDisplay={emailError.display}
            />
            <Password
                placeholder="Password"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    updateFormData({
                        ...formData,
                        password: e.target.value
                    })
                    setPasswordErrorMessage(noError);
                }}
                error={passwordError.message}
                errorDisplay={passwordError.display}
            />
            <ForgotPassword onClick={() => {
                const signin = document.getElementById('signin');
                const forgot = document.getElementById('forgot');
                // @ts-ignore
                signin.style.display = 'none';
                // @ts-ignore
                forgot.style.display = 'block';
            }}>Forgot password?</ForgotPassword>


        </div>
    )

    return (
        <LoginForm
            id='signin'
            onSubmit={SignIn}
            submit='SIGN IN'
            header='Welcome back'
            children={signInTSX}
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