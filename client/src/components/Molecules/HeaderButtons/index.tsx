import React from "react";
import Button from "../../Atoms/Button";
import UserButton from "../../Atoms/UserButton";
import useFindLoggedUser from "../../../hooks/useFindLoggedUser";
import TopLink from "../../../utils/TopLink";
import styled from "styled-components";
import Dropdown from "../../Atoms/Dropdown";
import LoginButtons from "../../Organisms/LoginButtons";

const StyledHeaderButtons = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 15px;
    & > * {
        font-size: 13px;
    }
`;

const HeaderLink = styled(TopLink)`
    background: none;
    border: none;
    color: white;
    font-weight: bold;
    cursor: pointer;
    transition: 0.3s;
    user-select: none;
    width: 100%;
    white-space: nowrap;
    &:hover {
        transform: scale(1.03);
    }
`;

const LearnTitle = styled.div`
    font-weight: bold;
    color: white;
    `;

const DropdownLink = styled(TopLink)`
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 14px;
    width: 100%;
    padding: 10px 5px;
    border-bottom: 0.5px solid #ccc;
    transition: 0.1s ease-in-out;
    width: 100%;
    color: black;
    :hover {
        background: #eeeeee;
        cursor: pointer;
        color: black
    }
`;

const NonToggled = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    gap: 15px;
    margin-right: 30px;
    @media (max-width: 850px) {
        display: none;
    }
`;

const HeaderButtons = () => {

    return (
        <StyledHeaderButtons>
            <NonToggled>
                <HeaderLink to={'post-ad'}>
                    Post an Ad
                </HeaderLink>
                <HeaderLink to="/listings">
                    Listings
                </HeaderLink>

                <Dropdown
                    title={<LearnTitle className="dropdown">Learn more</LearnTitle>}
                    menu={
                        <div>
                            <DropdownLink to="/about">About us</DropdownLink>
                            <DropdownLink to="/faq">FAQ</DropdownLink>
                            <DropdownLink to="/renter-info">How renting works</DropdownLink>
                            <DropdownLink to="/leaser-info">How leasing works</DropdownLink>
                        </div>
                    }
                />
            </NonToggled>
            <LoginButtons />
        </StyledHeaderButtons >
    )
}

export default HeaderButtons;