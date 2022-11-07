import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../../authContext";
import Button from "../Button";
import { UserOutlined } from "@ant-design/icons";
import styled from "styled-components";

interface Props {
    header?: boolean,
}

const StyledUser = styled(UserOutlined)`
    font-size: 1.7rem;
    border-radius: 50%;
    padding: 5px;
    border: 1px solid #ccc;
`;

const UserButton = (props: Props) => {

    const context = useContext(AuthContext);


    // TODO: Add a dropdown menu that allows the user to logout, view their profile, and edit their account


    let profileLink;

    if (context.user) {
        // @ts-ignore
        profileLink = `/profile/${context.user.sub}`
    }

    return (
        <Button
            component={<StyledUser />}
            goTo={profileLink}
            header={props.header}
        />
    )
}

export default UserButton;