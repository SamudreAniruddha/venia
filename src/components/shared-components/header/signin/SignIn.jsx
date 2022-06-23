import React from "react";
import userSVG from '../../../../images/svg/user.svg';

const SignIn = () => {
    return (<>
        <img src={userSVG} className='icon-user' alt="Icon user" /> <span className="text-user">Sign in</span>
    </>)
}

export default SignIn;