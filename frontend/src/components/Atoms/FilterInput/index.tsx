import React from "react";
import { FilterContainer, StyledLogo, StyledContent } from "./Styled";

export interface FilterInputProps {
    content?: React.ReactNode;
    logo?: React.ReactNode;

}

const FilterInput = (props: FilterInputProps) => {
    return (
        <FilterContainer>
            <StyledContent>
                {props.content}
            </StyledContent>
            <StyledLogo>
                {props.logo}
            </StyledLogo>
        </FilterContainer>
    )
};

export default FilterInput