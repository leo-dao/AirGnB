import React from "react";
import { Avatar } from "antd";
import { Link } from "react-router-dom";

interface Props {
    userId: string,
    avatar: string,
    size?: number,
}

const AvatarLink = (props: Props) => {

    const size = props.size ? props.size : 40;

    return (
        <Link to={`/profile/${props.userId}`}>
            <Avatar size={props.size} src={props.avatar} />
        </Link>
    )
}

export default AvatarLink;