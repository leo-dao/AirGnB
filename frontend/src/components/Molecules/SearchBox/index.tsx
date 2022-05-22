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
            borderRadius: "15px",
            cursor: "pointer",
            width: "400px"
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
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                borderLeft: "1px solid #ccc",
                paddingLeft: "10px",
                paddingRight: "10px",
                fontSize: "20px",
                fontWeight: "bold",
                color: "#0A6EDD",
                width: "40%",
            }} >
                <SearchOutlined onClick={Search} />
                search
            </div>
        </div >
    )
}
export default SearchBox;