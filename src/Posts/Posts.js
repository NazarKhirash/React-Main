import React from 'react';
import useGetPosts from "./useGetPosts";

const Posts = () => {
const {data, fetching} = useGetPosts()

    return (
        <div>
            {fetching && !data.length && <div className="lds-ring">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>}
            {!fetching && !!data.length && data.map(post => <div
                key={post.id}>{post.id} -- {post.title} -- {post.body}</div>)}
        </div>
    );
};

export default Posts;