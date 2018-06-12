import React, { Fragment } from 'react';
import { SinglePost } from './SinglePost';
import { postService } from "../../services/postService"

const PostsList = (props) => {

    const renderPostList = () => {
        return props.posts.reverse().map(post => {
            return (
                <div>
                    <SinglePost post={post} key={post.Id} />
                    <button className="btn #e65100 orange darken-4" onClick={this.handleSubmit} type="submit" name="action">Delete
                    </button>
                </div>
            )
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