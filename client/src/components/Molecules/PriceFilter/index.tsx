import React from "react";
import styled from "styled-components";

const Title = styled.h1`
    font-size: 1.5rem;
    font-weight: bold;
    color: black;
    margin-bottom: 1rem;
`;

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
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

    const [min, setMin] = React.useState<number>();
    const [max, setMax] = React.useState<number>();

    const checkMin = (e: any) => {


    }

    const checkMax = (e: any) => {

    }

    return (
        <div style={{
            margin: 'none',
            padding: 'none',
            width: '100%',
            height: '100%',
        }}>
            <Title>Price</Title>
            <Container className="parent">
                <InputContainer>
                    <p>Min</p>
                    <Price>
                        <p>$</p>
                        <Input type='number' onChange={checkMin} />
                    </Price>
                </InputContainer>
                -
                <InputContainer>
                    <p>Max</p>
                    <Price>
                        <p>$</p>
                        <Input type='number' onChange={checkMax} />
                    </Price>
                </InputContainer>
            </Container>
        </div>
    );
};

export default PriceFilter;