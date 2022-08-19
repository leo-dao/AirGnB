import React from "react";
import { Avatar } from "antd";
import { User } from "../../../utils/interfaces";
import TopLink from "../../../utils/TopLink";

interface Props {
    user: User;
    size?: number;
}

const AvatarLink = (props: Props) => {

    const size = props.size ? props.size : 50;

    return (
        <TopLink to={`/profile/${props.user._id}`}>
            <Avatar size={size} src={props.user.avatar} />
        </TopLink>
    )
}

export default AvatarLink;