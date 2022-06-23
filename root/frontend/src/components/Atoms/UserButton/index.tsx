import React from "react";
import Button from "../Button";
import { UserOutlined } from "@ant-design/icons";

interface Props {
    onClick?: () => void,
}

const UserButton = (props: Props) => {
    return (
        <Button
            component={<UserOutlined style={{ fontSize: "1.7em" }} />}
            onClick={props.onClick} />
    )
}

export default UserButton;