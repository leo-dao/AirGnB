import React from 'react';
import { PageHeader, } from 'antd';
import { Link } from 'react-router-dom';
import ChatButton from '../../Atoms/ChatButton';
import UserButton from '../../Atoms/UserButton';
import Button from '../../Atoms/Button';

const Header = () => {

    var connected = false;

    // fetch userId 
    let userId;
    var account = connected ? `/user/${userId}` : "/loginPage";


    const openChat = () => {
        console.log("Open chat");
    }

    return (
        <div style={{
            backgroundColor: '#fff',
            marginBottom: '5%',
            height: '20%',
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            position: "sticky",
            top: "0",
            zIndex: "1",
            boxShadow: "0px 0px 9px 5px rgba(0,0,0,0.2)",
        }}>

            <div style={{
                fontSize: "45px",
                fontWeight: "bold",
                marginLeft: "15%",

            }}>
                <Link to="/"> AirGnB </Link>
            </div>

            <div
                style={{
                    fontSize: "17px",
                    marginLeft: "2%",
                    fontStyle: "italic",
                }} >
                Music rental made easy
            </div>

            <div style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                width: '30%',
                justifyContent: 'space-evenly',
                marginLeft: '20%',
            }}>

                <Button
                    text="Post ad"
                    goTo='/postAd'
                    width={100}
                    height={35}
                    fontSize={20}
                />
                <div style={{ width: '100px' }} />
                <ChatButton
                    onClick={openChat}
                    width={100}
                    height={35}
                    fontSize={30}
                />
                <div style={{ width: '100px' }} />
                <UserButton
                    goTo={account}
                    width={100}
                    height={35}
                />
            </div >
        </div >
    )
}
export default Header;