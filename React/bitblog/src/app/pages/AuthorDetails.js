import React, { Component } from "react"
import { AboutSingleAuthor } from '../components/AboutSingleAuthor'
import { authorsService } from "../../services/authorsService";

export class AuthorDetails extends Component {
    constructor(props) {
        super(props);
        this.state ={
            author: {}
        }
    }

    componentDidMount = () => {
        const userId = this.props.match.params.userId;
        authorsService.fetchSingleAuthors(userId)
                .then(mySingleAuthor => {
                    this.setState({
                        author: mySingleAuthor
                    });
                });

    };  

    render() {
        return (
            <div className="container">
                <AboutSingleAuthor />
            </div>
        );
    };
};