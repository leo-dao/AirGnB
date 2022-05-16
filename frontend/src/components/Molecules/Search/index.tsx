import React from "react";
import { Input } from 'antd';


const { Search } = Input;

const SearchBox = () => {

    const onSearch = (value: string) => {
        console.log(value);
    }

    return (
        <div>
            <Search
                placeholder="What are you looking for?"
                onSearch={onSearch}
                enterButton />
        </div>
    )
}
export default SearchBox;