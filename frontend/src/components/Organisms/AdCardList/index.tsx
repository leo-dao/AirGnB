import React from "react";
import AdCard from "../../Organisms/AdCard";
import AdCardProps from "../../Organisms/AdCard/interfaces";
import { userData, adData } from "../../../fakeData";
import { List } from 'antd';

interface Props {
    data: AdCardProps[],
    inputType: string,
}

const AdCardList = (props: Props) => {

    var ads = props.data;

    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());

    var adText = "Ads"
    if (params.category !== "") {
        ads = adData.filter(ad => ad.category === params.category);
        adText = params.category
    }

    var locationText = ""
    if (params.location !== "") {
        ads = ads.filter(ad => ad.user.location === params.location);
        locationText = " in " + params.location
    }

    // TODO: Use regex to search for the search term
    // Filter by price?

    var resultText = ""
    if (params.search !== "") {
        ads = ads.filter(ad => ad.title.includes(params.search));
        var resultText = " corresponding to " + params.search;
    }

    var searchResult = adText + resultText + locationText;

    if (ads.length === 0 && props.inputType !== "user") {
        return (
            <div style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}>
                <h1> Your search for: {searchResult} came back unsuccessful </h1>
            </div>
        )
    }

    const result = ads.length === 1 ? " result" : " results";
    searchResult = "Your search for: " + searchResult + " came back with " + ads.length + result;

    if (params.search === "" && params.location === "" && params.category === "") {
        searchResult = "All ads";
    }

    if (props.inputType === "user") {
        ads = props.data;       // If the adCards is used in a user profile, don't use params
        searchResult = '';
    }

    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
        }}>
            <h1>{searchResult}</h1>
            <div style={{
                margin: "auto",
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
        </div>
    )
}

export default AdCardList;