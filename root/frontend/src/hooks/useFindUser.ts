import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";


function useFindUser() {

    let token = (JSON.parse(localStorage.getItem('authToken') || '{}')).token;

    const [user, setUser] = React.useState();

    useEffect(() => {
        axios.get('/checkUser', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then((res) => {
            setUser(res.data);
        })
    })
    return user;
}

export default useFindUser;