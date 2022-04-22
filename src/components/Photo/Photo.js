import React from 'react';

import css from './Photo.module.css'

const Photo = ({photo}) => {
    const {id, albumId, title, thumbnailUrl} = photo;
    return (
        <div className={css.photo_div}>
            <div>
                <div>ID: {id}</div>
                <div>AlbumId: {albumId}</div>
                <div>Title: {title}</div>
            </div>
            <div>
                <img src={thumbnailUrl} alt={title}/>
            </div>
        </div>
    );
};

export default Photo;