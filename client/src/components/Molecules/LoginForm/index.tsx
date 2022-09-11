import React, { useEffect } from "react";
import styled from "styled-components";
import Close from "../../Atoms/Close";

const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
    padding: 30px;
    border-radius: 5px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5); 
    z-index: 100;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

interface Props {
    children: React.ReactNode;
    onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
    display: boolean;
    close: () => void;
}

const LoginForm = (props: Props) => {

    useEffect(() => {
        const sitemask = document.getElementById("sitemask");
        const body = document.getElementsByTagName("body")[0];

        if (props.display) {
            //@ts-ignore
            sitemask.style.display = "block";
            body.style.overflow = "hidden";
            body.style.height = "100vh";
        } else {
            //@ts-ignore
            sitemask.style.display = "none";
            body.style.overflow = "auto";
            body.style.height = "auto";
        }
    }, [props.display]);


    return (
        <div style={{
            display: props.display ? "block" : "none",
            zIndex: 100,
        }}>
            <FormContainer
                onSubmit={props.onSubmit}
                encType='multipart/form-data'>
                {props.children}
                <Close onClick={props.close} />
            </FormContainer>
        </div>
    );
};

export default LoginForm;