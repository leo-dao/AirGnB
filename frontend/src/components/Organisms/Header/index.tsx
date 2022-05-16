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
                padding: '10px',
                marginBottom: "50px",
                position: "sticky",
                top: "0",
                zIndex: "1",
            }}

            title={
                <div style={{
                    marginLeft: '200px',
                    display: 'flex',
                    fontSize: "35px",
                    fontWeight: "bold",
                }}>
                    <Link to="/"> AirGnB </Link>
                </ div>
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
                    position: "absolute",
                    right: "200px",
                    top: "15px",
                }}>
                    <Button type="primary" href='/signin' style={{
                        fontSize: "15px",
                        marginRight: "10px"
                    }}>
                        Sign in
                    </Button>
                    <Button type="primary" href='/register' style={{
                        fontSize: "15px",
                    }}>
                        Register
                    </Button>
                </div>
            }
        />
    )
}
export default Header;