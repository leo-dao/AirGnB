import React from "react";
import SortCategories from "../../Molecules/SortCategories";
import SearchBox from "../../Molecules/SearchBox";
import LocationFilter from "../../Molecules/LocationFilter";
import axios from "axios";

const Search = () => {

    // CATEGORY DATA
    const [category, SetCategory] = React.useState<string>("");

    const onClick = (e: any) => {
        SetCategory(e.key);
    }

    let color;
    category === "" ? (color = "#8D8D8D") : (color = "black");


    // LOCATION DATA
    const [data, setData] = React.useState<any[]>([]);

    React.useEffect(() => {
        axios.get('https://pkgstore.datahub.io/core/world-cities/world-cities_json/data/5b3dd46ad10990bca47b04b4739a02ba/world-cities_json.json')
            .then(res => {
                setData(res.data);
            })
    }, [])

    // declare location
    const [location, setLocation] = React.useState<string>("");

    const onSelect = (value: string) => {
        setLocation(value);
    }

    const onSearch = (value: string) => {
        console.log(value, category, location);
    }

    return (
        <div style={{
            display: "flex",
            flexDirection: "row",
        }}>
            <SortCategories
                onClick={onClick}
                color={color}
                category={category} />
            <LocationFilter
                data={data}
                onSelect={onSelect} />
            {/* <div style={{ marginLeft: "10%" }} /> */}
            <SearchBox onSearch={onSearch} />
        </div>
    )
}
export default Search;