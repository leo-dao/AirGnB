import React, { useEffect } from "react";
import styled from "styled-components";
import SignIn from "../SignIn";
import Register from "../Register";
import ForgotPassword from "../ForgotPassword";

const LoginButtons = () => {

    useEffect(() => {
        const handleClickOutside = (event: any) => {
            const signin = document.getElementById("signin");
            const register = document.getElementById("register");
            const forgotPassword = document.getElementById("forgot");
            const body = document.getElementsByTagName("body")[0];

            if (signin && register && forgotPassword) {
                if (signin.contains(event.target) || register.contains(event.target) || forgotPassword.contains(event.target)) {
                    return;
                }
                else {
                    signin.style.display = "none";
                    register.style.display = "none";
                    forgotPassword.style.display = "none";
                    body.style.overflow = "auto";
                    body.style.height = "auto";
                }
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);


    return (
        <div>
            <SignIn />
            <Register />
            <ForgotPassword />
        </div>
    );
};

export default LoginButtons;