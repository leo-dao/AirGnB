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
                width={40}
                height={100}
                fontSize={20}
            />
            <ChatButton
                text="Message user"
                width={40}
                height={40}
                fontSize={30}
                onClick={contactUser} />
        </div>
    )
}

export default UserContact;