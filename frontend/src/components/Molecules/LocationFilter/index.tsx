import React from "react";
import { AutoComplete } from "antd";
import axios from "axios";


const LocationFilter = () => {

    const [data, setData] = React.useState<any[]>([]);

    React.useEffect(() => {
        axios.get('https://pkgstore.datahub.io/core/world-cities/world-cities_json/data/5b3dd46ad10990bca47b04b4739a02ba/world-cities_json.json')
            .then(res => {
                setData(res.data);
            })
    }, [])

    const locationData = data.map(item => {
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
            <div style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginLeft: "10px",
                marginRight: "10px",
                cursor: "pointer",
                textAlign: "center",
                fontSize: "18px",
                color: "#8D8D8D",
                height: "2.5em",
                width: "100%",
            }}>
                <AutoComplete
                    style={{
                        width: "90%",
                        textAlign: "center",
                        fontSize: "18px",
                    }}
                    options={locationData}
                    placeholder="Select your city"
                    filterOption={(inputValue, option) =>
                        option!.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
                    }
                    dropdownStyle={{
                        border: "none",
                        boxShadow: "0px 0px 10px #8D8D8D",
                        borderRadius: "10px",
                        width: "100%",
                        backgroundColor: "#FAFAFA",
                    }}
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