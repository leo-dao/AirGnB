import React, { useEffect } from "react";
import styled from "styled-components";
import categoryList from "../../../utils/categories";

const DefaultContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-bottom: 1rem;
    flex-wrap: wrap;
    flex-direction: row;
    gap: 20px;
`;

const AllContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 20px;
`;

const Button = styled.button.attrs((props: any) => props)`
    background: none;
    border-radius: 10px;
    padding: 5px;
    cursor: pointer;
    border: 1px solid #edededeb;

    &:hover {
        border: 1px solid black;
    }
    `;

const MoreButton = styled.button.attrs((props: any) => props)`
    background: none;
    border: none;
    border-bottom: 1px solid black;
    color: black;
    cursor: pointer;
    `;

const CategoriesFilter = () => {

    const active = {
        'background-color': 'black',
        color: 'white'
    };

    const inactive = {
        'background-color': 'white',
        color: '#353535eb'
    }

    var defaultCategories = categoryList.map((category: any) => {
        return {
            name: category.name,
            active: false,
        }
    });


    interface categoryArray {
        name: string;
        active: boolean;
        parent: string;
    };

    var subCategories: categoryArray[] = [];

    categoryList.map((category: any) => {
        if (category.name !== 'Other') {
            category.type.map((subCategory: any) => {
                subCategories.push({
                    name: subCategory,
                    active: false,
                    parent: category.name,
                });
            }
            )
        }
    }
    );

    const [subCategoriesState, setSubCategoriesState] = React.useState(subCategories);
    const [defaultCategoriesState, setDefaultCategoriesState] = React.useState(defaultCategories);
    const [complete, setComplete] = React.useState(false);
    const [showText, setShow] = React.useState('Show more');

    const flip = (e: any) => {
        setComplete(!complete);
        showText === 'Show more' ? setShow('Show less') : setShow('Show more');
    }

    var defaultClick = (e: any) => {
        const id = parseInt(e.target.id);
        setDefaultCategoriesState(defaultCategoriesState.map((category: any, index: any) => {
            if (index === id) {
                category.active = !category.active;
                category.style = category.active ? active : inactive;
            }
            return category;
        }));
    };

    const allClick = (e: any) => {
        var count = -1;
        const id = parseInt(e.target.id);
        setSubCategoriesState(subCategoriesState.map((category: any) => {
            count++;
            if (count === id) {
                category.active = !category.active;
            }
            return category;
        }));
    };

    var defaultButtons = (

        <DefaultContainer>
            {defaultCategoriesState.map((category: any, index: any) => {
                return (
                    <Button
                        id={index}
                        onClick={defaultClick}
                        style={category.active ? active : inactive}>
                        {category.name}
                    </Button>
                )
            }
            )}
        </DefaultContainer>
    );

    // add dummy first element?

    let count = -1;
    const allButtons = subCategoriesState.map((category: any) => {
        count++;
        return (
            <div>
                {count > 0 && category.parent !== subCategoriesState[count - 1].parent ?
                    <div>
                        <h5>{category.parent}</h5>
                    </div>
                    : null}
                <Button
                    id={count}
                    onClick={allClick}
                    style={category.active ? active : inactive}>
                    {category.name}
                </Button>
            </div>
        )
    }
    );


    return (
        <div>
            {complete ? allButtons : defaultButtons}
            <MoreButton onClick={flip}>{showText}</MoreButton>
        </div>
    );
};

export default CategoriesFilter;