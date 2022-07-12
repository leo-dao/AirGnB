import React from "react";
import { useState, useEffect } from "react";
import useFindImages from "./useFindImages";
import { User } from '../interfaces';
import axios from "axios";
import { networkInterfaces } from "os";


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
    })

    //console.log(user?._id)
    //let image = useFindImages('user', user._id)

    // Either returning user or undefined
    return user;
}

export default useFindUser;