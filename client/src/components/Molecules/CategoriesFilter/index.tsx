import React from "react";
import styled from "styled-components";
import categoryList from "../../../utils/categories";

const CategoryContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-bottom: 1rem;
    flex-wrap: wrap;
    flex-direction: row;
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

const CategoriesFilter = () => {

    var defaultCategories = categoryList.map((category: any) => {
        return {
            name: category.name,
            active: false
        }
    });

    const [categories, setCategories] = React.useState(defaultCategories);


    const onClick = (e: any) => {
        // add to params

        setCategories(categories.map((category: any, index: any) => {

            const id = parseInt(e.target.id);
            if (index === id) {
                category.active = !category.active;
            }
            return category;
        }));
    };

    const active = {
        'background-color': 'black',
        color: 'white'
    };

    const inactive = {
        'background-color': 'white',
        color: '#000'
    }

    var style = categories.map((category: any) => {
        if (category.active) {
            return active;
        } else {
            return inactive;
        }
    }
    );

    return (
        <CategoryContainer>
            {categories.map((category, index) => {
                return (
                    <Button
                        id={index}
                        onClick={onClick}
                        style={style[index]}>
                        {category.name}</Button>
                );
            })}
        </CategoryContainer>
    );
};

export default CategoriesFilter;