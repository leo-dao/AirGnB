import React from "react";
import UserProps from "./interfaces";
import Avatar from "antd/lib/avatar/avatar";
import { Rate } from 'antd';
import styled from 'styled-components';

const Container = styled.div.attrs((props: UserInfoProps) => props)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    h1 {
        font-size: ${(props: UserInfoProps) => props.titleSize ? props.titleSize : "2em"};
    }
    h2 {
        margin-top: -5%;
    }
    h3 {
        color: #999;
    }
    `;

interface UserInfoProps extends UserProps {
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