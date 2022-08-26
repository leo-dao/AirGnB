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

const FilterMenu = styled.div`
    display: flex;
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


const SearchFilters = () => {

    const [showMenu, setShowMenu] = React.useState(false);

    var sitemask = document.getElementById("sitemask");
    const body = document.getElementsByTagName('body')[0];

    const handleSitemask = () => {
        //@ts-ignore
        sitemask.style.display = showMenu ? "none" : "block";
        body.style.height = showMenu ? "100vh" : "auto";
        body.style.overflow = showMenu ? "visible" : "hidden";
    }

    const onClick = () => {
        setShowMenu(!showMenu);
        handleSitemask();
    };

    useEffect(() => {
        // check if user clicks outside
        const handleClick = (e: any) => {
            console.log(e.target)
            if (e.target.id === "sitemask") {
                setShowMenu(false);
                handleSitemask();
            }
        }
        document.addEventListener("click", handleClick);
        return () => {
            document.removeEventListener("click", handleClick);
        }
    }, [showMenu]);

    return (
        <FilterContainer>
            <div onClick={onClick} className="filter">
                <FilterButton>
                    <FilterOutlined style={{ fontSize: '1.3rem' }} />
                    Filters
                </FilterButton>
                {showMenu ? (
                    <FilterMenu className="filter">
                        <StyledTitle>Filters</StyledTitle>
                        <Close black onClick={onClick} />
                        <Filters />
                    </FilterMenu>
                ) : (null)}
            </div>
        </FilterContainer>
    );
};

export default SearchFilters;