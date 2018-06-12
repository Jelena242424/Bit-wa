import React, { Component } from "react";
import {SinglePostDetail} from "../components/SinglePostDetail";
import { singlePostService } from "../../services/singlePostService";
import { postService } from "../../services/postService"
import { authorsService } from "../../services/authorsService";


export class PostDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            post: {},
            authorPosts: [],
            author: {}
        }
    };

    componentWillReceiveProps = (nextProps) => {
        const postId = nextProps.match.params.id;
        singlePostService.fetchSinglePost(postId)
            .then(mySinglePost => {
                this.setState({
                    post: mySinglePost,  
                });
            });
    };

    componentDidMount = () => {
        const postId = this.props.match.params.id;
        singlePostService.fetchSinglePost(postId)
            .then(mySinglePost => {
                this.setState({
                    post: mySinglePost,  
                });
                postService.fetchAuthorsPosts(this.state.post.userId)
                .then(myPost => {
                    this.setState({
                        authorPosts: myPost
                    });
                })
                authorsService.fetchSingleAuthors(this.state.post.userId)
                .then(mySingleAuthor => {
                    this.setState({
                        author: mySingleAuthor,
                    });
                });

            });
    }

    render () {
        return (
            <SinglePostDetail name={this.state.author.name} post={this.state.post} authorPosts={this.state.authorPosts}/>
        );
    };    
};