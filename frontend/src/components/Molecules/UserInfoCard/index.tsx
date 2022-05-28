import React from "react";
import UserProps from "./interfaces";
import { Avatar } from "antd";
import AvatarLink from "../../Atoms/AvatarLink";
import { Rate } from 'antd';
import { Container, TopContainer, NameLocationStyled } from "./Styled";

export interface UserInfoProps extends UserProps {
    fontSize?: number;
    avatarSize?: number;
    type?: string;
}

const UserInfoCard = (props: UserInfoProps) => {

    const avatarSize = props.avatarSize ? props.avatarSize : 50;

    const ratings = <h2>{props.numRatings} {props.numRatings === 1 ? "rating" : "ratings"}</h2>

    return (
        <Container>
            <TopContainer>
                <AvatarLink userId={props.userId} avatar={props.avatar} size={avatarSize} />
                <NameLocationStyled type={props.type}>
                    <h1>{props.name}</h1>
                    <Rate defaultValue={props.rating} allowHalf disabled />
                    {props.numRatings ? ratings : null}
                </NameLocationStyled>
            </TopContainer>
        </Container >
    )
}

export default UserInfoCard;