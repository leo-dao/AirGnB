import React from "react";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    margin-bottom: 1rem;
    gap: 10px;
    `;

const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    border: 1px solid #e0e0e0;
    border-radius: 10px;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
    padding: 10px;
    height: 50px;
    p {
        font-size: 0.8rem;
        margin: 0;
        padding: 0;
    }
`;

const Input = styled.input`
    border: none;
    width: 100%;
    height: 100%;
    background-color: transparent;
    &:focus {
        outline: none;
    }


    ::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
    ::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
`;

const Price = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;


const PriceFilter = () => {

    return (
        <Container>
            <InputContainer>
                <p>Min</p>
                <Price>
                    <p>$</p>
                    <Input type='number' />
                </Price>
            </InputContainer>
            -
            <InputContainer>
                <p>Max</p>
                <Price>
                    <p>$</p>
                    <Input type='number' />
                </Price>
            </InputContainer>
        </Container>
    );
};

export default PriceFilter;