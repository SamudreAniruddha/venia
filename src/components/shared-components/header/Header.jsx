import React, { useState } from "react";
import "./Header.scss";
import Menu from "./menu/Menu";
import Logo from "./logo/Logo";
import Search from "./search/Search";
import Cart from "./cart/Cart";
import SignIn from "./signin/SignIn"
import Catagory from "./catagory/Catagory";
import xSVG from '../../../images/svg/x.svg';


const Header = () => {

    let [toggle, setToggle] = useState(false);  //toggle state for hide show menu

    return (<>
        <header>
            <div className="cata-mobile" onClick={() => setToggle(!toggle)}><Menu /></div>
            <Logo />
            <div className="cata-desktop"><Catagory /></div>
            <Search />
            <SignIn />
            <Cart />

        </header>
        <div className="cata-mobile">
            {toggle ? <div className="main-menu">
                <div className="menu-title"><span>Shop Catagories</span><span style={{ float: "right", cursor: "pointer" }}><img src={xSVG} className='icon-x' alt="Icon x" onClick={() => setToggle(!toggle)} /></span></div>
                <hr className="menu-hr-line" />
                <div className="menu-items" onClick={() => setToggle(!toggle)}>
                    <Catagory />
                </div>
            </div> : ""}

        </div>
        <hr className="menu-hr-line" />
    </>)
}

export default Header