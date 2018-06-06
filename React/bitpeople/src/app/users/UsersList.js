import React, { Component } from "react"
import { SingleUser } from "./SingleUser"
import { SinglePhotoUser } from "./SinglePhotoUser"
// import { fetchUsers } from "../../services/fetchUsers";


export class UsersList extends Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     users: [], 
            
        // }
        const users = this.props.newUser
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

   

    render() {
       
        const { viewMode } = this.props;

        return (
            <div className="container">
                <div className="row">
                    <div className="col s12">
                        {
                            viewMode
                                ?  this.renderSingleUser(users)
                                :  this.renderSinglePhotoUser(users)
                        }
                    </div>
                </div>
            </div>
        )
    }
}

