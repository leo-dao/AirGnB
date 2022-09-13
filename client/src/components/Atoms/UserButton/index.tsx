import React from "react";
import Button from "../Button";
import useFindLoggedUser from "../../../hooks/useFindLoggedUser";

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

    let user: any = useFindLoggedUser();

    let page;

    if (user !== undefined) {
        const page = `/profile/${user._id}`;
    }

    return (
        <Button
            component={<StyledUser />}
            goTo={page ? page : "/login"}
            header={props.header}
        />
    )
}

export default UserButton;