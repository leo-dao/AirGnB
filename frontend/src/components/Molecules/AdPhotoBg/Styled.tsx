import styled from 'styled-components';


export const Container = styled.div`
    width: 800px;
    height: 500px;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0px 0px 1px black;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    object-fit: cover;
`;

export const PhotoContainer = styled.div`
    background-color: transparent;
    width: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;