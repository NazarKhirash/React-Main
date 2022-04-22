import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";


import {apiService} from "../../services/user.service";
import Comment from "../../components/Comment/Comment";

const PostsCommentsPage = () => {

    const {id} = useParams()
    const [comments, setComments] = useState([])

    useEffect(() => {
        apiService.getCommentsId(id).then(value => setComments([...value]))
    }, [])

    return (
        <div>
            {comments.map(comment => <Comment key={comment.id} comments={comment}/>)}
        </div>
    );
};

export default PostsCommentsPage;