import React from 'react';
import { Card, Avatar } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Routes, Route, Link } from "react-router-dom";

const { Meta } = Card;

interface User {
    avatar: string,
    id: string,
}

export interface AdCardProps {
    adImage: string;
    title: string;
    description: string;
    user: User;
};

// Casting type to AdCard as it is a component
const AdCard = (props: AdCardProps) => {

    const avatarLink = (
        <Link to={`/profile/${props.user.id}`}><Avatar src={props.user.avatar} /></Link>
    )
    return (
        <Card
            cover={
                <img
                    alt="Advert Image"
                    src={props.adImage}
                    style={{ height: 300 }}
                />
            }
            actions={[
                <SettingOutlined key="setting" />,
                <EditOutlined key="edit" />,
                <EllipsisOutlined key="ellipsis" />,
            ]}
        >
            <Meta
                avatar={avatarLink}
                title={props.title}
                description={props.description}
            />
        </Card>
    )
};

export default AdCard;
