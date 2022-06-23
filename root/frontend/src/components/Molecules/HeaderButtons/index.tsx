import React from "react";
import Button from "../../Atoms/Button";
import UserButton from "../../Atoms/UserButton";
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
                onClick={() => window.location.href = post}
            />
            <Space />
            <Space />
            <UserButton
                onClick={() => window.location.href = account}
            />
        </StyledHeaderButtons>
    )
}

export default HeaderButtons;