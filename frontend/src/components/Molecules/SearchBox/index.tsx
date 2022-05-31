import React from "react";
import { SearchOutlined } from "@ant-design/icons";
import FilterInput from "../../Atoms/FilterInput/index";
import styled from "styled-components";

const StyledInput = styled.input`
    border: none;
    outline: none;
    width: 100%;
    text-align: center;
    background-color: transparent;
    ::placeholder {
        color: grey;
    }
    `;

const SearchStyle = styled.div`
    color: black;
    font-size: 20px;
    transition: all 0.2s ease-in-out;
    :hover {
        color: #1890ff;
    }
`

interface SearchBoxProps {
    onSearch: (value: string) => void;
}

const SearchBox = (props: SearchBoxProps) => {
    const [Result, setSearchBox] = React.useState("");

    return (
        <FilterInput
            width="400px"
            content={
                <StyledInput
                    type="text"
                    placeholder="What are you searching for?"
                    onChange={(e) => setSearchBox(e.target.value)}
                    onKeyPress={(e) => {
                        if (e.key === 'Enter') {
                            props.onSearch(Result);
                        }
                    }}
                >
                </StyledInput>
            }
            logo={
                <SearchStyle onClick={() => props.onSearch(Result)}>
                    <SearchOutlined />
                </SearchStyle>
            }
        />
    )
}
export default SearchBox;