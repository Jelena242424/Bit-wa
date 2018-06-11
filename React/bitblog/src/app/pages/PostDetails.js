import React, { Component } from "react";
import {SinglePostDetail} from "../components/SinglePostDetail";
import { singlePostService } from "../../services/singlePostService";

export class PostDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            post: {},
            
        }
    };

    componentDidMount = () => {
        const postId = this.props.match.params.id;
        singlePostService.fetchSinglePost(postId)
            .then(mySinglePost => {
                this.setState({
                    post: mySinglePost,  
                });
            });
    }

    render () {
        return (
            <SinglePostDetail post={this.state.post}/>
        );
    };    
};