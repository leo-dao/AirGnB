import React from "react";
import { useParams } from "react-router-dom";
import AdCardProps from "../../Molecules/AdCard/interfaces";
import Error from "../../Molecules/Error/index";
import AdPhotos from "../../Organisms/AdPhotos";
import UserInfo from "../../Molecules/UserInfo/index";
import UserContact from "../../Organisms/UserContact/index";
import { Button } from "antd";
import { DribbbleCircleFilled } from "@ant-design/icons";

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
                />
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    marginLeft: '30px',
                    border: '0.5px solid black',
                    backgroundColor: 'white',
                    width: '400px',
                    alignItems: 'center',
                }}>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginTop: '30px',
                        marginLeft: '20px',
                        marginRight: '20px',
                        height: '100px',
                    }}>
                        <h1>{currentAd.title}</h1>
                        <p>{currentAd.description}</p>
                    </div>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        marginTop: '50px',
                        borderTop: '1px dotted black',
                        justifyContent: 'center',
                    }}>
                        <div style={{
                            marginTop: '20px',
                        }}>
                            <UserInfo
                                userId={currentAd.user.userId}
                                avatar={currentAd.user.avatar}
                                name={currentAd.user.name}
                                numAds={currentAd.user.numAds}
                                clickAble={true}
                            />
                            <UserContact />
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
};

export default AdProfile;