import React, { useEffect } from "react";
import styled from "styled-components";
import Close from "../../Atoms/Close";

interface LoginProps {
    children: React.ReactNode;
    childrenBottom?: React.ReactNode;
    onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
    id: string;
    header: string;
    submit: string;
};

const FormContainer = styled.form.attrs((props: LoginProps) => props)`
    display: none;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    background-color: white;
    padding: 50px;
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5); 
    z-index: 100;

    @media (max-width: 768px) {
        width: 90%;
    }
`;

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



const LoginForm = (props: LoginProps) => {

    const close = () => {
        const sitemask = document.getElementById("sitemask");
        const body = document.getElementsByTagName("body")[0];

        //@ts-ignore
        sitemask.style.display = "none";
        body.style.overflow = "auto";
        body.style.height = "auto";

        const loginForm = document.getElementById(props.id);
        //@ts-ignore
        loginForm.style.display = "none";
    };

    return (
        <FormContainer
            id={props.id}
            onSubmit={props.onSubmit}
            encType='multipart/form-data'>
            <Header>{props.header}</Header>
            {props.children}
            <StyledButton type='submit'>{props.submit}</StyledButton>
            {props.childrenBottom}
            <Close onClick={close} />
        </FormContainer>
    );
};

export default LoginForm;