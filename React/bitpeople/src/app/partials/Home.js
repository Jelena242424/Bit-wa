import React from "react";
import {Search} from "./Search"
import {Gender} from "./Gender"
import {UsersList} from "../users/UsersList"

export const Home = (props) => {
    const {handlerSearchUsers, searchSetState, viewMode, newUser, inputValue,  filteredUsers} = props
    return (
        <div>
        <Search handlerSearchUsers={handlerSearchUsers} searchSetState={searchSetState} />,
        <Gender  filteredUsers={filteredUsers} />
        <UsersList viewMode={viewMode} newUser={newUser} inputValue={inputValue} filteredUsers={filteredUsers} />
      </div>
    )
}