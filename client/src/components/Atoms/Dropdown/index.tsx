import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { DownOutlined } from '@ant-design/icons';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    cursor: pointer;
`;

const Title = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 5px;
    width: 100%;
    &:hover {
        cursor: pointer;
    }
`;

const Menu = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    margin-top: 10px;
    top: 100%;
    left: 20;
    width: 150%;
    background: white;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-shadow: 0 2px 5px rgba(0,0,0, 0.5);
`;

interface DropdownProps {
    title: React.ReactNode;
    menu: React.ReactNode;
};

const Dropdown = (props: DropdownProps) => {

    const [isOpen, setIsOpen] = React.useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    // Closing the dropdown if the user clicks outside of it
    useEffect(() => {
        function onWindowClick(e: any) {
            if (e.target.className.includes('dropdown')) {
                return;
            }
            else {
                setIsOpen(false);
            }
        }
        window.addEventListener('click', onWindowClick);
        return () => {
            window.removeEventListener('click', onWindowClick);
        };
    }, []);


    return (
        <Container onClick={toggle} className="dropdown">
            <Title className="dropdown">
                {props.title}
                <DownOutlined style={{ color: 'white' }} />
            </Title>
            {isOpen && <Menu>{props.menu}</Menu>}
        </Container>
    )
};
export default Dropdown;