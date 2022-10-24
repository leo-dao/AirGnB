import React, { useEffect } from "react";
import LoginForm from '../../Molecules/LoginForm';
import Input from "../../Atoms/Input";
import Password from '../../Atoms/Password';
import styled from "styled-components";
import ErrorMessage from "../../Atoms/ErrorMessage";
import PasswordStrengthBar from 'react-password-strength-bar';
import { useNavigate } from "react-router-dom";
import { gql, useMutation } from '@apollo/client';

const Terms = styled.div`
    display: flex;
    gap: 5px;
    margin: 10px;
    width: 100%;
`;

const Register = () => {

    const navigate = useNavigate();

    const initialState = {
        name: '',
        email: '',
        password: '',
        terms: false,
    }

    const noError = {
        message: '',
        display: false,
    }

    const [emailError, setEmailError] = React.useState(noError);
    const [nameError, setNameError] = React.useState(noError);
    const [passwordError, setPasswordError] = React.useState(noError);

    const [formData, updateFormData] = React.useState(initialState);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        updateFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const noFormError = {
        message: '',
        display: false,
    }

    const [formError, updateFormError] = React.useState(noFormError);

    const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        handleChange(e);
    };

    const handleCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
        updateFormData({
            ...formData,
            [e.target.name]: e.target.checked
        });
    };

    const REGISTER = gql`
        mutation register($username: String!, $email: String!, $password1: String!, $password2: String!) {
            register(username: $username, email: $email, password1: $password1, password2: $password2) {
                success
                errors
                token
                refreshToken
            }
        }
    `;

    const [Register, { data, loading, error }] = useMutation(REGISTER);

    const CreateAccount = (e: React.FormEvent<HTMLFormElement>) => {

        e.preventDefault();

        let formMissing = false;

        // Check if any fields are empty and if so set error to the first empty field
        Object.entries(formData).forEach(element => {

            if (element[1] === '' || element[1] === null || element[1] === undefined || element[1] === false) {
                formMissing = true;
                updateFormError({
                    message: 'Please fill out all fields',
                    display: true
                })
            }

        });


        // check if there are any errors and if not submit the form
        if (!formMissing && !emailError.display && !nameError.display && !passwordError.display) {

            Register({
                variables: {
                    username: formData.name,
                    email: formData.email,
                    password1: formData.password,
                    password2: formData.password,
                }
            });

            if (!loading && !data.register.success) {

                for (const error in data.register.errors) {

                    // gettting the first error message from the array
                    const errorMessage = Object.values(data.register.errors[error][0])[0];

                    if (error === 'email') {
                        setEmailError({
                            // @ts-ignore
                            message: errorMessage,
                            display: true,
                        })
                    }

                    if (error === 'username') {
                        setNameError({
                            // @ts-ignore
                            message: errorMessage,
                            display: true,
                        })
                    }

                    if (error === 'password1' || error === 'password2') {
                        setPasswordError({
                            // @ts-ignore
                            message: errorMessage,
                            display: true,
                        })
                    }

                }
            } else if (!loading && data.register.success) {
                localStorage.setItem('authToken', data.register.token);
                localStorage.setItem('refreshToken', data.register.refreshToken);
                navigate('/');
                window.location.reload();

            }
        }

    }

    // check if user clicks outside of form and so reset register form
    useEffect(() => {
        const handleClickOutside = (event: any) => {

            if (event.target.id === 'sitemask' || event.target.id === 'close') {

                // Removeing error messages
                setEmailError(noError);
                setNameError(noError);
                setPasswordError(noError);
                // Resetting all inputs
                updateFormData(initialState);
                const inputs = document.querySelectorAll('input');
                inputs.forEach((input) => {
                    input.value = '';
                }
                )

                const terms = document.querySelector('input[name="terms"]') as HTMLInputElement;
                terms.checked = false;
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <LoginForm
            id='register'
            onSubmit={CreateAccount}
            header='Welcome to AirGnB'
            submit="CREATE ACCOUNT"
        >
            <Input
                placeholder="Email"
                type="email"
                name='email'
                onChange={handleChange}
                onBlur={() => {
                    if (!formData.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
                        setEmailError({
                            message: 'Email is not valid',
                            display: true
                        })
                    }
                    else {
                        setEmailError(noError);
                    }
                }}
                error={emailError.message}
                errorDisplay={emailError.display}
            />
            <Input
                placeholder="Name"
                type="text"
                name='name'
                onChange={handleChange}
                onBlur={() => {
                    if (formData.name.length < 3 || formData.name.length > 20) {
                        setNameError({
                            message: 'Name must be between 3 and 20 characters',
                            display: true
                        })
                    }
                    else {
                        setNameError(noError);
                    }
                }}
                error={nameError.message}
                errorDisplay={nameError.display}
            />
            <div style={{ width: '100%' }}>
                <Password
                    placeholder="Password"
                    onChange={handlePassword}
                    onBlur={() => {
                        if (formData.password.length < 8) {
                            setPasswordError({
                                message: 'Password must be at least 8 characters',
                                display: true
                            })
                        }
                        else {
                            setPasswordError(noError);
                        }
                    }}
                    error={passwordError.message}
                    errorDisplay={passwordError.display}
                />
                <PasswordStrengthBar
                    password={formData.password}
                    minLength={8}
                />
            </div>
            <Terms>
                <input type="checkbox" name="terms" onChange={handleCheck} />
                <label htmlFor="terms">I agree to the terms and conditions</label>
            </Terms>
        </LoginForm>
    )
};

export default Register;