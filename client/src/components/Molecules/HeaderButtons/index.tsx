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
                items={[
                    { value: "About us", goTo: "/about-us" },
                    { value: "How renting works", goTo: "/renter-info" },
                    { value: "How leasing works", goTo: "/leaser-info" },
                    { value: "FAQ", goTo: "/faq" },
                    { value: "Insurance", goTo: "/insurance" },
                ]}
            />
            {userButton}
        </StyledHeaderButtons >
    )
}

export default HeaderButtons;