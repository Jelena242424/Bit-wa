import React from "react";
import { calculateGender } from "../../shared/calculateGender";



export const Gender = (props) => {
    const {filteredUsers} = props;
    const filteredUsersGender = calculateGender(filteredUsers);
    return (
        <div className="container">
        <div className="row">
        <span className="right">Male: {filteredUsersGender.male} Female: {filteredUsersGender.female}</span>
        </div>
      </div>
    )
}