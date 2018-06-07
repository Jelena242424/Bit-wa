import React from "react";
import {Link} from "react-router-dom"


export const Header = (props) => {
    const { listLayoutActive, viewMode, updateHandler } = props;

    return (
        <nav>
            <div className="nav-wrapper">
                <Link className="brand-logo center" to="/">Bit People</Link>
                <ul className="right hide-on-med-and-down">
                <li><Link to="/about"> About</Link></li>
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