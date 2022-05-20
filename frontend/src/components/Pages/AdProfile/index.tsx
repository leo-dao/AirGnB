import React from "react";
import { useParams } from "react-router-dom";
import AdCardProps from "../../Organisms/AdCard/interfaces";
import Error from "../../Molecules/Error/index";
import AdPhotos from "../../Organisms/AdPhotos";
import UserInfo from "../../Molecules/UserInfo/index";
import UserContact from "../../Organisms/UserContact/index";
import Price from "../../Atoms/Price/index";

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
            display: "flex",
            justifyContent: "center",
        }}>
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
            }}>
                <AdPhotos
                    adId={currentAd.adId}
                    user={currentAd.user}
                    adImages={currentAd.adImages}
                    title={currentAd.title}
                    description={currentAd.description}
                    price={currentAd.price}
                />
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    marginLeft: '30px',
                    border: '0.5px solid black',
                    borderRadius: '10px',
                    backgroundColor: 'white',
                    width: '400px',
                    alignItems: 'center',
                }}>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        textAlign: 'center',
                        marginTop: '10px',
                        marginLeft: '20px',
                        marginRight: '20px',
                    }}>
                        <h1>{currentAd.title}</h1>
                        <p>{currentAd.description}</p>
                        <Price price={currentAd.price} width={200} />
                    </div>

                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        height: '100%',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: '30px',
                        borderTop: '1px dotted black',

                    }}>

                        <UserInfo
                            userId={currentAd.user.userId}
                            avatar={currentAd.user.avatar}
                            name={currentAd.user.name}
                            rating={currentAd.user.rating}
                            numRatings={currentAd.user.numRatings}
                            location={currentAd.user.location}
                            clickAble={true}
                            fontSize={20}
                            avatarSize={80}
                        />
                        <div style={{ marginTop: "20px", width: "100%" }}>
                            <UserContact />
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
};

export default AdProfile;