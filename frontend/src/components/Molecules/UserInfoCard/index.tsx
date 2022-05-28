import React from "react";
import UserProps from "../UserInfo/interfaces";
import AvatarLink from "../../Atoms/AvatarLink";
import UserInfo from "../UserInfo";
import { Container, TopContainer } from "./Styled";

export interface UserInfoProps extends UserProps {
    fontSize?: number;
    avatarSize?: number;
    type?: string;
}

const UserInfoCard = (props: UserInfoProps) => {

    const avatarSize = props.avatarSize ? props.avatarSize : 50;

    return (
        <Container>
            <TopContainer>
                <AvatarLink userId={props.userId} avatar={props.avatar} size={avatarSize} />
                <UserInfo
                    type={"card"}
                    name={props.name}
                    location={props.location}
                    rating={props.rating}
                    numRatings={props.numRatings}
                    userId={props.userId}
                    avatar={props.avatar}
                />
            </TopContainer>
        </Container >
    )
}

export default UserInfoCard;