import React from 'react';

const Comment = ({comments}) => {
    const {id, postId, name, email, body} = comments
    return (
        <div>
            <div>ID: {id}</div>
            <div>PostID: {postId}</div>
            <div>Name: {name}</div>
            <div>Email: {email}</div>
            <div>Body: {body}</div>
        </div>
    );
};

export default Comment;