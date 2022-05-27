import React from "react";
import Button from "../Button";
import { UserOutlined } from "@ant-design/icons";

interface Props {
    goTo?: string,
}

const UserButton = (props: Props) => {
    return (
        <Button
            component={<UserOutlined style={{ fontSize: "1.7em" }} />}
            goTo={props.goTo} />
    )
}

export default UserButton;