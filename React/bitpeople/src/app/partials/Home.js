import React from "react";
import {Search} from "./Search"
import {UsersList} from "../users/UsersList"

export const Home = (props) => {
    const {handlerSearchUsers, searchSetState, viewMode, newUser, inputValue} = props
    return (
        <div>
        <Search handlerSearchUsers={handlerSearchUsers} searchSetState={searchSetState} />,
        <UsersList viewMode={viewMode} newUser={newUser} inputValue={inputValue} />
      </div>
    )
}