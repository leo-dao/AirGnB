import React, { useEffect } from "react";
import LoginForm from '../../Molecules/LoginForm';
import Input from "../../Atoms/Input";
import Password from '../../Atoms/Password';
import styled from "styled-components";
import ErrorMessage from "../../Atoms/ErrorMessage";
import { AxiosResponse } from "axios";
import { useNavigate } from "react-router-dom";
const axios = require('axios').default;

const Header = styled.h1`
    font-size: 3rem;
    font-weight: bold;
    margin-bottom: 20px;
`;

const Terms = styled.div`
    display: flex;
    gap: 5px;
    margin: 10px;
    width: 100%;
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

const Register = () => {

    const navigate = useNavigate();

    const initialState = {
        name: '',
        email: '',
        password: '',
        confirmpassword: '',
        terms: false,
    }


    const [emailError, setEmailError] = React.useState({
        message: '',
        display: false
    });
    const [nameError, setNameError] = React.useState({
        message: '',
        display: false
    });

    const [formData, updateFormData] = React.useState(initialState);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        updateFormData({
            ...formData,
            [e.target.name]: e.target.value
        });

        if (e.target.name === 'email') {
            setEmailError({
                message: '',
                display: false
            });
        }
        if (e.target.name === 'name') {
            setNameError({
                message: '',
                display: false
            });
        }
    };

    const noError = {
        msg: '',
        display: false,
    }

    const [error, updateError] = React.useState(noError);

    const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        handleChange(e);
    };

    useEffect(() => {
        passwordMatch();
    }, [formData])

    const passwordMatch = () => {

        if (formData.confirmpassword !== formData.password) {
            updateError(
                {
                    msg: "Passwords don't match",
                    display: true
                })
        }
        else {
            updateError(noError)
        }
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


    return (
        <LoginForm
            id='register'
            onSubmit={createAccount}
        >
            <Header>Welcome to AirGnB</Header>
            <Input
                placeholder="Email"
                type="email"
                name='email'
                onChange={handleChange}
                onBlur={() => {
                    if (formData.email === '') {
                        setEmailError({
                            message: 'Email is required',
                            display: true
                        })
                    }
                    else if (!formData.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
                        setEmailError({
                            message: 'Email is not valid',
                            display: true
                        })
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
                    if (formData.name === '') {
                        setNameError({
                            message: 'Name is required',
                            display: true
                        })
                    }
                }}
                error={nameError.message}
                errorDisplay={nameError.display}
            />
            <Password
                placeholder="Password"
                name='password'
                onChange={handlePassword}
            />
            <Password
                placeholder="Confirm password"
                name='confirmpassword'
                onChange={handlePassword} />

            <Terms>
                <input type="checkbox" name="terms" onChange={handleCheck} />
                <label htmlFor="terms">I agree to the terms and conditions</label>
            </Terms>
            <StyledButton type='submit'>CREATE ACCOUNT</StyledButton>
        </LoginForm>
    )
};

export default Register;