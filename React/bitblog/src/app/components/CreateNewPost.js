import React, { Component, Fragment } from "react"
import { singlePostService } from "../../services/singlePostService";

export class CreateNewPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            content: ''
        }
    }

    handleChange = (event) => {
        const field = event.target.name
        this.setState({
            [field]: event.target.value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const title = this.state.title;
        const content = this.state.content;

        const newPost = {
            title: title,
            body: content,
            userId: 2
        }
        singlePostService
            .createNewPost(newPost)
            .then(response => {
                return response.json()
            })
            .then(newPost => {
                console.log(newPost);
            })
            this.setState({
                title: '',
                content: ''
            });

    }

    handleCancel = (event) => {
        this.setState({
            title: '',
            content: ''
        });
    }

    render() {
        return (
            <Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col s12">
                            <h3 className="center">New Post</h3>
                            <div class="col s12" >
                                <div class="row">
                                    <div className="input-field col s12">
                                        <h5>Title</h5>
                                        <input id="first_name" type="text" name="title" className="validate" placeholder="Post title" value={this.state.title}
                                            onChange={this.handleChange} />
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="input-field col s12">
                                        <h5>Content</h5>
                                        <textarea id="textarea1" name="content" class="materialize-textarea" value={this.state.content} onChange={this.handleChange}></textarea>
                                    </div>
                                </div>
                                <div className="col s11 right-align">
                                    <button className="btn #e65100 orange darken-4" onClick={this.handleCancel} type="text" name="action">Cancel
                                </button>
                                </div>
                                <div className="col s1 right-align">
                                    <button className="btn #e65100 orange darken-4" onClick={this.handleSubmit} type="submit" name="action">Submit
                                </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
} 