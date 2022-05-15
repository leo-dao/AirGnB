import React from "react";
import { Input, Button } from 'antd';


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
                <h2>Sign in</h2>
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
                width: '80%',
                padding: '10px',
                marginLeft: '50px',
                marginTop: '30px',
            }}>
                <Button size="large" type="primary" style={{ width: "100%" }}>
                    Sign in
                </Button>
            </div>
        </div>

    );
};

export default SignIn;