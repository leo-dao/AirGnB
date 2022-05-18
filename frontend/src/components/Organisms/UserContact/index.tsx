import React from "react";
import { Button } from "antd";

const UserContact = () => {
    return (
        <div style={{
            display: "flex",
            justifyContent: "center",

        }}>
            <Button style={{
                marginTop: '30px',
                width: '150px',
                height: '50px',
                border: '0.5px solid black',
                borderRadius: '10px',
                boxShadow: '0px 0px 1px black',
                backgroundColor: "#0A6EDD",
                color: 'white',
            }}> Rent </Button>

            <Button style={{
                marginTop: '30px',
                marginLeft: '30px',
                width: '150px',
                height: '50px',
                border: '0.5px solid black',
                borderRadius: '10px',
                boxShadow: '0px 0px 1px black',
                font: 'bold',
                color: '#0A6EDD',
            }}
            > Message </Button>
        </div>
    )
}

export default UserContact;