import React from 'react';
import { Avatar } from 'antd';
import { Link } from "react-router-dom";
import AdCardProps from './interfaces';
import AvatarLink from '../../Atoms/AvatarLink';
import UserInfo from '../../Molecules/UserInfo';
import CardCover from '../../Atoms/CardCover';
import Price from '../../Atoms/Price';

const AdCard = (props: AdCardProps) => {

    const titleLen = props.title.length;
    const title = titleLen > 30 ? props.title.substring(0, 30) + '...' : props.title;

    return (
        <Link to={`/catalog/${props.adId}`} target="_blank">
            <div id="card" style={{
                backgroundColor: 'white',
                borderRadius: '10px',
                height: '380px',
                width: '250px',
                boxShadow: '0px 0px 10px rgba(0,0,0,0.5)',
            }}
            >
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <CardCover image={props.adImages[0].img} />
                    <div style={{
                        color: '#333',
                        fontSize: '20px',
                        fontWeight: 'bold',
                        margin: '10px 10px 15px 10px',
                        justifyContent: 'center',
                        textAlign: 'center',
                        height: '50px',
                        width: '200px',
                    }}>
                        {title}
                    </div>
                    <Price price={props.price} />
                    <div style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        marginTop: '10px',
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