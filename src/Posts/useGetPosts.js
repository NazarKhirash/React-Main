import React, {useEffect, useState} from 'react';
import {apiService} from "../services/users.services";

const useGetPosts = () => {
    const [posts, setPosts] = useState([])
    const [fetching, setFetching] = useState(false)

    useEffect(() => {
        setFetching(true)
        apiService.getPosts()
            .then(post => setPosts(post)).catch(() => {
        }).finally(() => {
            setFetching(false)
        })
    }, [])
    return {data: posts, fetching}
};

export default useGetPosts;