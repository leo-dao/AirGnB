import React, { useEffect } from "react";
import styled from "styled-components";
import Close from "../../Atoms/Close";

interface LoginProps {
    children: React.ReactNode;
    onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
    id: string;
}

const FormContainer = styled.form.attrs((props: LoginProps) => props)`
    display: none;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    flex-direction: column;
    align-items: center;
    background-color: white;
    padding: 30px;
    border-radius: 5px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5); 
    z-index: 100;
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
            {props.children}
            <Close onClick={close} />
        </FormContainer>
    );
};

export default LoginForm;