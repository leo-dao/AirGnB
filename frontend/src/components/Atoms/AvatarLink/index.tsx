import React from "react";
import { Avatar } from "antd";
import { Link } from "react-router-dom";

interface Props {
    userId: string,
    avatar: string,
    size?: number,
}

const AvatarLink = (props: Props) => {

    const size = props.size ? props.size : 50;

    return (
        <Link to={`/profile/${props.userId}`}>
            <Avatar size={size} src={props.avatar} />
        </Link>
    )
}

export default AvatarLink;