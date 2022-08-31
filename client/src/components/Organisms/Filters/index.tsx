import React from "react";
import styled from "styled-components";
import PriceFilter from "../../Molecules/PriceFilter";
import CategoriesFilter from "../../Molecules/CategoriesFilter";
import Button from "../../Atoms/Button";
import Close from "../../Atoms/Close";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
`;

const Top = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    border-bottom: 1px solid #e0e0e0;
    padding: 10px;
    margin-bottom: 20px;
    background: #fff;
    position: sticky;
    top: 0px;
    z-index: 10;
    `;

const Title = styled.div`
    font-size: 1.5rem;
    font-weight: bold;
`;

const FiltersContainer = styled.div`
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
    justify-content: center;
    align-items: center;
    width: 100%;
`;

const FilterContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    margin-bottom: 1rem;
    width: 70%;
    height: 100%;
`;

const Bottom = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    background-color: #fff;
    border-top: 1px solid #e0e0e0;
    padding: 10px;
    position: sticky;
    bottom: 0px;
`;

const MoreButton = styled.button`
    background: none;
    border: none;
    display: flex;
    position: relative;
    left: 20px;
    border-bottom: 1px solid black;
    font-size: 0.9rem;
    color: black;
    cursor: pointer;
    z-index: 1;
    `;

const Filters = () => {

    const clear = () => {
        console.log("clear");
        window.location.reload();
    }
    const apply = () => {
        console.log("apply");
        window.location.reload();
    }


    const [complete, setComplete] = React.useState(false);
    const [showText, setShow] = React.useState('Show more');
    const flip = (e: any) => {
        setComplete(!complete);
        showText === 'Show more' ? setShow('Show less') : setShow('Show more');
    };

    return (
        <Container>
            <Top>
                <Title>Filters</Title>
                <Close black />
            </Top>
            <FiltersContainer>
                <FilterContainer>
                    <Title>Price</Title>
                    <PriceFilter />
                </FilterContainer>
                <FilterContainer>
                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                        <Title>Categories</Title>
                        <MoreButton onClick={flip}>{showText}</MoreButton>
                    </div>
                    <CategoriesFilter
                        complete={complete}
                    />
                </FilterContainer>
            </FiltersContainer>
            <Bottom>
                <Button secondary text='Clear all' onClick={clear} />
                <Button text="Apply" onClick={apply} />
            </Bottom>
        </Container>
    );
};

export default Filters;