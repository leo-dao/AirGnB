import React from 'react';
import { PageHeader, Button, } from 'antd';

const Header = () => {

    return (
        <PageHeader
            style={{
                border: '1px solid rgb(235, 237, 240)',
            }}
            className="site-page-header"
            //onBack={() => null}
            title="AirGnB"
            subTitle="Like AirBnB but not really"

            extra={
                [
                    <Button key="2" href='/login'>Login</Button>,
                    <Button key="1" href='/signup'>Sign Up</Button>,

                    <Button type="primary" href='/home'>Home</Button>
                ]
            }
        ></PageHeader>
    )
}

export default Header;