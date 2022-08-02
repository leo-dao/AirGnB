import React from "react";
import { useState, useEffect } from "react";
import { User } from '../interfaces';
import axios from "axios";


const useFindUser = () => {

    let token = (JSON.parse(localStorage.getItem('authToken') || '{}')).token;

    const [user, setUser] = React.useState<User>();

    // Sending the token to the server and getting the user
    useEffect(() => {
        axios.get('/checkUser', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then((res) => {
            setUser(res.data);
        })
    }, [token])

    // Either returning user or undefined
    return user;
}

export default useFindUser;