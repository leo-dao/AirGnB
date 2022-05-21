import React from "react";
import SearchBox from "../SearchBox";
import Button from "../../Atoms/Button";
import { MenuFoldOutlined } from "@ant-design/icons";

const SortCategories = () => {

    const openMenu = () => {
        console.log('Menu opening');
    }

    return (
        <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#FAFAFA",
            border: "1px solid #ccc",
            borderRadius: "5px",
            fontSize: "15px",
            cursor: "pointer",
        }}>
            <div style={{
                display: "flex",
                flexDirection: "row",
            }}
                onClick={openMenu}>
                <input
                    type="button"
                    value="Sort by"
                    style={{
                        border: "none",
                        outline: "none",
                        backgroundColor: "transparent",
                        cursor: "pointer",
                        textAlign: "center",
                        fontSize: "18px",
                        color: "#8D8D8D",
                        height: "2.5em",
                        width: "100%",
                    }}>
                </input>
                <div style={{
                    borderLeft: "1px solid #ccc",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    paddingLeft: "10px",
                    paddingRight: "10px",
                    fontSize: "22px",
                }}>
                    <MenuFoldOutlined />
                </div>
            </div>

        </div >
    )
}
export default SortCategories;