import React from "react";
import { Menu } from 'antd';

interface Props {

}

const Buttons = (props: Props) => {

    return (
        <Menu
            style={{
                border: "none",
                boxShadow: "0px 0px 10px #8D8D8D",
                borderRadius: "10px",
                width: "100%",
                fontSize: "18px",
                backgroundColor: "#FAFAFA",
            }}>
            <Menu.Item key="PostAd">

            </Menu.Item>
            <Menu.Item key="User">

            </Menu.Item>

        </Menu>
    )
};

export default Buttons;