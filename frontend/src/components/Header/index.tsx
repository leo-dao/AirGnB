import React from 'react';
import { PageHeader, Button, } from 'antd';

interface Props {

}

const Header: React.FunctionComponent<Props> = (props) => {

    const logIn = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
        console.log(e);
    };

    return (
        <PageHeader
            style={{
                border: '1px solid rgb(235, 237, 240)',
            }}
            className="site-page-header"
            onBack={() => null}
            title="AirGnB"
            subTitle="Like AirBnB but not really"

            extra={
                [
                    <Button key="3">Operation</Button>,
                    <Button key="2">Operation</Button>,
                    <Button onClick={logIn} key="1" type="primary">
                        Log In
                    </Button>
                ]
            }
        ></PageHeader>
    )
}

export default Header;