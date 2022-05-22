import React from "react";
import { MenuFoldOutlined } from "@ant-design/icons";
import DropdownMenu from "../DropdownMenu";
import categories from "./categories";

const SortCategories = () => {

    const sortButton = (
        <div
            style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#FAFAFA",
                border: "1px solid #ccc",
                borderRadius: "15px",
                fontSize: "15px",
                cursor: "pointer",
            }}>
            <div style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginLeft: "10px",
                marginRight: "10px",
                cursor: "pointer",
                textAlign: "center",
                fontSize: "18px",
                color: "#8D8D8D",
                height: "2.5em",
            }}>
                Sort by
            </div>

            <div style={{
                borderLeft: "1px solid #ccc",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                paddingLeft: "10px",
                paddingRight: "10px",
                fontSize: "22px",
                color: "black"
            }}>
                <MenuFoldOutlined />
            </div>
        </div >
    )

    return (
        <DropdownMenu
            button={sortButton}
            menu={categories}
        />
    )
}
export default SortCategories;