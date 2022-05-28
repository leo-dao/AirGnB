import React from "react";
import UserProps from "./interfaces";
import Container from "./Styled";
import Avatar from "antd/lib/avatar/avatar";
import { Rate } from 'antd';

export interface UserInfoProps extends UserProps {
    type?: string;
    titleSize?: number;
}

const UserInfo = (props: UserInfoProps) => {

    const ratings = <h3>{props.numRatings} {props.numRatings === 1 ? "rating" : "ratings"}</h3>

    if (props.type === "card") {
        return (
            <Container>
                <h1>{props.name}</h1>
                <Rate defaultValue={props.rating} allowHalf disabled />
            </Container>
        )
    }

    return (
        <Container>
            <Avatar src={props.avatar} size={100} />
            <h1>{props.name}</h1>
            <h2>{props.location}</h2>
            <Rate defaultValue={props.rating} allowHalf disabled />
            {props.numRatings ? ratings : null}
        </Container>
    )
}

export default UserInfo;