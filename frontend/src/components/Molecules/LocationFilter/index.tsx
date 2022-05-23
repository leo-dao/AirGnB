import React from "react";
import { Select } from 'antd';


interface Props {
    data: any[];
    onSelect: (value: string) => void;
}

const LocationFilter = (props: Props) => {

    const locationData = props.data.map(item => {
        return {
            value: item.name + ", " + item.subcountry + ", " + item.country,
        }
    });

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#FAFAFA",
                border: "1px solid #ccc",
                borderRadius: "15px",
                fontSize: "15px",
                cursor: "pointer",
                width: "400px"
            }}>
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginLeft: "10px",
                    marginRight: "10px",
                    cursor: "pointer",
                    fontSize: "18px",
                    height: "2.5em",
                    width: "100%",
                }}>
                <Select
                    style={{
                        width: "100%",
                        fontSize: "18px",
                        color: "black",
                        textAlign: "center",
                    }}
                    showSearch
                    bordered={false}
                    options={locationData}
                    allowClear={true}
                    placeholder="Select your city"
                    filterOption={(inputValue, option) =>
                        option!.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
                    }
                    dropdownStyle={{
                        border: "none",
                        boxShadow: "0px 0px 10px #8D8D8D",
                        borderRadius: "10px",
                        width: "100%",
                    }}
                    onSelect={props.onSelect}
                />
            </div>

            <div style={{
                borderLeft: "1px solid #ccc",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "22px",
                paddingLeft: "10px",
                paddingRight: "10px",
            }}>
                <img src="http://cdn.onlinewebfonts.com/svg/img_527461.png"
                    width={23}
                    height={30}
                >
                </img>
            </div>
        </div>
    )
}
export default LocationFilter;