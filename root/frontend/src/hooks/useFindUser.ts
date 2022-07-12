import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";


function useFindUser() {

    let token = (JSON.parse(localStorage.getItem('authToken') || '{}')).token;

    const [user, setUser] = React.useState();


    // Sending the token to the server and getting the user
    useEffect(() => {
        axios.get('/checkUser', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then((res) => {
            setUser(res.data);
        })
    })

    // Either returning user or undefined
    return user;
}

export default useFindUser;