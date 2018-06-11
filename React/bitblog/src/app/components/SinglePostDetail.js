import React, { Component } from "react"
import Link from "react-router-dom/Link";
import {AuthorName} from "./AuthorName";
import {PostContent} from "./PostContent"
import { RelatedPosts } from "./RelatedPosts";
import { postService } from "../../services/postService"

export class SinglePostDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
        authorPosts: []
    }
  }

   componentDidMount = () => {
        const userId = this.props.post.userId;
        
        postService.fetchAuthorsPosts(userId)
            .then(authorSinglePost => {
                this.setState({
                  authorPosts: authorSinglePost  
                });
            });
    }
    // const title = props.post.title;
    // const body = props.post.body;
    // const userId = props.post.userId;
    // const id= props.post.id;

  render () {
      return (
          <div class="row">
          <div class="col s12">
            <div class="card #eeeeee grey lighten-3">
              <div class="card-content black-text">
                <PostContent body={this.props.post.body} title={this.props.post.title} />
              </div>
              <hr />
              <div class="card-action">
              <RelatedPosts authorPosts={this.state.authorPosts}/>
              </div>
            </div>
          </div>
        </div>        
      )
    }
}


