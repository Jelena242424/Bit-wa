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
    // ne mora da e pise kostruktor da bi setovali state. vec state = {}. On automatski u pozadini napise to kao ovde sto je u konstruktoru.
    
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
        const { state } = this.props;
        return (
            <div className="container">
                <div className="row">
                    <div className="col s12">
                        {
                            state
                                ?  this.renderSingleUser(users) 

                                :  this.renderSinglePhotoUser(users)
                                 
                        }
                    </div>
                </div>
            </div>
        )
    }
}

