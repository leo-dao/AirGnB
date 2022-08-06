import React from "react";
import styled from 'styled-components';

const Video = styled.video`

    width: 100%;

    z-index: -1;
    margin-bottom: 3%;

/*     @media  (max-width: 768px) {
        display: block;
} */

`

interface VideoProps {
    src: string;
}

const VideoBg = (props: VideoProps) => {
    return (
        <Video autoPlay loop muted>
            <source src={props.src} type='video/mp4' />
            Your browser does not support the video tag
            <div style={{
                zIndex: '1'
            }}>
            </div>
        </Video>
    )
}

export default VideoBg;