import React from "react";
import { Avatar } from "antd";
import { User } from "../../../interfaces";
import { Link } from "react-router-dom";

interface Props {
    _id: string;
    avatar: string;
    size?: number;
}

const AvatarLink = (props: Props) => {

    const size = props.size ? props.size : 50;

    return (
        <Link to={`/profile/${props._id}`}>
            <Avatar size={size} src={props.avatar} />
        </Link>
    )
}

export default AvatarLink;