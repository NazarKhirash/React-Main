import React, {useEffect, useState} from 'react';
import {Outlet, useParams} from "react-router-dom";


import {apiService} from "../../services/user.service";
import Album from "../../components/Album/Album";
import css from './Albums.module.css'

const AlbumPage = () => {
    const [albums, setAlbums] = useState([]);
    const {id} = useParams();

    useEffect(()=>{
        apiService.getPhotosById(id).then(value => setAlbums(value))
    },[id])
    return (
        <div className={css.albums_page}>
            <div>
                {albums.map(album =><Album key={album.id} album={album}/>)}
            </div>
            <div>
                <Outlet/>
            </div>
        </div>
    );
};

export default AlbumPage;