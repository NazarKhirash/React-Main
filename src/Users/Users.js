import React from 'react';
import useGetUsers from "./useGetUsers";
import './users.css';

const Users = () => {
    const {data, fetching} = useGetUsers()

    return (
        <div>
            {fetching && !data.length && <div className="lds-ring">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>}
            {!fetching && !!data.length && data.map(user => <div
                key={user.id}>{user.id} -- {user.name} -- {user.email}</div>)}
        </div>
    );
};

export default Users;