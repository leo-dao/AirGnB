import React from "react";
import Button from "../../Atoms/Button";
import { MessageOutlined } from "@ant-design/icons";

interface Props {
    text?: string,
    onClick: () => void,
}

const ChatButton = (props: Props) => {
    return (
        <Button
            secondary
            onClick={props.onClick}
            component={
                <MessageOutlined style={{ fontSize: "1.7em" }} />
            }
        />
    )
}

export default ChatButton;