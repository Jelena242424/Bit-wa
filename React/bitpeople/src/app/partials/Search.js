import React from "react";

export const Search = (props) => {
    const {handlerSearchUsers, searchSetState} = props;

    return (
        <div className="container">
            <div className="row">
                <form>
                    <div className="input-field">
                        <input id="search" type="search" value={searchSetState} onChange={handlerSearchUsers} required />
                        <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
                        <i className="material-icons">close</i>
                    </div>
                </form>
            </div>
        </div>
    )
} 