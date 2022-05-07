import React from 'react';
import { PageHeader, Button, } from 'antd';

const Header = () => {

    return (
        <PageHeader
            style={{
                backgroundColor: 'white',
                boxShadow: '0px 0px 15px #ccc',
                height: '60px',
            }}

            className="site-page-header"

            title={<div
                style={{
                    position: "absolute",
                    left: "250px",
                    top: "20px",
                    fontSize: "30px"
                }}>
                AirGnB </div>}

            subTitle={< div
                style={{
                    position: "absolute",
                    left: "360px",
                    top: "25px",
                    fontSize: "15px"
                }} >
                Music rental made easy </div>}

            extra={
                <div style={{

                }}>
                    <Button key="2" href='/login'>Login</Button>
                    <Button key="1" href='/signup'>Sign Up</Button>
                    <Button type="primary" href='/home'>Home</Button>
                </div>
            }
        ></PageHeader >
    )
}
export default Header;