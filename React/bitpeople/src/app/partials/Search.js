import React from "react";

export const Search = (props) => {

    return (
        <div className="container">
            <div className="row">
                <form>
                    <div className="input-field">
                        <input id="search" type="search" value={props.searchSetState} onChange={props.handlerSearchUsers} required />
                        <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
                        <i className="material-icons">close</i>
                    </div>
                </form>
            </div>
        </div>
    )
} 