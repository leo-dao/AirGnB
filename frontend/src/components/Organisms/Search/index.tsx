import React from "react";
import SortCategories from "../../Molecules/SortCategories";
import SearchBox from "../../Molecules/SearchBox";
import LocationFilter from "../../Molecules/LocationFilter";
import { userData, adData } from "../../../fakeData";
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
    const [location, setLocation] = React.useState<string>("");
    const onSelect = (value: string) => {
        setLocation(value);
    }

    const onSearch = (value: string) => {

        var ads = adData;
        // Get ads of the same category if a category is selected
        if (category !== "") {
            ads = adData.filter(ad => ad.category === category);
        }

        const filteredLocation = userData.filter(user => user.location === location);
        // Get ads of the same location
        const filteredAdsLocation = ads.filter(ad => filteredLocation.some(user => user.location === ad.user.location));

        // TODO: Use REGEX for value?
        console.log(filteredAdsLocation);
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