import React, { Fragment } from 'react';
import { SinglePost } from './SinglePost';

const PostsList = (props) => {

    const renderPostList = () => {
        return props.posts.map(post => {
            return <SinglePost post={post} key={post.Id}/>
        });
    };

    return (
        <Fragment>
            <h1 className="center-align">Posts</h1>
            {renderPostList()}
        </Fragment>
    )
};

export { PostsList };