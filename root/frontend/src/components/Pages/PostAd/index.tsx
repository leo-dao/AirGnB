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
    justify-content: center;
    gap: 80px;
`
const CardStyled = styled.div`
    position: sticky;
    top: 0;
    margin-top: 200px;
    height: 100%;
`

const PostAd = () => {

    const displayImage = [{
        imgId: "test",
        img: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    }];


    const initialState = {
        title: '',
        id: uuid(),
        category: '',
        description: '',
        price: '0',
    }

    const [formData, updateFormData] = React.useState(initialState);
    const [files, updateFiles] = React.useState<File[]>([]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        updateFormData({
            ...formData,
            [e.target.placeholder.toLowerCase()]: e.target.value
        })
    }

    const handleCategory = (e: any) => {
        updateFormData({
            ...formData,
            category: e.key
        })
    }

    const handleFiles = (e: any) => {
        updateFiles(e.target.files);
    }

    var fileNames: string[] = Array.from(files).map((file: File) => file.name);

    const createAd = (e: any) => {
        e.preventDefault();

        // Creating unique ids for all images
        /* const adImages = [];
        for (let i = 0; i < images.length; i++) {
            const adImage = {
                id: uuid(),
                image: images[i],
            }
            adImages.push(adImage);
        } */

        const data = new FormData();

        for (const [key, value] of Object.entries(formData)) {
            data.append(key, value);
        }

        Array.from(files).forEach(file => {
            data.append('images', file, file.name);
        });

        axios({
            method: 'post',
            url: '/postAd',
            data: data,
            headers: { "Content-Type": "multipart/form-data" }
        }).then(function (res) {
            console.log(res);
        })
            .catch(function (res) {
                console.log(res);
            });
    }

    return (
        <Container>
            <AdPostForm
                setTitle={handleChange}
                titleDisabled={formData.title.length < 3}
                setDescription={handleChange}
                descriptionDisabled={formData.description.length < 10}
                setPrice={handleChange}
                priceDisabled={parseInt(formData.price) < 10}
                setCategory={handleCategory}
                setImages={handleFiles}
                fileNames={fileNames}
                imagesDisabled={files === undefined}
                category={formData.category}
                createAd={createAd}
            />
            <CardStyled>
                <AdCard
                    disabled={true}
                    title={formData.title}
                    description={formData.description}
                    price={parseInt(formData.price)}
                    adId={'0'}
                    user={userData[0]}
                    adImages={displayImage}
                />
            </CardStyled>
        </Container>
    )
}

export default PostAd;