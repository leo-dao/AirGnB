import React from "react";
import { Result } from 'antd';
import { Routes, Route, Link } from "react-router-dom";
import Button from "../../Atoms/Button";

interface Props {
    msg: string;
}

const Error = (props: Props) => {

    const defaultMsg = "Sorry, this page does not exist";

    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
        }}>
            <Result
                status="404"
                title="404"
                subTitle={props.msg || defaultMsg} />
            <Button
                goTo="/"
                text="Back Home"
                width={20}
                height={60}
                fontSize={35}
            />
        </div>
    )
}

export default Error;