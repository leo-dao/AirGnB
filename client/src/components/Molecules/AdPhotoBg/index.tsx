import React from "react";
import Arrow from "../../Atoms/Arrow";
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    position: relative;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 700px;
    height: 500px;

    @media (max-width: 850px) {
        width: 100vw;
        height: 70vh;
    }
`;

const LeftArrow = styled.div`
    position: absolute;
    left: 15px;
`;

const RightArrow = styled.div`
    position: absolute;
    right: 15px;
`;

interface Props {
    left: () => void;
    right: () => void;
    image: React.ReactNode;
}

const AdPhotoBg = (props: Props) => {

    return (
        <Container>
            <LeftArrow>
                <Arrow direction={props.left} />
            </LeftArrow>
            {props.image}
            <RightArrow>
                <Arrow direction={props.right} />
            </RightArrow>
        </Container>
    )
}

export default AdPhotoBg;