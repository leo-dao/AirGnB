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

    const [title, setTitle] = React.useState<string>("");
    const [category, setCategory] = React.useState<string>("");
    const [description, setDescription] = React.useState<string>("");
    const [price, setPrice] = React.useState<number>(0);
    const [images, setImages] = React.useState<File[]>();

    const displayImage = [
        {
            imgId: "none",
            img: images ? images[0].name :
                "https://media.tarkett-image.com/large/TH_24567080_24594080_24596080_24601080_24563080_24565080_24588080_001.jpg",
        }];

    const titleSubmit = (e: any) => {
        setTitle(e.target.value);
    }

    const categorySubmit = (e: any) => {
        setCategory(e.key);
    }

    const descriptionSubmit = (e: any) => {
        setDescription(e.target.value);
    }

    const priceSubmit = (e: any) => {
        setPrice(e.target.value);
    }

    const imagesSubmit = (e: any) => {
        setImages(e.target.files);
    }

    const createAd = (e: any) => {
        e.preventDefault();
        console.log(title, category, description, price, images);
        // go home
    }

    var fileNames: String[] = images ? Array.from(images).map(file => file.name) : [];

    return (
        <Container>
            <AdPostForm
                setTitle={titleSubmit}
                titleDisabled={title.length < 3}
                setDescription={descriptionSubmit}
                descriptionDisabled={description.length < 10}
                setPrice={priceSubmit}
                priceDisabled={price < 5}
                setCategory={categorySubmit}
                setImages={imagesSubmit}
                fileNames={fileNames}
                imagesDisabled={images === undefined}
                category={category}
                createAd={createAd}
            />
            <CardStyled>
                <AdCard
                    disabled={true}
                    title={title}
                    description={description}
                    price={price}
                    adId={'0'}
                    user={userData[0]}
                    adImages={displayImage}
                />
            </CardStyled>
        </Container>
    )
}

export default PostAd;