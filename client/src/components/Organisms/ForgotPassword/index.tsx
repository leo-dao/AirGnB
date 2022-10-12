import React, { useEffect } from "react";
import LoginForm from '../../Molecules/LoginForm';
import Input from "../../Atoms/Input";
import Password from '../../Atoms/Password'
import styled from "styled-components";

const ForgotPassword = () => {

    const noError = {
        message: '',
        display: false
    }

    const [email, setEmail] = React.useState('');
    const [emailError, setEmailError] = React.useState(noError);

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        console.log("send email");
    }

    return (
        <LoginForm
            id='forgot'
            onSubmit={sendEmail}
            submit='SEND EMAIL'
            header='Forgot Password'
        >
            <Input
                type='email'
                placeholder="Email"
                onChange={(e) => {
                    setEmail(e.target.value);
                }}
                onBlur={() => {
                    if (!email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
                        setEmailError({
                            message: 'Email is not valid',
                            display: true
                        })
                    }
                }}
                error={emailError.message}
                errorDisplay={emailError.display}
            />
        </LoginForm>
    )
};

export default ForgotPassword;