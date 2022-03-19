import React, {useEffect, useState} from 'react';
import {apiService} from "../../services/users.services";
import User from "../User/User";
import "./users.css"

const Users = ({setUserId}) => {

    const [users, setUsers] = useState([])
    const [user, setUser] = useState(null)

    useEffect(() => {
        apiService.getUsers()
            .then(value => setUsers(value))
    },[])

    const getUserId = (id) => {
        apiService.getUser(id)
            .then(user => setUser(user))
    }
    return (
        <div className='wrap_users'>
            <div className='users'>
                {users.map(user => <User key={user.id} user={user} getUserId={getUserId}/>)}
            </div>

            {user &&
            <div className='user_details' key={user.id}>ID: {user.id} - Name: {user.name} - UserName: {user.username} - Email: {user.email}
                <br/> Phone: {user.phone} - City: {user.address.city} - Company: {user.company.name}
                <button onClick={()=>setUserId(user.id)}>get posts</button></div>}

        </div>
    );
};

export default Users;