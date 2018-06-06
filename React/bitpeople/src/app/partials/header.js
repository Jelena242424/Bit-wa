import React from "react";


export const Header = (props) => {
    const { listLayoutActive, viewMode, updateHandler} = props;

    return (
        <nav>
            <div className="nav-wrapper">
                <a href="#!" className="brand-logo center">Bit People</a>
                <ul className="right hide-on-med-and-down">
                    <li><i className="material-icons" onClick={() => updateHandler()}>refresh</i></li>
                    {
                        viewMode
                            ? <li><i className="material-icons" onClick={() => listLayoutActive(viewMode)}>view_module</i></li>
                            : <li><i className="material-icons" onClick={() => listLayoutActive(viewMode)}>view_list</i></li>
                    }
                </ul>
            </div>
        </nav>
    )
}