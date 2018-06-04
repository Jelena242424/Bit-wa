import React from 'react';
import PropTypes from "prop-types";

const Footer = (props) => {
    return (
        <footer className="page-footer">
            <div className="footer-copyright">
                <div className="container">
                    © {new Date().getFullYear()} {props.footerTitle}
                </div>
            </div>
        </footer>
    )
}

Footer.propTypes = {
    footerTitle: PropTypes.string.isRequired
}

Footer.defaultProps = {
    footerTitle: "My Footer"
}

export default Footer;