import React from "react";
import Button from "../../Atoms/Button";
import UserButton from "../../Atoms/UserButton";
import ChatButton from "../../Atoms/ChatButton";
import styled from "styled-components";

const StyledHeaderButtons = styled.div`
    display: flex;
    flex-direction: row;
`;

const Space = styled.div`
    margin-left: 2rem;
`;

const HeaderButtons = () => {

    var connected = false;

    // fetch userId 
    let userId;
    var account = connected ? `/user/${userId}` : "/sign-in";

    var post = connected ? "/post-ad" : "/sign-in";

    const openChat = () => {
        console.log("Open chat");
    }

    return (
        <StyledHeaderButtons>
            <Button
                text="Post ad"
                goTo={post}
            />
            <Space />
            <ChatButton
                onClick={openChat}
            />
            <Space />
            <UserButton
                goTo={account}
            />
        </StyledHeaderButtons>
    )
}

export default HeaderButtons;