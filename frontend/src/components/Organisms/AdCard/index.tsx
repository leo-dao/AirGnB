import React from 'react';
import { Avatar } from 'antd';
import { Link } from "react-router-dom";
import AdCardProps from './interfaces';
import UserInfo from '../../Molecules/UserInfoCard';
import CardCover from '../../Atoms/CardCover';
import Price from '../../Atoms/Price';
import { CardWrapper, CardTitle, UserInfoWrapper } from './Styled';

const AdCard = (props: AdCardProps) => {

    const titleLen = props.title.length;
    const title = titleLen > 30 ? props.title.substring(0, 30) + '...' : props.title;

    return (
        <Link to={`/catalog/${props.adId}`} target="_blank">
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
        </Link >
    )
};

export default AdCard;