import React from 'react';

import {Button} from "../Button/Button";
import css from './Album.module.css'

const Album = ({album}) => {
    const {id, userId, title} = album;
    return (
        <div className={css.album_div}>
            <div>ID: {id}</div>
            <div>Title: {title}</div>
            <Button to={`${id}/photos`}>Photos</Button>
        </div>
    );
};

export default Album;