import React from "react";

export const Header = (props) => {
    return (
        <nav>
            <div className="nav-wrapper">
                <a href="#!" class="brand-logo center">Bit People</a>
                <ul class="right hide-on-med-and-down">
                    <li><a href="collapsible.html"><i class="material-icons">refresh</i></a></li>
                    <li><a href="badges.html"><i class="material-icons">view_module</i></a></li>
                </ul>
            </div>
        </nav>
    )
}