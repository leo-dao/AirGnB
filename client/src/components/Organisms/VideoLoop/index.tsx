import React from "react";
import styled from 'styled-components';

const Video = styled.video`

    width:100%;  
    height: 100%;

    z-index: -1;


    @media  (max-width: 768px) {
        display: block;
}

`

interface VideoProps {
    src: string;
}

const VideoLoop = (props: VideoProps) => {
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

export default VideoLoop;