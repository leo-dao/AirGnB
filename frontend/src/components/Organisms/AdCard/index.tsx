import React from 'react';
import { Avatar } from 'antd';
import { Link } from "react-router-dom";
import AdCardProps from './interfaces';
import UserInfo from '../../Molecules/UserInfoCard';
import CardCover from '../../Atoms/CardCover';
import Price from '../../Atoms/Price';
import styled from 'styled-components';

const CardWrapper = styled.div`
    background-color: white;
    border-radius: 10px;
    height: 380px;
    width: 240px;
    box-shadow: 0px 0px 10px rgba(0,0,0,0.5);
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin: auto;
`;

const CardTitle = styled.div`
    color: #333;
    font-size: 18px;
    font-weight: bold;
    margin-top: 10px;
    height: 70px;
`;

const UserInfoWrapper = styled.div`
    margin-top: 5%;
`;

const AdCard = (props: AdCardProps) => {

    const titleLen = props.title.length;
    const title = titleLen > 30 ? props.title.substring(0, 30) + '...' : props.title;

    const Card = (
        <CardWrapper>
            <CardCover image={props.adImages[0].img} />
            <CardTitle>
                {title}
            </CardTitle>
            <Price price={props.price} type={"card"} />
            <UserInfoWrapper>
                <UserInfo
                    userId={props.user.userId}
                    name={props.user.name}
                    avatar={props.user.avatar}
                    rating={props.user.rating}
                    type={"card"}
                    clickAble
                />
            </UserInfoWrapper>
        </CardWrapper >
    );

    if (props.clickable) {
        return (
            <Link to={`/listings/${props.adId}`} target="_blank">
                {Card}
            </Link >
        );
    }

    return (
        <div>
            {Card}
        </div>
    )
};

export default AdCard;