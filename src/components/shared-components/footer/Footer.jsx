import React from "react";
import AboutUs from "./about-us/AboutUs";
import Account from "./account/Account";
import Help from "./help/Help";
import FollowUs from "./follow-us/FollowUs";
import Terms from "./terms/Terms";
import Company from "./company/Company";
import FooterLogo from "./footer-logo/FooterLogo";
import "./Footer.scss";

const Footer = () => {
    return (<>
        <hr className="hr-footer-one" />
        <footer className="main-footer">
            <div className="footer-account">
                <Account />
            </div>
            <div className="footer-about-us">
                <AboutUs />
            </div>
            <div className="footer-help">
                <Help />
            </div>
            <div className="footer-follow-us">
                <FollowUs />
            </div>
            <hr className="hr-footer-two" />
            <div className="footer-terms">
                <Terms />
            </div>
            <div className="footer-company">
                <Company />
            </div>
            <div className="footer-logo">
                <FooterLogo />
            </div>
        </footer>
    </>)
}

export default Footer;