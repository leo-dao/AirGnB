import React from "react";
import { Select } from 'antd';
import FilterInput from "../../Atoms/FilterInput/index";
const img = require('../../../assets/location.png')

interface Props {
    data: any[];
    onSelect: (value: string) => void;
}

const LocationFilter = (props: Props) => {

    const location = props.data.map(item => {
        return {
            value: item.name + ", " + item.country,     // No subcountry for now
        }
    });

    return (

        <FilterInput
            width="350px"
            content={
                <Select
                    style={{
                        width: "100%",
                        fontSize: "18px",
                        color: "black",
                        textAlign: "center",
                    }}
                    showSearch
                    bordered={false}
                    options={location}
                    allowClear={true}
                    placeholder="Select your city"
                    filterOption={(inputValue, option) =>
                        option!.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
                    }
                    dropdownStyle={{
                        border: "none",
                        boxShadow: "0px 0px 10px #8D8D8D",
                        borderRadius: "10px",
                    }}
                    onSelect={props.onSelect}
                />
            }
            logo={
                <img
                    src={img}
                    width={23}
                    height={30}
                />
            }
        />
    )
}

export default LocationFilter;