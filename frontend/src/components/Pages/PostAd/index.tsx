import React from "react";
import { Input } from 'antd';
import AdCard from "../../Organisms/AdCard";
import { userData } from "../../../fakeData";
import { ImageProps } from "../../Organisms/AdCard/interfaces";
import AdPostForm from "../../Organisms/AdPostForm";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    margin-left: 200px;
    gap: 80px;
`
const CardStyled = styled.div`
    position: sticky;
    top: 0;
    margin-top: 200px;
    height: 100%;
`



const PostAd = () => {

    const [opacity, setOpacity] = React.useState<number>(0.2);

    const [disabled, setDisabled] = React.useState<boolean>(false);

    const Continue = () => {
        setDisabled(false);
        setOpacity(1);
    }

    const Back = () => {
        setDisabled(true);
        setOpacity(0.2);
    }

    const [title, setTitle] = React.useState<string>("");
    const [category, setCategory] = React.useState<string>("");
    const [description, setDescription] = React.useState<string>("");
    const [price, setPrice] = React.useState<number>(0);
    const [images, setImages] = React.useState<ImageProps[]>([
        {
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Grey_background.jpg/1200px-Grey_background.jpg",
            imgId: "1"
        }
    ]);

    const titleSubmit = (e: any) => {
        setTitle(e.target.value);
        Continue();
    }

    const categorySubmit = (e: any) => {
        setCategory(e.key);
        Continue();
    }

    const descriptionSubmit = (e: any) => {
        setDescription(e.target.value);
        Continue();
    }

    const priceSubmit = (e: any) => {
        setPrice(e.target.value);
        Continue();
    }

    const createAd = (e: any) => {
        e.preventDefault();
        console.log(title, category, description, price, images);
    }

    return (
        <Container>
            <AdPostForm
                setTitle={titleSubmit}
                setDescription={descriptionSubmit}
                setPrice={priceSubmit}
                setCategory={categorySubmit}
                category={category}
                createAd={createAd}
            />
            <CardStyled>
                <AdCard
                    title={title}
                    description={description}
                    price={price}
                    adId={'0'}
                    user={userData[0]}
                    adImages={images}
                />
            </CardStyled>
        </Container>
    )
}

export default PostAd;