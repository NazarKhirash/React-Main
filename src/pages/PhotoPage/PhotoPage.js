import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {apiService} from "../../services/user.service";
import Photo from "../../components/Photo/Photo";

const PhotoPage = () => {
    const [photos, setPhotos] = useState([]);
    const {albumId} = useParams();

    useEffect(()=>{
        apiService.getPhotosById(albumId).then(value => setPhotos([...value]))
    }, [albumId])

    return (
        <div>
            {photos.map(photo =><Photo key={photo.id} photo={photo}/>)}
        </div>
    );
};

export default PhotoPage;