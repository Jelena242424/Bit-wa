import React from "react";
import PropTypes from "prop-types";
// import UserCardItem from "./UserCardItem";

import { PhotoUserCard } from "./PhotoUserCard";


const UserList = (props) => {
    const ourUserList = props.myList;
    return (
        <div className="container">
            <div className="row">
                <div className="col s12">
                    <div className="collection">
                        {ourUserList.map((user, i) => {
                            return (
                                // <UserCardItem key={i} myUser={user} />
                                <PhotoUserCard key={i} myUser={user} />
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

UserList.propType = {
    myList: PropTypes.array.isRequired
}

UserList.defaultProps = {
    myList: []
}

export default UserList;