import React, { useState } from "react";
import AdCardProps from "../../Molecules/AdCard/interfaces";

const AdPhotos = (props: AdCardProps) => {

    const [image, setImage] = useState(props.adImages[0].img);  // first image is the default

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        }}>
            <div style={{
                backgroundColor: 'white',
                width: '700px',
                height: '400px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '0.5px solid black',
            }}>
                {<img src={image} style={{
                    maxWidth: '699px',  // less than 700px to allow the border to be seen
                    maxHeight: '399px',
                    objectFit: 'cover',
                    borderRadius: '5px',
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
                    return <img src={image.img} style={{
                        maxWidth: '50px',
                        maxHeight: '50px',
                        objectFit: 'cover',
                        cursor: 'pointer',
                    }}
                        onClick={() => { setImage(image.img); }} />
                })}
            </div>
        </div>
    )
}
export default AdPhotos;