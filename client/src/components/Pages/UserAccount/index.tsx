import React from "react";
import useFindUser from "../../../hooks/useFindUser";
import styled from "styled-components";
import logout from "../../../assets/logout.png";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  width: 90%;
  display: flex;
  justify-content: center;  
`;

const Logout = styled.div`
    display: flex;
    :hover {
        transform: scale(1.03);
    }
`;

const StyledLogo = styled.img`
    max-width: 30px;
`;

const UserAccount = () => {

    const navigate = useNavigate();

    let user: any = useFindUser();
    //localStorage.setItem('authToken', JSON.stringify(res.data));
    const logOut = () => {
        localStorage.removeItem('authToken');
        navigate('/');
    }

    return (
        <Container>

            <Logout onClick={logOut}>
                <p>Logout</p>
                <StyledLogo src={logout} />
            </Logout>
        </Container>
        // add link to public profile (userProfile)
    )

};

export default UserAccount;