import React from 'react';
import { PageHeader, Button, } from 'antd';
import { Link } from 'react-router-dom';

const Header = () => {

    return (
        <PageHeader
            style={{
                backgroundColor: 'white',
                boxShadow: '0px 0px 15px #ccc',
                height: '60px',
                marginBottom: '30px',
            }}

            title={
                <div
                    style={{
                        position: "absolute",
                        left: "250px",
                        top: "15px",
                        fontSize: "30px",
                    }}
                >
                    <Link to="/home"> AirGnB </Link> </ div>}


            subTitle={< div
                style={{
                    position: "absolute",
                    left: "360px",
                    top: "20px",
                    fontSize: "15px"
                }} >
                Music rental made easy </div>}

            extra={
                <div style={{
                    position: "absolute",
                    right: "200px",
                    top: "15px"
                }}>
                    <Button type="text" href='/signin'>Sign in</Button>
                    <Button type="text" href='/register'>Register</Button>
                </div>
            }
        />
    )
}
export default Header;