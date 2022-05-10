import React from "react";
import AdCard, { AdCardProps } from "../AdCard";
import { List } from 'antd';

interface Props {
    data: AdCardProps[],
}


const AdCardList: React.FunctionComponent<Props> = (props) => {
    return (
        <div style={{
            margin: "20px 40px 0px 40px",
        }}>
            <List
                grid={{
                    gutter: 20,
                    xs: 1,
                    sm: 2,
                    md: 3,
                    lg: 4,
                    xl: 5,
                    xxl: 6,
                }}
                dataSource={props.data}
                renderItem={item => (
                    <List.Item>
                        <AdCard
                            adId={item.adId}
                            adImage={item.adImage}
                            title={item.title}
                            description={item.description}
                            user={item.user}
                        />
                    </List.Item>
                )}
            />
        </div>
    )
}

export default AdCardList;