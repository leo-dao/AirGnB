import React from "react";
import { Select } from 'antd';
import FilterInput from "../../Atoms/FilterInput/index";
import Location from "../../Atoms/Location";
import LocationIcon from '../../../assets/icons/location.png';

interface Props {
    data: any[];
    onSelect: (value: string) => void;
}

const LocationFilter = (props: Props) => {

    const locations = props.data.map(item => {
        return {
            value: item.name + ", " + item.country,     // No subcountry for now
        }
    });

    return (

        <FilterInput
            content={
                <Location
                    onSelect={props.onSelect}
                    data={locations}
                />
            }
            logo={
                <img
                    src={LocationIcon}
                    width={23}
                    height={30}
                />
            }
        />
    )
}

export default LocationFilter;