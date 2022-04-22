import React from 'react';

import css from "./User.module.css"
import {Button} from "../Button/Button";

const User = ({user}) => {
    const {id, name, username, email} = user
    return (
            <div className={css.user_div}>
                <h2>ID: {id} - Name:{name}</h2>
                <div>Username: {username} - Email:{email}</div>
                <Button to={`${id}`} state={user}>Details</Button>
                <Button to={`${id}/albums`}>Albums</Button>
            </div>
    );
};

export default User;