import React from "react";
import { useParams } from "react-router-dom";
import { AdCardProps } from "../../Molecules/AdCard";
import Error from "../../Molecules/Error/index";
import AdCard from "../../Molecules/AdCard";

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