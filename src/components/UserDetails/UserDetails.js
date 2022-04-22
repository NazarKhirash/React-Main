import React from 'react';

import css from "./UserDetails.module.css"
import {Button} from "../Button/Button";
import {Outlet} from "react-router-dom";

const UserDetails = ({user}) => {
    const {id, name, username, email} = user;
    return (
        <div className={css.user_det_div}>
            <div>ID: {id}</div>
            <div>Name: {name}</div>
            <div>UserName: {username}</div>
            <div>Email: {email}</div>
            <Button to={'posts'}>Posts</Button>
            <Outlet/>
        </div>
    );
};

export default UserDetails;