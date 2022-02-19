import React from "react";
import { Result, Button } from 'antd';
import { Routes, Route, Link } from "react-router-dom";

interface ErrorProps {
    msg: string;
}



const Error = (props: ErrorProps) => {

    // define a default error message
    const defaultMsg = "Sorry, this page does not exist";

    return (
        <div>
            <Result
                status="404"
                title="404"
                subTitle={props.msg || defaultMsg}
                extra={<Button type="primary" href="/home">Back Home</Button>}
            />,
        </div>
    )
}

export default Error;