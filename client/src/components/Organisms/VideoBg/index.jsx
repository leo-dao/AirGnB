import React from "react";
import styled from 'styled-components';
import guitar from '../../../assets/guitar.mp4';
import drums from '../../../assets/drums.mp4'

const Video = styled.video`
    max-width: 100%;
    z-index: 1;
    margin-bottom: 3%;

@media  (max-width: 768px) {

} 

`

const VideoBg = () => {


    return (
        <Video autoPlay loop muted>
            <source src={drums} type='video/mp4' />
            Your browser does not support the video tag

        </Video>
    )
}

export default VideoBg;