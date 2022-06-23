import React from "react";
import "./FollowUs.scss";
import instImg from "../../../../images/svg/instagram.svg";
import fbImg from "../../../../images/svg/facebook.svg";
import twtImg from "../../../../images/svg/twitter.svg"

const FollowUs = () => {
    return (<>
        <div className="main-follow-us">
            <div className="title-follow-us">Follow Us!</div>
            <div className="content-follow-us">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
            </div>
            <div className="img-follow-us">
                <img src={instImg} className="insta-img" alt="insta-img" />
                <img src={fbImg} className="fb-img" alt="fb-img" />
                <img src={twtImg} className="twt-img" alt="twt-img" />
            </div>
        </div>
    </>)
}

export default FollowUs;