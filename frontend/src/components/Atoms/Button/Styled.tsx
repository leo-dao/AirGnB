import styled from 'styled-components';

const StyledButton = styled.button`
    background-color: #0A6EDD;
    color: white;
    text-align: center;
    box-shadow: 0px 0px 1px black;
    font-size: 1.2em;
    width: 100%;
    border-radius: 5px;

    padding: 5px 10px;
    font-weight: bold;
    cursor: pointer;
    outline: none;
    transition: all 0.2s ease-in-out;
    &:hover {
        transform: scale(1.05);
    }
    & > * {
        color: white;
    }
`;

export default StyledButton;