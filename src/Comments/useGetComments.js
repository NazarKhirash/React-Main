import React, {useEffect, useState} from 'react';
import {apiService} from "../services/users.services";

const useGetComments = () => {
    const [comments, setComments] = useState([])
    const [fetching, setFetching] = useState(false)

    useEffect(() => {
        setFetching(true)
        apiService.getPosts()
            .then(comment => setComments(comment)).catch(() => {
        }).finally(() => {
            setFetching(false)
        })
    }, [])
    return {data: comments, fetching}
};

export default useGetComments;