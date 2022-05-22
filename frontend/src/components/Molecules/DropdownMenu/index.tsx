import React from "react";
import { Menu, Dropdown, Space } from 'antd';
import { PropertySafetyFilled } from "@ant-design/icons";

interface DropdownProps {
    menu: React.ReactElement;
    button: React.ReactElement;
}



const DropdownMenu = (props: DropdownProps) => {
    return (
        <Dropdown overlay={props.menu} trigger={['click']}>
            <a onClick={e => e.preventDefault()}>
                {props.button}
            </a>
        </Dropdown>
    )
}

export default DropdownMenu;