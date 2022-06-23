import React, { useEffect, useState } from "react";
import "./PricingSummary.scss";
import payPalImg from "../../../images/PP_BTN@2x.png"

const PricingSummary = (props) => {

    let [cartLitsPrice, setcartLitsPrice] = useState(JSON.parse(JSON.stringify(props.cartLits)));

    useEffect(() => {
        setcartLitsPrice(JSON.parse(JSON.stringify(props.cartLits)));
    }, [props.cartLits])

    const subTotal = () => {
        return cartLitsPrice.length !== 0 ? cartLitsPrice.map((o) => o.totalAmount).reduce((p, c) => { return Number(p) + c }, "") : 0;
    }

    const precentage = (dp) => {
        return cartLitsPrice.length !== 0 ? (subTotal() * dp / 100) : 0;
    }

    return (
        <>
            <div className="main-pricing-summary">
                <div className="title-pricing-summary">Pricing Summary</div>
                <div className="label-pricing-summary">Subtotal<div className="value-pricing-summary">$ {subTotal().toFixed(2)}</div></div>
                <div className="label-pricing-summary">Coupon<div className="value-pricing-summary">- $ {precentage(20).toFixed(2)}</div></div>
                <div className="label-pricing-summary">Gift Card<div className="value-pricing-summary">- $ {precentage(5).toFixed(2)}</div></div>
                <div className="label-pricing-summary">Estimated tax<div className="value-pricing-summary">$ {precentage(12).toFixed(2)}</div></div>
                <div className="label-pricing-summary">Estimated shipping<div className="value-pricing-summary">FREE</div></div>
                <div className="label-total-pricing-summary">Estimated Total<div className="value-total-pricing-summary">$ {(subTotal() - precentage(20) - precentage(5) + precentage(12)).toFixed(2)}</div></div>
                <div className="checkout-pricing-summary">
                    <button type="submit" className="checkout-button-pricing-summary">
                        <span className="span-svg"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="22" viewBox="0 0 20 22">
                            <g id="lock" transform="translate(-2 -1)">
                                <rect id="Rectangle_1590" dataname="Rectangle 1590" width="18" height="11" rx="2" transform="translate(3 11)" fill="none" stroke="#FFFFFF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                                <path id="Path_38020" dataname="Path 38020" d="M7,11V7A5,5,0,1,1,17,7v4" fill="none" stroke="#FFFFFF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                            </g>
                        </svg></span> <span className="span-button">CHECKOUT</span>
                    </button>
                </div>
                <div className="img-pricing-summary"><img src={payPalImg} className="pay-pal-img-pricing-summary" alt="pay-pal-img" /></div>
            </div>
        </>
    )
}

export default PricingSummary