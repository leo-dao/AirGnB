import React from "react";
import { useParams } from "react-router-dom";
import { AdCardProps } from "../AdCard";
import Error from "../Error/index";
import AdCard from "../AdCard";

// I'm guessing I shouldn't put the actual AdCard here?

interface Props {
    data: AdCardProps[]
}

const AdProfile = (props: Props) => {

    let params = useParams();

    const currentAd = (props.data.filter(ad => ad.adId === params.adId))[0];

    if (!currentAd) {
        return <Error msg="Sorry, this ad does not exist" />
    }

    return (
        <div>
            {currentAd.adId}
        </div>


    )
};

export default AdProfile;