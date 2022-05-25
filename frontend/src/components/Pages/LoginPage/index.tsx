import React from "react";
import Button from "../../Atoms/Button";

const LoginPage = () => {


    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            fontSize: "200%",
        }}>
            <h1>Welcome to AirGnB</h1>
            <div style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                width: "60%",
            }}>
                Please
                <Button
                    text="log into your account"
                    width={35}
                    height={40}
                    goTo="/sign-in" />
                or
                <Button
                    text={"create a new one"}
                    goTo="/register"
                    width={27}
                    height={40}
                    backgroundColor="white"
                    color="#0A6EDD" />
                to continue
            </div>
        </div>
    )
}

export default LoginPage;