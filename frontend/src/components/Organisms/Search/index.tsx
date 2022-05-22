import React from "react";
import { Input } from 'antd';
import SortCategories from "../../Molecules/SortCategories";
import SearchBox from "../../Molecules/SearchBox";
import LocationFilter from "../../Molecules/LocationFilter";
import DropdownMenu from "../../Molecules/DropdownMenu";

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
            <LocationFilter />
            {/* <div style={{ marginLeft: "10%" }} /> */}
            <SearchBox />
        </div>
    )
}
export default Search;