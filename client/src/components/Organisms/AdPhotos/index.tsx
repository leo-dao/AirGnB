import React, { useState } from "react";
import type { AdCardProps } from "../AdCard/index";
import AdPhotoBg from "../../Molecules/AdPhotoBg";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: row;
    gap: 2%;
    & > * {
        user-select: none;
    }
`;

const MainPhotoStyled = styled.img`
    object-fit: contain;
    border-radius: 10px;
    max-width: 800px;
    max-height: 500px;

    @media (max-width: 1300px) {
        max-width: 600px;
        max-height: 400px;
    }

    @media (max-width: 850px) {
        max-width: 100vw;
        max-height: 70vh;
    }
`;

const SubImagesStyled = styled.div`
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: space-evenly;
    @media (max-width: 850px) {
        display: none;
    }
`;

const SubImageStyled = styled.img`
    width: 60px;
    height: 60px;
    object-fit: cover;
    border-radius: 10px;
    cursor: pointer;
    opacity: 0.7;
    transition: 0.2s;
    &:hover {
        opacity: 1;
    }

    ${(props: { selected: boolean }) => props.selected && `
        opacity: 1;
        box-shadow: 0 0 5px #17324c;
    `}
`;

const AdPhotos = (props: AdCardProps) => {

    // first image is the default
    const [image, setImage] = useState(props.images[0].img);
    let index = props.images.findIndex(img => img.img === image);

    const goLeft = () => {
        index--;
        index = index < 0 ? props.images.length - 1 : index;
        setImage(props.images[index].img);
    }

    const goRight = () => {
        index++;
        index = index > props.images.length - 1 ? 0 : index;
        setImage(props.images[index].img);
    }

    return (
        <Container>
            <SubImagesStyled>
                {props.images.map(image => {
                    return <SubImageStyled
                        src={image.img}
                        selected={image.img === props.images[index].img}
                        onClick={() => { setImage(image.img); }} />
                })}
            </SubImagesStyled>
            <AdPhotoBg left={goLeft} right={goRight}
                image={<MainPhotoStyled src={image} />} />
        </Container>
    )
}
export default AdPhotos;