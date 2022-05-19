import React from "react";
import Button from "../../Atoms/Button";

const LoginPage = () => {


    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            fontSize: "1.5rem",
        }}>
            <h1>Welcome to AirGnB</h1>
            <div style={{
                display: "flex",
                flexDirection: "row",
                // add spacing between buttons
                justifyContent: "space-between",
                width: "30%",
            }}>
                Please
                <Button text="log into your account" height={35} width={170} goTo="/signIn" />
                or <Button text={"create a new one"} height={35} width={160} goTo="/register" backgroundColor="white" color="#0A6EDD" /> to continue
            </div>
        </div>
    )
}

export default LoginPage;