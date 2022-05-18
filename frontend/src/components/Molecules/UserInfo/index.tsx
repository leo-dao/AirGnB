import React from "react";
import UserProps from "./interfaces";
import { Avatar } from "antd";
import AvatarLink from "../../Atoms/AvatarLink";
import { Rate } from 'antd';

interface Props extends UserProps {
    fontSize?: number;
    avatarSize?: number;
}

const UserInfo = (props: Props) => {

    const fontSize = props.fontSize ? props.fontSize : 10;
    const avatarSize = props.avatarSize ? props.avatarSize : 40;

    const ratings = <h2>{props.numRatings} {props.numRatings === 1 ? "rating" : "ratings"}</h2>

    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
        }}>
            <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "400px",
            }}>
                {props.clickAble
                    ? <AvatarLink userId={props.userId} avatar={props.avatar} size={avatarSize} />
                    : <Avatar size={avatarSize} src={props.avatar} />
                }
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    marginLeft: "30px",
                    marginTop: "20px",
                    alignItems: "center",
                    fontSize: `${fontSize}px`,
                }}>
                    <h1>{props.name}</h1>
                    <h3>{props.location}</h3>
                </div>
            </div>
            <Rate defaultValue={props.rating} allowHalf disabled />
            {props.numRatings ? ratings : null}
        </div >
    )
}

export default UserInfo;