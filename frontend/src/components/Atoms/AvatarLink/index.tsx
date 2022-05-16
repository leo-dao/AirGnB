import React from "react";
import { Avatar } from "antd";
import { Link } from "react-router-dom";

interface Props {
    userId: string,
    avatar: string,
}

const AvatarLink = (props: Props) => {
    return (
        <Link to={`/profile/${props.userId}`}>
            <Avatar size={60} src={props.avatar} />
        </Link>
    )
}

export default AvatarLink;