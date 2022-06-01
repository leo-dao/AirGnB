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
    width: 100%;
    opacity: ${(props) => props.disabled ? 0.2 : 1};
    cursor: ${(props) => props.disabled ? "not-allowed" : "auto"};
    transition: opacity 0.8s ease-in-out;
`

const TitleStyled = styled.div`
    font-size: 1.2rem;
    margin-top: 3%;
    margin-bottom: 3%;
`

const ButtonContainer = styled.div.attrs((props: PostAdProps) => (props))`
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
    disabled?: boolean,
    title: string;
    selection: React.ReactNode;
}

const AdPostBox = (props: PostAdProps) => {

    return (
        <Container disabled={props.disabled}>
            <TitleStyled>
                {props.title}
            </TitleStyled>
            <div>
                {props.selection}
            </div>
            <ButtonContainer>

                <Button
                    text="Continue"
                    disabled={props.disabled}
                    onClick={props.continue}
                    secondary
                />
            </ButtonContainer>
        </Container>
    )
}

export default AdPostBox