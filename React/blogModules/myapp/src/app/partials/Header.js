import React from "react";

const Header = (props) => {
    const title = props.myTitle
    return (
        <header>
            <nav>
                <div className="nav-wrapper">
                    <a href="#" className="brand-logo center">{title}</a>
                </div>
            </nav>
        </header>
    )
}

export default Header;