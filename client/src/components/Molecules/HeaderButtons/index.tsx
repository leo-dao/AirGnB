import React from "react";
import Button from "../../Atoms/Button";
import UserButton from "../../Atoms/UserButton";
import useFindUser from "../../../hooks/useFindUser";
import styled from "styled-components";

const StyledHeaderButtons = styled.div`
    display: flex;
    flex-direction: row;
`;

const Space = styled.div`
    margin-left: 10px;
`;

const HeaderButtons = () => {

    let user: any = useFindUser();

    var account = user ? `/profile/${user._id}` : "/sign-in";

    var post = user ? "/post-ad" : "/sign-in";

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