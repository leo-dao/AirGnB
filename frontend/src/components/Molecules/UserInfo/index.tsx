import React from "react";
import UserProps from "./interfaces";
import { Avatar } from "antd";
import AvatarLink from "../../Atoms/AvatarLink";
import { Rate } from 'antd';

const UserInfo = (props: UserProps) => {

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
                    ? <AvatarLink userId={props.userId} avatar={props.avatar} size={60} />
                    : <Avatar size={100} src={props.avatar} />
                }
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    marginLeft: "30px",
                    marginTop: "20px",
                    alignItems: "center",
                }}>
                    <h2>{props.name}</h2>
                    <h3>{props.location}</h3>
                </div>
            </div>
            <Rate defaultValue={props.rating} allowHalf disabled />
            <h2>{props.numRatings}</h2>
        </div >
    )

}

export default UserInfo;