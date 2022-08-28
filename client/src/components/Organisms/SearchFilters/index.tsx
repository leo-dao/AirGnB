import React from "react";
import styled from "styled-components";
import Filters from "../Filters";
import Close from "../../Atoms/Close";
import { FilterOutlined } from "@ant-design/icons";
import { useEffect } from "react";

const FilterContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 20px;
`;

const FilterButton = styled.button`
    background: none;
    border: 1px solid white;
    border-radius: 10px;
    padding: 15px 20px;
    cursor: pointer;
    border: 1px solid #edededeb;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    display: flex;
    align-items: center;
    gap: 5px;
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
    border-radius: 12px;
    font-size: 1rem;
    padding: 5px 15px;
    background-color: white;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    z-index: 5;
`;

const StyledTitle = styled.h2`
    display: flex;
    flex-direction: row;
    justify-content: center;
    font-size: 1.5rem;
    color: black;
    margin-bottom: 1rem;
    width: 80%;
    border-bottom: 1px solid #e0e0e0;
`;

interface FilterProps {
    display: boolean,
};

const SearchFilters = () => {

    const [showMenu, setShowMenu] = React.useState(false);

    var sitemask = document.getElementById("sitemask");
    const body = document.getElementsByTagName('body')[0];

    const open = async () => {
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
                if (e.target.id === "sitemask") {
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
                    <FilterOutlined style={{ fontSize: '1.3rem' }} />
                    Filters
                </FilterButton>
                <FilterMenu className="filter" display={showMenu}>
                    <StyledTitle>Filters</StyledTitle>
                    <Close black onClick={close} />
                    <Filters />
                </FilterMenu>
            </div>
        </FilterContainer>
    );
};

export default SearchFilters;