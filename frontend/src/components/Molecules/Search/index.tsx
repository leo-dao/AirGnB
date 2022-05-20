import React from "react";
import { Input } from 'antd';
import SortCategories from "../SortCategories";
import SearchBox from "../SearchBox";
import { SearchOutlined } from "@ant-design/icons";

const Search = () => {

    const OnClick = () => {
        console.log('Searching...');
    }

    return (
        <div style={{
            display: "flex",
            flexDirection: "row",
        }}>
            <SortCategories />
            {/* <div style={{ marginLeft: "10%" }} /> */}
            <SearchBox
                text='What are you searching for?'
                type="text"
                icon={<SearchOutlined />}
                onClick={OnClick}
            />
        </div>
    )
}
export default Search;