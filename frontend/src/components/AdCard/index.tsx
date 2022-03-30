import React from 'react';
import { Card, Avatar } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";

const { Meta } = Card;

export interface User {     // should i create the user interface in the userProfile component? Does it matter?
    userId: string,
    name: string,
    avatar: string,
}

export interface AdCardProps {
    adId: string;
    adImage: string;
    title: string;
    description: string;
    user: User;
};

const AdCard = (props: AdCardProps) => {

    const avatarLink = (
        <Link to={`/profile/${props.user.userId}`}><Avatar src={props.user.avatar} /></Link>
    )
    return (
        <Card
            cover={
                < div >
                    <img
                        alt="Advert Image"
                        src={props.adImage}
                        // place the image in the center of the card
                        style={{
                            display: 'block',
                            marginLeft: 'auto',
                            marginRight: 'auto',
                            //width: '100%',
                            //height: '100%',
                            width: 'auto',
                            height: 'auto',
                            maxWidth: '200px',
                            maxHeight: '300px',
                        }}
                    />
                </div >
            }

            actions={
                [
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
        </Card >
    )
};

export default AdCard;