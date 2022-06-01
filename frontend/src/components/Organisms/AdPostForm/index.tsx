import React from "react";
import Input from 'antd/lib/input';
import Button from "../../Atoms/Button";
import AdPostBox from "../../Organisms/AdPostBox";
import SortCategories from "../../Molecules/SortCategories";
import styled from "styled-components";
import { AntDesignOutlined } from "@ant-design/icons";

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;
    gap: 20px;
`

interface PostAdProps {
    setTitle: (e: any) => void;
    setCategory: (e: any) => void;
    setDescription: (e: any) => void;
    setPrice: (e: any) => void;
    createAd: (e: any) => void;
    category: string;
}

const AdPostForm = (props: PostAdProps) => {



    return (
        <Form onSubmit={props.createAd}>
            <AdPostBox title="What's the title of your listing?" selection={
                <Input
                    placeholder={"Title"}
                    type={"text"}
                    required
                    onKeyUp={props.setTitle} />
            } />
            <AdPostBox title="Which category best describes your ad?" selection={
                <SortCategories
                    onClick={props.setCategory}
                    category={props.category}
                />
            } />
            <AdPostBox title="How would you describe your ad?" selection={
                <Input.TextArea
                    placeholder="Description"
                    showCount={true}
                    maxLength={100}
                    onKeyUp={props.setDescription} />
            } />
            <AdPostBox title="What's the price of your ad?" selection={
                <Input
                    placeholder={"Price"}
                    type={"number"}
                    required
                    onKeyUp={props.setPrice}
                />
            } />
            <Button type={'submit'} text={"Post Ad"} />
        </Form >
    )
}

export default AdPostForm;
