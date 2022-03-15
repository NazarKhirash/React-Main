import React, {useEffect, useState} from 'react';
import {apiService} from "../services/users.services";

const useGetUsers = () => {
    const [users, setUsers] = useState([])
    const [fetching, setFetching] = useState(false)

    useEffect(() => {
        setFetching(true)
        apiService.getUsers()
            .then(user => setUsers(user)).catch(() => {
        }).finally(() => setFetching(false))
    }, [])
    return {data: users, fetching}
};

export default useGetUsers;