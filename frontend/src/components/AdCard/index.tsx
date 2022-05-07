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
        <Link to={`/profile/${props.user.userId}`} target="_blank">
            <Avatar src={props.user.avatar} />
        </Link>
    )

    return (
        <Link to={`/catalog/${props.adId}`} target="_blank">
            <Card
                cover={
                    <div style={{
                        color: 'white',
                        height: '300px',
                        width: '200px',
                    }}
                    >
                        <img
                            alt="Advert Image"
                            src={props.adImage}
                            style={{
                                position: 'absolute',
                                top: '-30%',
                                left: '0',
                                right: '0',
                                bottom: '0',
                                margin: 'auto',
                                width: '100%',
                                height: '100%',
                                maxHeight: '300px',
                                maxWidth: '200px',
                                objectFit: 'contain',
                            }}
                        />
                    </div>
                }

                /*     actions={
                        [
                            <SettingOutlined key="setting" />,
                            <EditOutlined key="edit" />,
                            <EllipsisOutlined key="ellipsis" />,
                        ]} */

                bodyStyle={{
                    height: '150px',    // Check the max length of the description that would work
                    overflow: 'hidden', // ??? Ok solution for now i guess
                }}

                hoverable={true}
            >

                <Meta
                    avatar={avatarLink}
                    title={props.title}
                    description={props.description}
                    style={{
                        textAlign: 'center',
                        borderTop: '2px solid #e8e8e8',
                        paddingTop: '10px',
                        fontSize: '1em',

                    }}
                />
            </Card >
        </Link>
    )
};

export default AdCard;