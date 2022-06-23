import React from "react";
import "./FooterLogo.scss";
import logo from "../../../../images/logo.png"

const FooterLogo = () => {
    return (<>
        <div className="main-footer-logo">
            <img src={logo} className="img-footer-logo" alt="footer-logo" />
        </div>
    </>)
}

export default FooterLogo;