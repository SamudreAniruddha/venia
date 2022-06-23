import React from "react";
import "./FeaturesCart.scss";
import arrowDown from "../../../images/svg/chevron-down.svg"

const FeaturesCart = () => {

    let featuresData = [{
        title: "Estimate your Shipping",
        tag: "Shipping to 91001"
    },
    {
        title: "Enter a Coupon Code",
        tag: "20% discount applied"
    },
    {
        title: "Apply Gift Card",
        tag: "5% discount applied"
    }]

    return (
        <>
            <div className="main-features-cart">
                {
                    featuresData.map((o, i) => {
                        return (
                            <div key={i} className="features-cart">
                                <div className="features-cart-title">{o.title}<img src={arrowDown} className="icon-arrow-down-fea-cart" alt="arrow-down" /></div>
                                <div className="features-cart-tag">{o.tag}</div>
                            </div>
                        )
                    })
                }
                {
                    featuresData.map((o, i) => {
                        return (
                            <div key={i} className="desk-features-cart">
                                <div className="desk-features-cart-title">{o.title}</div>
                                <div className="desk-features-cart-tag">{o.tag}</div>
                                <img src={arrowDown} className="desk-icon-arrow-down-fea-cart" alt="arrow-down" />
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default FeaturesCart