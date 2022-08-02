import React from "react";
import Button from "../Button";
import { UserOutlined } from "@ant-design/icons";
import { BooleanLiteral } from "typescript";

interface Props {
    onClick?: () => void,
    header?: boolean,
}

const UserButton = (props: Props) => {
    return (
        <Button
            component={<UserOutlined style={{ fontSize: "1.7em" }} />}
            onClick={props.onClick}
            header={props.header}
        />
    )
}

export default UserButton;