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
    flex-wrap: wrap;
`;


const SubContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;

    Button {
        margin: 5px
    }
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

interface CategoryProps {
    complete: boolean;
    text: string;
};

interface AllCategoryArray {
    name: string;
    active: boolean;
    parent: string;
};
const CategoriesFilter = (props: CategoryProps) => {

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

    var subCategories: AllCategoryArray[] = [];
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

    let count = -1;
    const allButtons = (
        <AllContainer>
            {subCategoriesState.map((category: any) => {
                count++;
                return (
                    <SubContainer>
                        {count === 0 ? <h2>{category.parent}</h2> : null}
                        {count > 0 && category.parent !== subCategoriesState[count - 1].parent ?
                            <h2>{category.parent}</h2>
                            : null}
                        <Button
                            id={count}
                            key={count}
                            onClick={allClick}
                            style={category.active ? active : inactive}>
                            {category.name}
                        </Button>
                    </SubContainer>
                )
            })}
        </AllContainer>
    );


    return (
        <div>
            {props.complete ? allButtons : defaultButtons}
        </div>
    );
};

export default CategoriesFilter;