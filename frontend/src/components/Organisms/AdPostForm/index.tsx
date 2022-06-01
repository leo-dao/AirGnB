import React from "react";
import Input from 'antd/lib/input';
import Button from "../../Atoms/Button";
import AdPostBox from "../../Organisms/AdPostBox";
import SortCategories from "../../Molecules/SortCategories";
import styled from "styled-components";

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;
    gap: 20px;
`

// modify input element ant deisng
const StyledInput = styled(Input)`
    height: 40px;
    width: 200px;
    font-size: 16px;
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

    const [status, setEnable] = React.useState<boolean[]>([true, true, true, true, true]);

    const [index, setIndex] = React.useState<number>(0);

    const cont = () => {
        setEnable(prev => {
            var newStatus = [...prev];
            newStatus[index] = false;
            setIndex(index + 1);
            return newStatus;
        });
    }

    return (
        <Form onSubmit={props.createAd}>
            <AdPostBox title="What's the title of your listing?"
                continue={cont}
                selection={
                    <StyledInput
                        placeholder={"Title"}
                        type={"text"}
                        required
                        onKeyUp={props.setTitle} />
                } />
            <AdPostBox title="Which category best describes your ad?"
                continue={cont}
                disabled={status[0]}
                selection={
                    <SortCategories
                        onClick={props.setCategory}
                        category={props.category}
                        disabled={status[0]}
                    />
                } />
            <AdPostBox title="How would you describe your ad?"
                continue={cont}
                disabled={status[1]}
                selection={
                    <Input.TextArea
                        placeholder="Description"
                        showCount={true}
                        maxLength={100}
                        size={"large"}
                        disabled={status[1]}
                        onKeyUp={props.setDescription} />
                } />
            <AdPostBox title="What's the price of your ad?"
                continue={cont}
                disabled={status[2]}
                selection={
                    <StyledInput
                        placeholder={"Price"}
                        type={"number"}
                        required
                        disabled={status[2]}
                        onKeyUp={props.setPrice} />
                } />
            <AdPostBox title="Add images to your ad"
                continue={cont}
                disabled={status[3]}
                selection={
                    <StyledInput
                        placeholder={"Image URL"}
                        type={"text"}
                        disabled={status[3]}
                        required
                    />
                } />
            <Button
                type={'submit'}
                text={"Post Ad"}
                width={'200px'}
                disabled={status[4]}
            />
        </Form >
    )
}

export default AdPostForm;
