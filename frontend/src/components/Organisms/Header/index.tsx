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
        <PageHeader
            style={{
                backgroundColor: 'white',
                boxShadow: '0px 0px 15px #ccc',
                height: '65px',
                padding: '10px',
                marginBottom: "50px",
                position: "sticky",
                top: "0",
                zIndex: "1",
            }}

            title={
                <div style={{
                    marginLeft: '200px',
                    fontSize: "35px",
                    fontWeight: "bold",
                }}>
                    <Link to="/"> AirGnB </Link>
                </div>
            }

            subTitle={< div
                style={{
                    marginLeft: '10px',
                    fontSize: "15px",
                }} >
                Music rental made easy
            </div>}

            extra={
                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>

                    <Button text="Post ad" goTo='/postAd' width={150} height={45} />

                    <div style={{ marginLeft: '150px' }} />

                    <ChatButton
                        onClick={openChat}
                        width={100}
                        height={40}
                    />

                    <div style={{ marginRight: "30px" }} />

                    <UserButton
                        width={100}
                        height={40}
                        goTo={account}
                    />

                    <div style={{ marginRight: "150px" }} />
                </div>
            }
        />
    )
}
export default Header;