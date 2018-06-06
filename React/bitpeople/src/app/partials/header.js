import React from "react";


export const Header = (props) => {
    const { listLayoutActive, state } = props;

    return (
        <nav>
            <div className="nav-wrapper">
                <a href="#!" className="brand-logo center">Bit People</a>
                <ul className="right hide-on-med-and-down">
                    <li><a href="collapsible.html"><i className="material-icons">refresh</i></a></li>
                    {
                        state
                            ? <li><i className="material-icons" onClick={() => listLayoutActive(state)}>view_module</i></li>
                            : <li><i className="material-icons" onClick={() => listLayoutActive(state)}>view_list</i></li>
                    }
                </ul>
            </div>
        </nav>
    )
}