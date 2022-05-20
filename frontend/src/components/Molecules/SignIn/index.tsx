import React from "react";
import { Input } from 'antd';
import Button from "../../Atoms/Button";

const SignIn = () => {
    return (
        <div style={{
            margin: "auto",
            backgroundColor: 'white',
            boxShadow: '0px 0px 15px #ccc',
            height: '330px',
            width: '500px',
        }}>
            <div style={{
                marginLeft: '20px',
                padding: '20px',
            }}>
                <h2>Sign in to connect to local musicians</h2>
            </div>

            <div style={{
                width: '80%',
                padding: '10px',
                margin: 'auto',
            }}>
                <Input size="large" placeholder="Email" />
            </div>

            <div style={{
                width: '80%',
                padding: '10px',
                margin: 'auto',
            }}>

                <Input.Password size="large" placeholder="Password" />

            </div>

            <div style={{
                display: 'flex',
                justifyContent: 'center',
                marginTop: '30px',
            }}>
                <Button text={"Sign In"}
                    width={80}
                    height={40}
                    fontSize={20}
                />
            </div>
        </div>

    );
};

export default SignIn;