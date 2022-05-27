import React from "react";
import { Select } from 'antd';
import { Container, SelectContainer, LocationLogoContainer } from './Styled';


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
        <Container >
            <SelectContainer>
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
            </SelectContainer>

            <LocationLogoContainer>
                <img src="http://cdn.onlinewebfonts.com/svg/img_527461.png" />
            </LocationLogoContainer>
        </Container>
    )
}
export default LocationFilter;