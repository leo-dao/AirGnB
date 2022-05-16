import React from "react";
import AdCardProps from "../../Molecules/AdCard/interfaces";


const AdPhotos = (props: AdCardProps) => {
    return (
        <div style={{
            marginTop: '30px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        }}>
            <h1>{props.title}</h1>

            <div style={{
                marginTop: '30px',
                backgroundColor: 'white',
                width: '700px',
                height: '400px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                border: '0.5px solid black',
            }}>
                {<img src={props.adImages[0]} alt={props.adId} style={{
                    maxWidth: '699px',  // less than 700px to allow the border to be seen
                    maxHeight: '399px',
                    objectFit: 'cover',
                }} />}
            </div>
            <div style={{
                width: '700px',
                height: '50px',
                backgroundColor: 'white',
                borderRadius: '10px',
                boxShadow: '0px 0px 1px black',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'center',
                marginTop: '30px',
            }}>
                {props.adImages.map(image => {
                    return <img src={image} alt={props.adId} style={{
                        maxWidth: '50px',
                        maxHeight: '50px',
                        objectFit: 'cover',
                        cursor: 'pointer',
                    }}
                    />
                }
                )}
            </div>
        </div>

    )
}
export default AdPhotos;