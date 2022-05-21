import React from "react";
import { SearchOutlined } from "@ant-design/icons";


const SearchBox = () => {
    const [Result, setSearchBox] = React.useState("");

    const Search = () => {
        console.log(Result);
    }

    return (
        <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#FAFAFA",
            border: "1px solid #ccc",
            borderRadius: "5px",
            cursor: "pointer",
            width: "300px"
        }}>
            <input
                type="text"
                placeholder="What are you searching for?"
                onChange={(e) => setSearchBox(e.target.value)}
                onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                        Search();
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

            <div style={{
                borderLeft: "1px solid #ccc",
                paddingLeft: "10px",
                paddingRight: "10px",
                fontSize: "22px",
            }} >
                <SearchOutlined onClick={Search} />
            </div>
        </div >
    )
}
export default SearchBox;