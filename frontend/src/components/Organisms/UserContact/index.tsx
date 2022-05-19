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
            justifyContent: "center",
        }}>
            <Button text="Rent" goTo="/rent" width={150} height={50} />
            <div style={{
                marginLeft: '30px',
                width: '150px',
                height: '50px',
            }}>
                <ChatButton text="Message user" onClick={contactUser} />
            </div>
        </div>
    )
}

export default UserContact;