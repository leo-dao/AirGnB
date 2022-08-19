import React from "react";
import Button from "../Button";
import useFindUser from "../../../hooks/useFindUser";
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

    let user: any = useFindUser();
    var account = user ? `/account` : "/sign-in";

    return (
        <Button
            component={<StyledUser />}
            onClick={() => window.location.href = account}
            header={props.header}
        />
    )
}

export default UserButton;