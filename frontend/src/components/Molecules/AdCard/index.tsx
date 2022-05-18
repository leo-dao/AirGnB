import React from 'react';
import { Avatar } from 'antd';
import { Link } from "react-router-dom";
import AdCardProps from './interfaces';
import AvatarLink from '../../Atoms/AvatarLink';
import UserInfo from '../UserInfo';
import { SmallDashOutlined } from '@ant-design/icons';

const AdCard = (props: AdCardProps) => {

    const descLength = props.description.length;
    const description = descLength > 85 ? props.description.substring(0, 85) + '...' : props.description;

    return (
        <Link to={`/catalog/${props.adId}`} target="_blank">
            <div style={{
                backgroundColor: 'white',
                borderRadius: '10px',
                height: '350px',
                width: '250px',
                boxShadow: '0px 0px 10px rgba(0,0,0,0.5)',
            }}>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>

                    <img src={props.adImages[0].img} alt="ad" style={{
                        borderTopLeftRadius: '10px',
                        borderTopRightRadius: '10px',
                        objectFit: 'cover',
                        height: "150px",
                        width: "250px",
                        marginBottom: '20px',
                    }}></img>

                    <div style={{
                        display: 'flex',
                        color: '#333',
                        fontSize: '20px',
                        fontWeight: 'bold',
                        marginBottom: '20px',
                    }}>
                        {props.title}
                    </div>

                    <div style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                    }}>
                        <UserInfo
                            userId={props.user.userId}
                            name={props.user.name}
                            avatar={props.user.avatar}
                            rating={props.user.rating}
                            clickAble={true}
                        />

                    </div>
                </div>
            </div>
        </Link >
    )
};

export default AdCard;