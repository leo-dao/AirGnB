import React from "react";
import { Menu } from 'antd';

interface Props {
    onClick: (e: any) => void;
}

const Categories = (props: Props) => {

    return (
        <Menu onClick={props.onClick}
            style={{
                border: "none",
                boxShadow: "0px 0px 10px #8D8D8D",
                borderRadius: "10px",
                width: "100%",
                fontSize: "18px",
                backgroundColor: "#FAFAFA",
            }}>
            <Menu.Item key="Guitars">
                Guitars
            </Menu.Item>
            <Menu.Item key="Basses">
                Basses
            </Menu.Item>
            <Menu.Item key="Drums">
                Drums
            </Menu.Item>
            <Menu.Item key="Keyboards">
                Keyboards
            </Menu.Item>
            <Menu.Item key="Amplifiers">
                Amplifiers
            </Menu.Item>
            <Menu.Item key="Effects">
                Effects
            </Menu.Item>
            <Menu.Item key="Microphones">
                Microphones
            </Menu.Item>
            <Menu.Item key="Wind Instruments">
                Wind Instruments
            </Menu.Item>
            <Menu.Item key="Brass">
                Brass
            </Menu.Item>
            <Menu.Item key="Speakers">
                Speakers
            </Menu.Item>
            <Menu.Item key="Others">
                Others
            </Menu.Item>

        </Menu>
    )
};

export default Categories;