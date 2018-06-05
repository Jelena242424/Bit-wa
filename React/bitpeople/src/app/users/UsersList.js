import React, { Component } from "react"
import { SingleUser } from "./SingleUser"
import { SinglePhotoUser } from "./SinglePhotoUser"
import { fetchUsers } from "../../services/fetchUsers";


export class UsersList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        }
    }

    renderSingleUser(users) {
        return (
            <div className="collection">
                {users.map((user, index) => {
                    return <SingleUser myUser={user} key={index} />
                })}
            </div>
        )
    }

    renderSinglePhotoUser(users) {
        return (
            <div className="collection">
                {users.map((user, index) => {
                    return <SinglePhotoUser myUser={user} key={index} />
                })}
            </div>
        )
    }

    componentDidMount() {
        fetchUsers()
            .then(users => {
                this.setState({
                    users: users
                })
            })
    }

    render() {
        const { users } = this.state;
        return (
            <div className="container">
                <div className="row">
                    <div className="col s12">
                        { /* {this.renderSinglePhotoUser(users)}*/}
                        {this.renderSingleUser(users)}
                    </div>
                </div>
            </div>
        )
    }
}

