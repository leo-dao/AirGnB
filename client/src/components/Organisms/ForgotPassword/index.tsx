import React, { useEffect } from "react";
import LoginForm from '../../Molecules/LoginForm';
import Input from "../../Atoms/Input";
import Password from '../../Atoms/Password'
import styled from "styled-components";
import { gql, useMutation } from '@apollo/client';
import { ConsoleSqlOutlined } from "@ant-design/icons";

const SuccessText = styled.div`
    color: #175996;
    font-weight: bold;
    font-size: 18px;
    padding: 10px;
`;

const ForgotPassword = () => {

    const noError = {
        message: '',
        display: false
    }

    const [email, setEmail] = React.useState('');

    const emailMatch = (email: string) => {
        return email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
    }

    const [emailError, setEmailError] = React.useState(noError);

    const [success, setSuccess] = React.useState({
        message: '',
        status: false
    });

    const FORGOT_PASSWORD = gql`
        mutation sendPasswordResetEmail($email: String!) {
            sendPasswordResetEmail(email: $email) {
                success,
                errors,
            }
        }
    `;

    const [forgotPassword, { data, loading, error }] = useMutation(FORGOT_PASSWORD);

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {

        e.preventDefault();

        if (!emailError.display) {
            forgotPassword({
                variables: {
                    email: email
                }
            });

            console.log(data, error);

            setSuccess({
                message: error ? error.message : 'Email sent successfully',
                status: data.sendPasswordResetEmail.success
            });
        }
    }

    return (
        <LoginForm
            id='forgot'
            onSubmit={sendEmail}
            submit='SEND EMAIL'
            header='Password Reset'
        >
            <Input
                type='email'
                placeholder="Email"
                onChange={(e) => {
                    setEmail(e.target.value);
                    if (emailMatch(e.target.value)) {
                        setEmailError(noError);
                    }
                }}
                onBlur={() => {
                    if (!emailMatch(email)) {
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
            <div style={{
                fontSize: '18px',
                color: success.status ? '#175996' : '#ff0000',
                fontWeight: 'bold',
            }}>
                {success.message}
            </div>
        </LoginForm>
    )
};

export default ForgotPassword;