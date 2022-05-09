import React from "react";

import { Button } from 'antd';

const JumpCatalog = () => {
    return (
        <div style={{
            display: "flex",
            marginTop: "50px",
            marginBottom: "50px",
        }}>
            <Button type="primary" size="large" href="/catalog" style={{
                fontSize: "25px",
                width: "300px",
                height: "70px",
                margin: "auto",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "20px",
            }}>
                Jump to catalog
            </Button>

        </div>
    );
}

export default JumpCatalog;