import React from "react";
import AdPostBox from "../../Organisms/AdPostBox";
import { Input } from 'antd';
import SortCategories from "../../Molecules/SortCategories";

const PostAd = () => {

    const [category, SetCategory] = React.useState<string>("");

    const Select = (e: any) => {
        SetCategory(e.key);
    }

    const [opacity, setOpacity] = React.useState<number>(0.2);

    const [disabled, setDisabled] = React.useState<boolean>(true);

    const Continue = () => {
        setOpacity(1);
        setDisabled(false);
    }
    const Back = () => {
        setOpacity(0.3);
        setDisabled(true);
    }

    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginLeft: "-5%",
            width: "100%",
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
                        style={{ width: "100%" }} />
                }
            />
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
                        color="black"
                    />
                }
            />
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
                        style={{ width: "100%" }} />
                }
            />
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
                        style={{ width: "100%" }} />
                }
            />

        </div>
    )
}

{/* provide ad title first
provide category out of choices
provide description
provide price
provide photos */}


export default PostAd;