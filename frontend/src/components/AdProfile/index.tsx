import React from "react";
import { useParams } from "react-router-dom";
import { AdCardProps } from "../AdCard";
import AdCard from "../AdCard";

// I'm guessing I shouldn't put the actual AdCard here?

interface Props {
    data: AdCardProps[]
}

const AdProfile = (props: Props) => {

    let params = useParams();

    return (
        <div>
            {params.adId}


        </div>


    )
};

export default AdProfile;