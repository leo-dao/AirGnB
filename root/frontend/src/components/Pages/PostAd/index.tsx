import React from "react";
import AdCard from "../../Organisms/AdCard";
import { userData } from "../../../fakeData";
import { Ad, AdImage } from "../../../interfaces";
import AdPostForm from "../../Organisms/AdPostForm";
import styled from "styled-components";
import { v4 as uuid } from 'uuid';
import axios from "axios";

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
    const [images, setImages] = React.useState<File[]>([]);

    const displayImage = [{
        imgId: "test",
        img: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
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

        // Creating unique ids for all images
        const adImages: AdImage[] = [];
        for (let i = 0; i < images.length; i++) {
            const adImage: AdImage = {
                id: uuid(),
                image: images[i].name,
            }
            adImages.push(adImage);
        }

        // Creating ad object 
        // TODO: Add user
        const ad: Ad = {
            title: title,
            id: uuid(),
            category: category,
            description: description,
            price: price,
            images: adImages,
        }
        axios.post("/postAd", ad);
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