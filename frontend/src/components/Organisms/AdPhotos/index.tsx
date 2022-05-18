import React, { useState } from "react";
import AdCardProps from "../../Organisms/AdCard/interfaces";
import AdPhotoBg from "../../Molecules/AdPhotoBg";

const AdPhotos = (props: AdCardProps) => {

    const [image, setImage] = useState(props.adImages[0].img);  // first image is the default
    let index = props.adImages.findIndex(img => img.img === image);

    const goLeft = () => {
        index--;
        index = index < 0 ? props.adImages.length - 1 : index;
        setImage(props.adImages[index].img);
    }

    const goRight = () => {
        index++
        index = index > props.adImages.length - 1 ? 0 : index;
        setImage(props.adImages[index].img);
    }

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        }}>

            <AdPhotoBg left={goLeft} right={goRight} image=
                {<img src={image} style={{
                    maxWidth: '700px',
                    maxHeight: '400px',
                    objectFit: 'cover',
                    borderRadius: '10px',
                }} />} />
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