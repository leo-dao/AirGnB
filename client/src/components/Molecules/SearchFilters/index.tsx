import React from "react";
import styled from "styled-components";
import Dropdown from "../../Atoms/Dropdown";
import categories from "../../../utils/categories";
import Close from "../../Atoms/Close";
import { useEffect } from "react";

const FilterContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 20px;
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
    border-radius: 10px;
    z-index: 3;
    overflow-y: scroll;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
`;

const SearchFilters = () => {

    const [showMenu, setShowMenu] = React.useState(false);

    var sitemask = document.getElementById("sitemask");

    const onClick = () => {
        setShowMenu(!showMenu);
        //@ts-ignore
        sitemask.style.display = showMenu ? "none" : "block";
    };

    useEffect(() => {
        // check if user clicks outside
        const handleClick = (e: any) => {
            if (e.target.id === "sitemask") {
                setShowMenu(false);
                //@ts-ignore
                sitemask.style.display = "none";
            }

            if (e.target.className.includes("filter")) {
                setShowMenu(true);
                //@ts-ignore
                sitemask.style.display = "block";
            }
        }
        document.addEventListener("click", handleClick);
        return () => {
            document.removeEventListener("click", handleClick);
        }
    }, []);

    return (
        <FilterContainer>
            <div onClick={onClick} className="filter">
                Filter
                {showMenu ? (
                    <FilterMenu className="filter">
                        <Close black onClick={onClick} />
                    </FilterMenu>
                ) : (null)}
            </div>
            More stuff
        </FilterContainer>
    );
};

export default SearchFilters;