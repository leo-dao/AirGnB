import React from "react";
import styled from "styled-components";
import Dropdown from "../../Atoms/Dropdown";
import categories from "../../../utils/categories";
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
`;

const SearchFilters = () => {

    const [showMenu, setShowMenu] = React.useState(false);

    const onClick = () => {
        setShowMenu(!showMenu);
        //@ts-ignore
        document.getElementById('sitemask').style.display = 'block';
    };

    useEffect(() => {

        // if clicked outside
        function onWindowClick(e: any) {
            if (e.target.className.includes('filter')) {
                setShowMenu(true);
                return;
            }
            else {
                setShowMenu(false);
            }
        }
        window.addEventListener('click', onWindowClick);
        return () => {
            window.removeEventListener('click', onWindowClick);
        };
    }, []);

    return (
        <FilterContainer>
            <div className="filter" onClick={onClick}>
                Filter
                {showMenu ? (
                    <FilterMenu className="filter">
                        <h1>Filter</h1>
                    </FilterMenu>
                ) : (null)}
            </div>

        </FilterContainer>
    );
};

export default SearchFilters;