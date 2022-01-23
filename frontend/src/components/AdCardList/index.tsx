import React from "react";
import AdCard, { AdCardProps } from "../AdCard";
import { List } from 'antd';

interface Props {
    data: AdCardProps[],
}


const AdCardList: React.FunctionComponent<Props> = (props) => {
    return (
        <List
            grid={{
                gutter: 16,
                xs: 1,
                sm: 2,
                md: 4,
                lg: 4,
                xl: 6,
            }}
            dataSource={props.data}
            renderItem={item => (
                <List.Item>
                    <AdCard
                        adImage={item.adImage}
                        title={item.title}
                        description={item.description}
                        user={item.user}
                    />
                </List.Item>
            )}
        />
    )
}

export default AdCardList;