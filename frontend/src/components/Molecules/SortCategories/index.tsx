import React from "react";
import SearchBox from "../SearchBox";
import Button from "../../Atoms/Button";
import { MenuFoldOutlined } from "@ant-design/icons";

const SortCategories = () => {

    const onSearch = () => {
        console.log('Searching...');
    }


    return (
        <div style={{
            display: "flex",
            flexDirection: "row",
        }}
            onClick={onSearch}>
            <SearchBox
                text="Filter"
                type="button"
                icon={<MenuFoldOutlined />}
            />
        </div>
    )
}
export default SortCategories;