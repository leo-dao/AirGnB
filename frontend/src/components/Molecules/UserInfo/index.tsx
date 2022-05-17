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
                    ? <AvatarLink userId={props.userId} avatar={props.avatar} size={130} />
                    : <Avatar size={150} src={props.avatar} />
                }
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    marginLeft: "30px",
                    marginTop: "20px",
                    alignItems: "center",
                }}>
                    <h1>{props.name}</h1>
                    <h2>{props.location}</h2>
                </div>
            </div>
            <Rate defaultValue={props.rating} allowHalf />
            <h2>{props.numRatings} {props.numRatings === 1 ? "rating" : "ratings"}</h2>
        </div >
    )

}

export default UserInfo;