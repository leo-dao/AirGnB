import React from "react";
import AdCard from "../../Molecules/AdCard";
import AdCardProps from "../../Molecules/AdCard/interfaces";
import { List } from 'antd';

interface Props {
    data: AdCardProps[],
}

const AdCardList = (props: Props) => {
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
                    <List.Item >
                        <div>
                            <AdCard
                                adId={item.adId}
                                adImages={item.adImages}
                                title={item.title}
                                description={item.description}
                                user={item.user}
                            />
                        </div>
                    </List.Item>
                )}
            />
        </div>
    )
}

export default AdCardList;