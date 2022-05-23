import React from "react";
import AdCard from "../../Organisms/AdCard";
import AdCardProps from "../../Organisms/AdCard/interfaces";
import { useParams } from "react-router-dom";
import { userData, adData } from "../../../fakeData";
import { List } from 'antd';
import { ConsoleSqlOutlined } from "@ant-design/icons";

interface Props {
    data: AdCardProps[],
}

const AdCardList = (props: Props) => {

    var ads = props.data;

    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());

    // Get ads of the same category if a category is selected
    if (params.category !== "") {
        ads = adData.filter(ad => ad.category === params.category);
    }
    // Get ads of the same location if a location is selected
    if (params.location !== "") {
        ads = ads.filter(ad => ad.user.location === params.location);
    }

    // TODO: Use regex to search for the search term
    // Filter by price?

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
                dataSource={ads}
                renderItem={(item =>
                    <List.Item >
                        <div>
                            <AdCard
                                adId={item.adId}
                                adImages={item.adImages}
                                title={item.title}
                                description={item.description}
                                user={item.user}
                                price={item.price}
                            />
                        </div>
                    </List.Item>)}
            />
        </div>
    )
}

export default AdCardList;