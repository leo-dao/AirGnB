import React from "react";
import Arrow from "../../Atoms/Arrow";
import { Container, PhotoContainer } from "./Styled";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";

interface Props {
    left: () => void;
    right: () => void;
    image: React.ReactNode;
}

const AdPhotoBg = (props: Props) => {

    return (
        <Container>
            <Arrow
                direction={props.left}
                image={<ArrowLeftOutlined />}
            />
            <PhotoContainer>
                {props.image}
            </PhotoContainer>
            <Arrow
                direction={props.right}
                image={<ArrowRightOutlined />}
            />
        </Container>
    )
}

export default AdPhotoBg