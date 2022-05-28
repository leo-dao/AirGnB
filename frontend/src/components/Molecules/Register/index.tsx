import React from "react";
import Button from "../../Atoms/Button";
import Input from "../../Atoms/Input";
import { Container } from "./Styled";

const Register = () => {
    return (

        <Container>

            <h2 style={{ marginTop: "20px" }}>Register</h2>
            <Input placeholder={"Name"} />
            <Input placeholder={"Email"} type={"email"} />
            <Input placeholder={"Password"} type={"password"} />
            <Input placeholder={"Confim password"} type={"password"} />
            <Button text="Create account" />

        </Container >

    );
};

export default Register;