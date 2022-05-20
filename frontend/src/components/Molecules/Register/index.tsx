import React from "react";
import { Input } from 'antd';
import Button from "../../Atoms/Button";

const Register = () => {
    return (

        <div style={{
            margin: "auto",
            backgroundColor: 'white',
            boxShadow: '0px 0px 15px #ccc',
            height: '450px',
            width: '500px',
        }}>

            <div style={{
                marginLeft: '20px',
                padding: '20px',
            }}>
                <h2>Register</h2>
            </div>

            <div style={{
                width: '80%',
                padding: '10px',
                margin: 'auto',
            }}>
                <Input size="large" placeholder="Name" />
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
                margin: 'auto',
            }}>

                <Input.Password size="large" placeholder="Confim password" />

            </div>

            <div style={{
                display: 'flex',
                justifyContent: 'center',
                marginTop: '30px',
            }}>
                <Button
                    text="Create account"
                    width={80}
                    height={40}
                    fontSize={20}
                />
            </div>
        </div >


    );
};

export default Register;