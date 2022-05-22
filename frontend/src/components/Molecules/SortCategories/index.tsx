import React from "react";
import { MenuFoldOutlined, PropertySafetyFilled } from "@ant-design/icons";
import DropdownMenu from "../DropdownMenu";
import Categories from "./Categories";

interface Props {
    onClick: (value: string) => void;
    category: string;
    color: string;
}

const SortCategories = (props: Props) => {

    const sortButton = (
        <div style={{
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
                color: props.color,
                height: "2.5em",
            }}>
                {props.category === "" ? "Sort by" : props.category}
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
            menu={<Categories onClick={props.onClick} />}
        />
    )
}
export default SortCategories;