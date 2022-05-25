import React from "react";
import AdPostBox from "../../Organisms/AdPostBox";
import { Input } from 'antd';
import SortCategories from "../../Molecules/SortCategories";
import AdCard from "../../Organisms/AdCard";
import { userData } from "../../../fakeData";
import AdCardProps from "../../Organisms/AdCard/interfaces";
import { ImageProps } from "../../Organisms/AdCard/interfaces";

const PostAd = () => {

    const [category, SetCategory] = React.useState<string>("");

    const Select = (e: any) => {
        SetCategory(e.key);
    }

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

    const descriptionSubmit = (e: any) => {
        setDescription(e.target.value);
        Continue();
    }

    const priceSubmit = (e: any) => {
        setPrice(e.target.value);
        Continue();
    }

    return (
        <div style={{
            display: "flex",
            flexDirection: "row",
            marginLeft: "10%",
            marginRight: "10%",
        }}>
            <div style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",

            }}>
                <div id="title" style={{
                    marginTop: "1%",
                    marginBottom: "3%",
                }}>
                    <AdPostBox
                        title="What's the title of your ad?"
                        opacity={1}
                        continue={Continue}
                        back={Back}
                        selection={
                            <Input
                                placeholder="Title"
                                showCount={true}
                                maxLength={40}
                                onPressEnter={titleSubmit}
                                style={{ width: "100%" }} />} />
                </div>
                <div id="category" style={{
                    marginTop: "1%",
                    marginBottom: "3%",
                }}>
                    <AdPostBox
                        title="Which category best describes your ad?"
                        opacity={opacity}
                        continue={Continue}
                        disabled={disabled}
                        back={Back}
                        selection={
                            <SortCategories
                                onClick={Select}
                                disabled={disabled}
                                category={category}
                                color="black" />} />
                </div>
                <div id="description" style={{
                    marginTop: "1%",
                    marginBottom: "3%",
                }}>
                    <AdPostBox
                        title="How would you describe your ad?"
                        opacity={opacity}
                        continue={Continue}
                        disabled={disabled}
                        back={Back}
                        selection={
                            <Input.TextArea
                                placeholder="Description"
                                disabled={disabled}
                                showCount={true}
                                maxLength={100}
                                onPressEnter={descriptionSubmit}
                                size="large"
                                style={{ width: "100%", }} />} />
                </div>
                <div id="price" style={{
                    marginTop: "1%",
                    marginBottom: "3%",
                    width: "100%"
                }}>
                    <AdPostBox
                        title="What's the price of your ad?"
                        opacity={opacity}
                        continue={Continue}
                        disabled={disabled}
                        back={Back}
                        selection={
                            <Input
                                placeholder="Price"
                                disabled={disabled}
                                onPressEnter={priceSubmit}
                                type="number"
                                style={{ width: "100%" }} />} />
                </div>
            </div>
            <div style={{
            }}>
                <AdCard
                    title={title}
                    description={description}
                    price={price}
                    adId={'0'}
                    user={userData[0]}
                    adImages={images}
                />
            </div>
        </div>
    )
}

{/* provide ad title first
provide category out of choices
provide description
provide price
provide photos */}


export default PostAd;