import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { error } from "console";


const useFindImages = (type: string) => {

    let url: string;

    if (type === 'avatar') {
        url = '/';
    }
    else if (type === 'ad') {
        url = '/';
    }


    const [images, setImages] = React.useState();

    // Sending the token to the server and getting the user
    useEffect(() => {
        axios.get(url, {

        }).then((res) => {
            setImages(res.data);
        })
    })

    return images;
}






export default useFindImages;