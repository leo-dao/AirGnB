import React from "react";
import Input from "../../Atoms/Input";
import Button from "../../Atoms/Button";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 30%;
`;

const ButtonContainer = styled.div`
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: center;
    margin-top: 5%;
`;

const Register = () => {

    const createAccount = () => {
        console.log("Account created");
    }

    return (
        <Container>
            <Input placeholder={"Email"} type={"email"} required />
            <Input placeholder={"Username"} type={"text"} required />
            <Input placeholder={"Password"} type={"password"} required />
            <Input placeholder={"Confirm password"} type={"password"} required />
            <ButtonContainer>
                <Button text={"Create profile"} width={'170px'} onClick={createAccount} />
            </ButtonContainer>
        </Container>

    );
};

export default Register;