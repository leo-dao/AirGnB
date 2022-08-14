import React from "react";
import { Menu } from 'antd';
import styled from "styled-components";

interface Props {
    onClick: (e: any) => void;
}

const StyledMenu = styled(Menu)`

    transition: all 0.3s ease-in-out;
    .ant-menu-item {
        &:hover {
            background-color: #f5f5f5;
            color: black;
        }
    }
    `;

const Categories = (props: Props) => {

    return (
        <StyledMenu onClick={props.onClick}
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
        </StyledMenu>
    )
};

export default Categories;