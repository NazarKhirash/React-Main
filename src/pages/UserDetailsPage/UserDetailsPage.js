import React, {useEffect, useState} from 'react';
import {useLocation, useParams} from "react-router-dom";


import {apiService} from "../../services/user.service";
import UserDetails from "../../components/UserDetails/UserDetails";

const UserDetailsPage = () => {

    const {id} = useParams()
    const {state} = useLocation()
    const [user, setUser] = useState(null)

    useEffect(()=>{
        if (!user){
            apiService.getUserById(id).then(value => setUser(value))
            return
        }
        setUser(state)
    },[id])
    return (
        <div>
            {user && <UserDetails user={user}/>}

        </div>
    );
};

export default UserDetailsPage;