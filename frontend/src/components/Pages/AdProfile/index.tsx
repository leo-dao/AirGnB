import React from "react";
import { useParams } from "react-router-dom";
import AdCardProps from "../../Molecules/AdCard/interfaces";
import Error from "../../Molecules/Error/index";
import AdPhotos from "../../Organisms/AdPhotos";
import UserInfo from "../../Molecules/UserInfo/index";

interface Props {
    data: AdCardProps[],
}

const AdProfile = (props: Props) => {

    let params = useParams();

    const currentAd = (props.data.filter(ad => ad.adId === params.adId))[0];

    if (!currentAd) {
        return <Error msg="Sorry, this ad does not exist" />
    }

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'row',
            margin: "auto"
        }}>
            <AdPhotos
                adId={currentAd.adId}
                user={currentAd.user}
                adImages={currentAd.adImages}
                title={currentAd.title}
                description={currentAd.description}
            />

            <UserInfo
                userId={currentAd.user.userId}
                avatar={currentAd.user.avatar}
                name={currentAd.user.name}
                numAds={currentAd.user.numAds}
                clickAble={true}
            />
        </div>
    )
};

export default AdProfile;