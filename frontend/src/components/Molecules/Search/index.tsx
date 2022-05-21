import React from "react";
import { Input } from 'antd';
import SortCategories from "../SortCategories";
import SearchBox from "../SearchBox";

const Search = () => {

    const onChange = (e: React.KeyboardEvent<HTMLInputElement>) => {
        console.log(e.target);
    }

    return (
        <div style={{
            display: "flex",
            flexDirection: "row",
        }}>
            <SortCategories />
            {/* <div style={{ marginLeft: "10%" }} /> */}
            <SearchBox />
        </div>
    )
}
export default Search;