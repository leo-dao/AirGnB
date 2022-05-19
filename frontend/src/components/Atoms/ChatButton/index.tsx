import React from "react";
import Button from "../../Atoms/Button";
import { MessageOutlined } from "@ant-design/icons";

interface Props {
    text?: string,
    width?: number,
    height?: number,
    onClick: () => void,
}

const ChatButton = (props: Props) => {
    return (
        <Button
            onClick={props.onClick}
            backgroundColor="white"
            color="#0A6EDD"
            width={props.width}
            height={props.height}
            component={<MessageOutlined style={{ fontSize: "30px" }} />} />

    )
}

export default ChatButton;