import React from "react";
import styled from "styled-components";
import TopLink from "../../../utils/TopLink";
import { InstagramOutlined, FacebookOutlined, TwitterOutlined } from '@ant-design/icons';


const StyledFooter = styled.div`
    background-color: #212121;
    text-align: center;
    left: 0;
    bottom: 0;
    height: 100%;
    width: 100%;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    z-index: 1;
`;

const Content = styled.div`
    //margin: 5% 0% 2% 10%; Placing it bottom left
    
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
`;

const Bottom = styled.div`
    display: flex;
    flex-direction: row;
    width: 40%;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 800px) {
        flex-direction: column;
        gap: 5px;
    }
`;

const SocialMedia = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 40%;
    @media (max-width: 800px) {
        flex-direction: column;
        gap: 5px;
    }
    * {
    color: #9a9a9a;
    font-size: 1.2em;
    }
`;

const Link = styled(TopLink)`
    color: #9a9a9a;
    text-decoration: none;
    &:hover {
        color: white;
    }
`;

const StyledP = styled.p`
    color: #9a9a9a;
    margin: 0;
    font-size: 1.2em;
`;

const SocialIcon = styled.div`
    // make a square container for the icons
    width: 25px;
    height: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
        cursor: pointer;
        * {
            color: white;
        }
    }
    `;

const Footer = () => {
    return (
        <StyledFooter>
            <Content>
                <img /> {/* logo */}
                <StyledP>AirGnB @2022</StyledP>
                <Bottom>
                    <Link to="/about">About</Link>
                    <Link to="/privacy">Privacy</Link>
                    <Link to="/terms">Terms</Link>
                    <Link to="/contact">Contact</Link>
                    <Link to="/sitemap">Sitemap</Link>
                    <Link to="/faq">FAQ</Link>
                </Bottom>
                <SocialMedia>
                    <SocialIcon>
                        <InstagramOutlined />
                    </SocialIcon>
                    <SocialIcon>
                        <FacebookOutlined />
                    </SocialIcon>
                    <SocialIcon>
                        <TwitterOutlined />
                    </SocialIcon>
                </SocialMedia>
            </Content>
        </StyledFooter>
    )
};

export default Footer;