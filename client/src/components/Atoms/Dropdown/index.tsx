import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { DownOutlined } from '@ant-design/icons';

interface DropdownProps {
    title: React.ReactNode;
    items: any;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Title = styled.div`
    flex-direction: row;

    &:hover {
        cursor: pointer;
        .anticon-down {
            transform: rotate(180deg);
        }
    }
`;

const Menu = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    background: #fff;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 10px;
    z-index: 100;
    top: 100%;
    left: 0;
    right: 0;
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.2);
`;


const Dropdown = (props: DropdownProps) => {

    const [isOpen, setIsOpen] = React.useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const [selection, setSelection] = useState([]);


    return (
        <Container onClick={toggle}>
            <Title>
                {props.title}
                <DownOutlined />
            </Title>
            {isOpen &&
                <div className="dd-list">
                    {props.items.map((item: any) => (
                        <div className="dd-list-item" key={item.id} onClick={() => setSelection(item)}>
                            <span>{item.value}</span>
                        </div>
                    ))}
                </div>

            }
        </Container>
    )
};
export default Dropdown;