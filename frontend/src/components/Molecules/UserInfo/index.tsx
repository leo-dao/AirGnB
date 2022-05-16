import React from "react";
import UserProps from "./interfaces";
import { Avatar } from "antd";
import AvatarLink from "../../Atoms/AvatarLink";

const UserInfo = (props: UserProps) => {

    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            margin: "auto",
            alignItems: "center",
            width: "400px",
            boxShadow: '0px 0px 10px #ccc',
        }}>
            {props.clickAble
                ? <AvatarLink userId={props.userId} avatar={props.avatar} />
                : <Avatar size={60} src={props.avatar} />
            }

            <div style={{
                display: "flex",
                flexDirection: "column",
                marginLeft: "20px",
                marginTop: "20px",
            }}>
                <h1>{props.name}</h1>
                <h2>{props.numAds} ads</h2>
            </div>
        </div>
    )

}

export default UserInfo;