import React, { useContext } from "react";
import { AuthContext } from "../../../authContext";
import styled from "styled-components";
import logout from "../../../assets/icons/logout.png";
import Button from "../../Atoms/Button";
import Error from "../../Molecules/Error";
import TopLink from "../../../utils/TopLink";

const Container = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center; 
  background-color: white; 
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

    const context = useContext(AuthContext);

    if (!context.user) {
        return (
            <Error
                msg='You must be logged in to view this page'
            />
        )
    }

    const userID: string = Object.values(context.user)[0] as string;


    // TODO: Have mutliple components that to edit different parts of the user's account
    // 1. Update email and password, delete account
    // 2. Update name, location, bio, avatar and banner image
    // 3. Update payment info
    // 4. Update notification settings

    return (
        <Container>

            <TopLink
                to={`/profile/${userID}`}
            />


            <Logout onClick={() => {
                context.logout();
                window.location.href = "/";
            }}>
                <p>Logout</p>
                <StyledLogo src={logout} />
            </Logout>
        </Container>
        // add link to public profile (userProfile)
    )

};

export default UserAccount;