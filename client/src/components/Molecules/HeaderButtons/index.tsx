import React from "react";
import Button from "../../Atoms/Button";
import UserButton from "../../Atoms/UserButton";
import useFindUser from "../../../hooks/useFindUser";
import TopLink from "../../../utils/TopLink";
import styled from "styled-components";
import Dropdown from "../../Atoms/Dropdown";


const StyledHeaderButtons = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 15px;

    & > * {
        font-size: 14px;
    }

    @media (max-width: 850px) {
        flex-direction: column;
        display: none;
    }
`;

const LearnTitle = styled.div`
    font-weight: bold;
    color: white;
    `;

const RegisterButton = styled.button`
    background: none;
    border: 1px solid white;
    padding: 5px 20px;
    color: white;
    font-weight: bold;
    cursor: pointer;
    transition: 0.3s;
    user-select: none;
    &:hover {
        transform: scale(1.03);
    }
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


const HeaderButtons = () => {

    let user: any = useFindUser();
    var post = user ? "/post-ad" : "/sign-in";

    const userButton = user ? (
        <UserButton header />
    ) : (
        <div>
            <Button goTo="/sign-in" text='Sign in' header />
            <TopLink to='/register'> <RegisterButton>Register</RegisterButton></TopLink>
        </div>
    );

    return (
        <StyledHeaderButtons>
            <Button
                text="Post an ad"
                goTo={post}
                header
            />
            <Button
                text="Browse"
                goTo="/listings"
                header
            />
            <Dropdown
                title={<LearnTitle className="dropdown">Learn more</LearnTitle>}
                menu={
                    <div>
                        <DropdownLink to="/about">About us</DropdownLink>
                        <DropdownLink to="/faq">FAQ</DropdownLink>
                        <DropdownLink to="/renter-info">How renting works</DropdownLink>
                        <DropdownLink to="/leaser-info">How leaser works</DropdownLink>
                    </div>
                }
            />
            {userButton}
        </StyledHeaderButtons >
    )
}

export default HeaderButtons;