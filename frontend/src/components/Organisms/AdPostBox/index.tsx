import React from "react";
import Button from "../../Atoms/Button";
import styled from "styled-components";

const Container = styled.div.attrs((props: PostAdProps) => (props))`
    display: flex;
    flex-direction: column;
    background-color: white;
    border-radius: 5px;
    box-shadow: 0px 0px 3px 0px rgba(0,0,0,0.1);
    align-items: center;
    width: 60%;
    opacity: ${(props) => props.opacity};
    cursor: ${(props) => props.disabled ? "not-allowed" : "auto"};
    transition: opacity 0.8s ease-in-out;
`

const TitleStyled = styled.div`
    font-size: 1.2rem;
    margin-top: 3%;
    margin-bottom: 3%;
`

const ButtonContainer = styled.div`
    display: flex; 
    flex-direction: row;
    justify-content: space-around;
    width: 100%;
    margin-top: 3%;
    margin-bottom: 2%;
`

interface PostAdProps {
    continue?: () => void;
    next?: string;
    prev?: string;
    back?: () => void;
    disabled?: boolean;
    opacity?: number;
    title: string;
    selection: React.ReactNode;
}

const AdPostBox = (props: PostAdProps) => {

    return (
        <Container opacity={props.opacity} disabled={props.disabled}>
            <TitleStyled>
                {props.title}
            </TitleStyled>
            <div>
                {props.selection}
            </div>
            <ButtonContainer>
                <Button
                    text="Back"
                    disabled={props.disabled}
                    backgroundColor="white"
                    onClick={props.back}
                />
                <Button
                    text="Continue"
                    disabled={props.disabled}
                    onClick={props.continue}
                />
            </ButtonContainer>
        </Container>
    )
}

export default AdPostBox