import React from 'react';
import SinglePost from './SinglePost'

const PostList = (props) => {
    const posts = props.myPosts
    return (
        <div className="container">
            <div className="row">
                {posts.map((post) => {
                    return <SinglePost key={post.id} myPost={post} />
                })}
            </div>
        </div>
    )
}

export default PostList;