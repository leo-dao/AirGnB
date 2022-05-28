import styled from "styled-components";
import { PriceProps } from ".";

export const StyledPrice = styled.div`
    color: white;
    background-color: #6699cc;
    border-radius: 5px;
    width: 35%;
    text-align: center;
    padding: ${(props: PriceProps) => (props.type === "card" ? "5px" : "10px")};
    font-size: ${(props: PriceProps) => props.type === "card" ? "13px" : "20px"};
`;

export default StyledPrice;