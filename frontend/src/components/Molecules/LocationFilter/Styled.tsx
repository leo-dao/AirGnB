import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 25vw;
    background-color: #FAFAFA;    
    border-radius: 15px;
    box-shadow: 0px 0px 1px black;
    cursor: pointer;
`;

export const SelectContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 80%;
`
export const LocationLogoContainer = styled.div`
    border-left: 1px solid #ccc;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 22px;
    font-weight: bold;
    width: 15%;
    img {
        width: 23px;
        height: 30px;
    }
`

