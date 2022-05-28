import React from "react";
import { SearchOutlined } from "@ant-design/icons";
import FilterInput from "../../Atoms/FilterInput/index";

interface Props {
    onSearch: (value: string) => void;
}

const SearchBox = (props: Props) => {
    const [Result, setSearchBox] = React.useState("");

    return (
        <FilterInput
            content={
                <input
                    type="text"
                    placeholder="What are you searching for?"
                    onChange={(e) => setSearchBox(e.target.value)}
                    onKeyPress={(e) => {
                        if (e.key === 'Enter') {
                            props.onSearch(Result);
                        }
                    }}
                    style={{
                        border: "none",
                        outline: "none",
                        backgroundColor: "transparent",
                        textAlign: "center",
                        fontSize: "18px",
                        color: "#8D8D8D",
                        width: "100%",
                    }}>
                </input>
            }
            logo={
                <div onClick={() => props.onSearch(Result)}>
                    <SearchOutlined />
                    &nbsp;
                    Search
                </div>
            }
        />
    )
}
export default SearchBox;