import React from 'react';
import { Card, Avatar } from 'antd';
import { Link } from "react-router-dom";
import AdCardProps from './interfaces';
import AvatarLink from '../../Atoms/AvatarLink';

const { Meta } = Card;

const AdCard = (props: AdCardProps) => {

    const descLength = props.description.length;
    const description = descLength > 85 ? props.description.substring(0, 85) + '...' : props.description;

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
                            src={props.adImages[0].img} // using the first image in the array

                            style={{
                                position: 'absolute',
                                top: '-30%',
                                left: '0',
                                right: '0',
                                bottom: '0',
                                margin: 'auto',
                                maxHeight: '250px',
                                maxWidth: '200px',
                            }}
                        />
                    </div>
                }
                bodyStyle={{
                    height: '150px',
                    overflow: 'hidden',
                }}
                hoverable={true}
            >
                <Meta
                    avatar={<AvatarLink userId={props.user.userId} avatar={props.user.avatar} />}
                    title={props.title}
                    description={description}
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