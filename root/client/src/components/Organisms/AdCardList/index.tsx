import React from "react";
import AdCard from "../../Organisms/AdCard";
import { Ad } from "../../../interfaces";
import type { AdCardProps } from "../../Organisms/AdCard/index";
import { userData, adData } from "../../../fakeData";
import { List } from 'antd';
import styled from "styled-components";
import axios from "axios";

const SearchResultStyled = styled.h1`
    display: flex;
    flex-direction: column;
    text-align: center;
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
`

const StyledList = styled(List)`
    width: 100%;
    .ant-list-item {
        transition: all 0.3s ease-in-out;
        :hover {
            transform: translateY(-5px);
        }
    }
`

interface Props {
    data: Ad[],
    inputType: string,
}

const AdCardList = (props: Props) => {

    const [ads, setAds] = React.useState<Ad[]>([]);
    React.useEffect(() => {
        axios.get('/getAds')
            .then(function (res) {
                setAds(res.data);
            })
    }, [])


    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());

    var adText = "Ads"
    if (params.category !== "") {
        //setAds(ads.filter(ad => ad.category === params.category));
        adText = params.category
    }

    var locationText = ""
    if (params.location !== "") {
        //setAds(ads.filter(ad => ad.user.location === params.location));
        locationText = " in " + params.location
    }

    // TODO: Use regex to search for the search term
    // Filter by price?

    var resultText = ""
    if (params.search !== "") {
        //setAds(ads.filter(ad => ad.title.includes(params.search)));
        var resultText = " corresponding to " + params.search;
    }

    var searchResult = adText + resultText + locationText;

    if (ads.length === 0 && props.inputType !== "user") {
        return (
            <SearchResultStyled>
                Your search for: {searchResult} came back unsuccessful
            </SearchResultStyled>
        )
    }

    const result = ads.length === 1 ? " result" : " results";
    searchResult = "Your search for: " + searchResult + " came back with " + ads.length + result;

    if (params.search === "" && params.location === "" && params.category === "") {
        searchResult = "All ads";
    }

    if (props.inputType === "user") {
        setAds(adData)       // If the adCards is used in a user profile, don't use params
        searchResult = '';
    }

    return (
        <Container>
            <SearchResultStyled>{searchResult}</SearchResultStyled>
            <StyledList
                grid={{
                    xs: 1,
                    sm: 2,
                    md: 3,
                    lg: 4,
                    xl: 5,
                    xxl: 6,
                }}
                dataSource={ads}
                renderItem={((item: any) =>
                    <List.Item >
                        <AdCard
                            _id={item._id}
                            images={item.images}
                            title={item.title}
                            description={item.description}
                            user={item.user}
                            price={item.price}
                        />
                    </List.Item>)}
            />
        </Container>
    )
}

export default AdCardList;