import React from "react";
import { Result, Button } from 'antd';
import { Routes, Route, Link } from "react-router-dom";
import ErrorProps from "./interfaces";


const Error = (props: ErrorProps) => {

    const defaultMsg = "Sorry, this page does not exist";

    return (
        <div>
            <Result
                status="404"
                title="404"
                subTitle={props.msg || defaultMsg}
                extra={<Button type="primary" href="/">Back Home</Button>}
            />,
        </div>
    )
}

export default Error;