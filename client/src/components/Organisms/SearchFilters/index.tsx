import React from "react";
import styled from "styled-components";
import Filters from "../Filters";
import Close from "../../Atoms/Close";
import { FilterOutlined } from "@ant-design/icons";
import { useEffect } from "react";
import Filter from '../../../assets/icons/filter.webp';

const FilterContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 20px;
`;

const FilterButton = styled.button`
    background: white;
    border-radius: 10px;
    border: none;
    padding: 10px 15px;
    cursor: pointer;
    border: 1px solid #edededeb;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    display: flex;
    align-items: center;
    gap: 5px;

    // place left of search box
    position: relative;
    left: 80px;

    @media (max-width: 900px) {
        position: fixed;
        bottom: 5vh;
        left: 50%;
        transform: translateX(-50%);
        background-color: #0A6EDD;
        color: white;
        border: none;
    }
`;

const StyledIcon = styled.img`
    width: 20px;

    @media (max-width: 900px) {
        filter: invert(100%);
    }
`;


const FilterMenu = styled.div.attrs((props: any) => props)`
    display: ${props => props.display ? 'flex' : 'none'};
    flex-direction: column;
    align-items: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    max-width: 780px;
    height: 80vh;
    max-height: 700px;
    border-radius: 12px;
    font-size: 1rem;
    background-color: white;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    z-index: 100;
    overflow: scroll;
    ::-webkit-scrollbar {
        width: 0px;
    }
`;


const SearchFilters = () => {

    const [showMenu, setShowMenu] = React.useState(false);

    var sitemask = document.getElementById("sitemask");
    const body = document.getElementsByTagName('body')[0];

    const open = () => {
        setShowMenu(true);
        //@ts-ignore
        sitemask.style.display = "block";
        body.style.height = "100vh";
        body.style.overflow = "hidden";
    }

    const close = () => {
        setShowMenu(false);
        //@ts-ignore
        sitemask.style.display = "none";
        body.style.height = "auto";
        body.style.overflow = "visible";
    };

    useEffect(() => {
        // check if user clicks outside
        const handleClick = (e: any) => {

            if (showMenu) {
                if (e.target.id === "sitemask" || e.target.id === 'close') {
                    close();
                }
                else {
                    return
                }
            }
        }
        document.addEventListener("click", handleClick);
        return () => {
            document.removeEventListener("click", handleClick);
        }
    }, [showMenu]);

    return (
        <FilterContainer>
            <div onClick={open} className="filter">
                <FilterButton>
                    <StyledIcon src={Filter} />
                    Filters
                </FilterButton>
                <FilterMenu className="filter" display={showMenu}>
                    <Filters />
                </FilterMenu>
            </div>
        </FilterContainer>
    );
};

export default SearchFilters;