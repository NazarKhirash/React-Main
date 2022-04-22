import React from 'react';


const PostOfUsers = ({post}) => {
    const {id, userId, title, body} = post

    return (
        <div>
            <div>ID: {id}</div>
            <div>UserID: {userId}</div>
            <div>Title: {title}</div>
            <div>Body: {body}</div>
        </div>
    );
};

export default PostOfUsers;