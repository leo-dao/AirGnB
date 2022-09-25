import React, { useEffect } from "react";
import styled from "styled-components";
import SignIn from "../SignIn";
import Register from "../Register";

const LoginButtons = () => {

    useEffect(() => {
        const handleClickOutside = (event: any) => {
            const signin = document.getElementById("signin");
            const register = document.getElementById("register");

            if (signin && register) {
                if (signin.contains(event.target) || register.contains(event.target)) {
                    return;
                }
                else {
                    signin.style.display = "none";
                    register.style.display = "none";
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
        </div>
    );
};

export default LoginButtons;