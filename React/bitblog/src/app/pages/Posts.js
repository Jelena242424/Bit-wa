import React, { Component } from "react"
import { SinglePost } from "../components/SinglePost"
import { PostsList } from "../components/PostsList"
import { postService } from "../../services/postService";


export class Posts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }
    }

    componentDidMount = () => {
        postService.fetchPosts()
            .then(myPosts => {
                this.setState({
                    posts : myPosts
                });
            })
    };

    render() {
        return (
            <div className="container">
            <PostsList posts={this.state.posts} />
            </div>
        );
    };
};
