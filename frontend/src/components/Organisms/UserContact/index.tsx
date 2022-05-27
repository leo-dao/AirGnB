import React from "react";
import Button from "../../Atoms/Button";
import ChatButton from "../../Atoms/ChatButton";

const UserContact = () => {

    const contactUser = () => {
        console.log("Contact user");
    }

    return (
        <div style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-evenly",
        }}>
            <Button
                text="Rent"
                goTo="/rent"
            />
            <ChatButton
                text="Message user"
                onClick={contactUser} />
        </div>
    )
}

export default UserContact;