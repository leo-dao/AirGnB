import React from "react";
import { Dropdown } from 'antd';
import styled from 'styled-components';

const DropdownStyled = styled(Dropdown)`
    width: auto;
    @media (max-width: 900px) {
        width: 100%;
    }
        
`

interface DropdownProps {
    menu: React.ReactElement;
    button: React.ReactElement;
    disabled?: boolean;
}

const DropdownMenu = (props: DropdownProps) => {
    return (
        <DropdownStyled
            overlay={props.menu}
            trigger={['click']}
            placement="bottomCenter"
            disabled={props.disabled}
        >
            <a onClick={e => e.preventDefault()}>
                {props.button}
            </a>
        </DropdownStyled>
    )
}

export default DropdownMenu;