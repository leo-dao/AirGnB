import React from "react";
import UserProps from "./interfaces";
import { Avatar } from "antd";
import AvatarLink from "../../Atoms/AvatarLink";

const UserInfo = (props: UserProps) => {

    const ad = props.numAds === 1 ? "ad" : "ads";

    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "400px",
        }}>
            {props.clickAble
                ? <AvatarLink userId={props.userId} avatar={props.avatar} size={130} />
                : <Avatar size={150} src={props.avatar} />
            }

            <div style={{
                display: "flex",
                flexDirection: "column",
                marginLeft: "20px",
                marginTop: "20px",
            }}>
                <h1>{props.name}</h1>
                <h2>{props.numAds} {ad}</h2>
            </div>
        </div>
    )

}

export default UserInfo;