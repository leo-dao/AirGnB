import React from "react";
import SortCategories from "../../Molecules/SortCategories";
import SearchBox from "../../Molecules/SearchBox";
import LocationFilter from "../../Molecules/LocationFilter";
import AdCardList from "../AdCardList";
import { userData, adData } from "../../../fakeData";
import axios from "axios";

const Search = () => {

    // CATEGORY DATA
    const [category, SetCategory] = React.useState<string>("");
    const onClick = (e: any) => {
        SetCategory(e.key);
    }
    let color;
    category === "" ? (color = "grey") : (color = "black");

    // LOCATION DATA
    const [data, setData] = React.useState<any[]>([]);
    React.useEffect(() => {
        axios.get('https://pkgstore.datahub.io/core/world-cities/world-cities_json/data/5b3dd46ad10990bca47b04b4739a02ba/world-cities_json.json')
            .then(res => {
                setData(res.data);
            })
    }, [])
    const [location, setLocation] = React.useState<string>("");
    const onSelect = (value: string) => {
        setLocation(value);
    }

    const onSearch = (value: string) => {
        window.location.href = "/catalog?category=" + category + "&location=" + location + "&search=" + value;
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
            <SearchBox onSearch={onSearch} />
        </div>
    )
}
export default Search;