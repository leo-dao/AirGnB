import React, { useEffect } from "react";
import LoginForm from '../../Molecules/LoginForm';
import Input from "../../Atoms/Input";
import Password from '../../Atoms/Password';
import styled from "styled-components";
import ErrorMessage from "../../Atoms/ErrorMessage";
import PasswordStrengthBar from 'react-password-strength-bar';
import { AxiosResponse } from "axios";
import { useNavigate } from "react-router-dom";
const axios = require('axios').default;

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
        confirmpassword: '',
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

    const noError2 = {
        msg: '',
        display: false,
    }

    const [error, updateError] = React.useState(noError2);

    const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        handleChange(e);
    };

    const handleCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
        updateFormData({
            ...formData,
            [e.target.name]: e.target.checked
        });
    };

    const createAccount = (e: React.FormEvent<HTMLFormElement>) => {

        let formMissing = false;

        // Check if any fields are empty and if so set error to the first empty field
        Object.entries(formData).forEach(element => {

            if (element[1] === '' || element[1] === null || element[1] === undefined || element[1] === false) {
                formMissing = true;
                updateError({
                    msg: 'Please fill out all fields',
                    display: true
                })
            }

        })

        if (!formMissing) {
            e.preventDefault();

            axios.post('/register', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }).then((res: AxiosResponse<any, any>) => {
                localStorage.setItem('authToken', JSON.stringify(res.data));
                navigate('/');

            }).catch((err: any) => {
                updateError(
                    { msg: err.response.data.error, display: true }
                )
            });
        }

        e.preventDefault();
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
            onSubmit={createAccount}
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