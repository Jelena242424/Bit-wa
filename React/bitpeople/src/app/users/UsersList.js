import React, { Component } from "react"
import { SingleUser } from "./SingleUser"
import { fetchUsers } from "../../services/fetchUsers";


export class UsersList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        }
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
                        <div className="collection">
                            {users.map(user => {
                                return <SingleUser myUser={user} />
                            })}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

