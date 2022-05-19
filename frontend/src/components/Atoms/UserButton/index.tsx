import React from "react";
import Button from "../Button";
import { UserOutlined } from "@ant-design/icons";

interface Props {
    width?: number,
    height?: number,
    goTo?: string,
}


const UserButton = (props: Props) => {
    return (
        <Button
            component={<UserOutlined style={{ fontSize: "30px" }} />}
            width={props.width}
            height={props.height}
            goTo={props.goTo} />
    )
}

export default UserButton;