import React, { Component } from "react"
import { SingleAuthor } from "../components/SingleAuthor"
import { AuthorsList } from "../components/AuthorsList"
import { authorsService } from "../../services/authorsService";


export class Authors extends Component {
    constructor(props) {
        super(props);
        this.state = {
            authors: []
        }
    }

    componentDidMount = () => {
        authorsService.fetchAuthors()
            .then(myAuthors => {
                this.setState({
                    authors: myAuthors
                });
            })
    }

    render() {
        return (
            <div className="container">
                <AuthorsList authors={this.state.authors} />
            </div>
        );
    };
}
