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
        })

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