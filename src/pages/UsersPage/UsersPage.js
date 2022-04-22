import React, {useEffect, useState} from 'react';

import {apiService} from "../../services/user.service";
import User from "../../components/User/User";
import {Outlet} from "react-router-dom";
import css from "./UsersPage.module.css"


const UsersPage = () => {
    const [users, setUsers] = useState([])


    useEffect(()=>{
        apiService.getAllUsers()
            .then(value => setUsers([...value]))
    },[])

    return (
        <div className={css.users_page}>
            <div className={css.users_page_div}>
                {users.map(user=><User key={user.id} user={user}/>)}
            </div>
            <div className={css.users_details}>
                <Outlet/>
            </div>

        </div>
    );
};

export default UsersPage;