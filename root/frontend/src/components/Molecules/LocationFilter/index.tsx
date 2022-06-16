import React from "react";
import Select from 'antd/lib/select';
import FilterInput from "../../Atoms/FilterInput/index";
import styled from "styled-components";

const StyledSelect = styled(Select)`
    width: 100%;
    font-size: 18px;
    color: black;
    text-align: center;
    .ant-select-selection-placeholder {
        color: grey;
    }
`;

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
                <StyledSelect
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
                />
            }
            logo={
                <img
                    src="http://cdn.onlinewebfonts.com/svg/img_527461.png"
                    width={23}
                    height={30}
                />
            }
        />
    )
}

export default LocationFilter;