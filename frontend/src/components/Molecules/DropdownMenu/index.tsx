import React from "react";
import { Dropdown } from 'antd';

interface DropdownProps {
    menu: React.ReactElement;
    button: React.ReactElement;
}

const DropdownMenu = (props: DropdownProps) => {
    return (
        <Dropdown
            overlay={props.menu}
            trigger={['click']}
            placement="bottomCenter"
        >
            <a onClick={e => e.preventDefault()}>
                {props.button}
            </a>
        </Dropdown>
    )
}

export default DropdownMenu;