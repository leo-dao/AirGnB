import React from "react";
import Button from "../../Atoms/Button";
import ChatButton from "../../Atoms/ChatButton";
import styled from "styled-components";
import { Row } from "antd";

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    margin-top: 3%;
    `;


const UserContact = () => {

    const contactUser = () => {
        console.log("Contact user");
    }

    return (
        <Container>
            <Button
                text="Rent"
                goTo="/rent"
            />
            <ChatButton
                text="Message user"
                onClick={contactUser} />
        </Container>
    )
}

export default UserContact;