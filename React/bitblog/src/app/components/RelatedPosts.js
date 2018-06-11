import React, { Fragment , Component} from "react";
import Link from "react-router-dom/Link";


export class RelatedPosts extends Component {
    constructor(props) {
        super(props);
    };

     renderPostList = () => {
         const authorPosts=this.props.authorPosts;
        return authorPosts.map(post => {
            return (<p><Link to={`/post/${post.id}`}>{post.title}</Link></p>)
        });
    };

    render() {
        return (
            <Fragment>
                <h4>{this.props.authorPosts.length} more posts from same author</h4>
                {this.renderPostList()}
            </Fragment>
        )
    }
};

