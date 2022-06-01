import React from "react";
import { MenuFoldOutlined } from "@ant-design/icons";
import DropdownMenu from "../DropdownMenu";
import Categories from "./Categories";
import FilterInput from "../../Atoms/FilterInput";
import styled from "styled-components";

export const StyledSortButton = styled.div`
    background-color: transparent;
`;

export const StyledCategory = styled.div.attrs((props: SortCategoriesProps) => props)`
    justify-content: center;
    color: ${props => props.category === "" ? "grey" : "black"};
`;

export const MenuFoldOutlinedStyled = styled.div`
    font-size: 20px;
    color: black;
`;

interface SortCategoriesProps {
    onClick: (value: string) => void;
    disabled?: boolean;
    category: string;
}

const SortCategories = (props: SortCategoriesProps) => {

    const sortButton = (
        <FilterInput
            disabled={props.disabled}
            width="210px"
            content={
                <StyledCategory category={props.category}>
                    {props.category === "" ? "Select category" : props.category}
                </StyledCategory>
            }
            logo={
                <MenuFoldOutlinedStyled >
                    <MenuFoldOutlined />
                </MenuFoldOutlinedStyled>
            }
        />
    );

    return (
        <StyledSortButton >
            <DropdownMenu
                disabled={props.disabled}
                button={sortButton}
                menu={<Categories onClick={props.onClick} />}
            />
        </StyledSortButton>
    )
}
export default SortCategories;