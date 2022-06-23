import React, { useState } from "react";
import "./ProductTitle.scss";

const ProductTitle = (props) => {
    let proTit = props.proTitle

    const ratingMethod = () => {
        return Array(5).fill(0).map((o, i) => {
            return (
                <svg key={i} className="star-section" xmlns="http://www.w3.org/2000/svg" width="22" height="21.02" viewBox="0 0 22 21.02">
                    <path id="star" d="M12,2l3.09,6.26L22,9.27l-5,4.87,1.18,6.88L12,17.77,5.82,21.02,7,14.14,2,9.27,8.91,8.26Z" transform="translate(-1 -1)" fill={i < Math.ceil(proTit.rating.rate) ? "#172026" : "none"} stroke="#172026" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
            )
        })
    }

    let [readToggle, setReadToggle] = useState(false);

    return (<>
        <div className="title-section">
            <div className="title-title">{proTit.title.slice(0,20)}...</div>
            <div className="title-price">${proTit.price}</div>
            <div className="title-rating-rate">{ratingMethod()}<span className="title-rating-count">({proTit.rating.count})</span></div>
            <div className="title-description">{readToggle ? proTit.description : proTit.description.slice(0, 80)} <span className="title-rating-count" style={{ cursor: "pointer" }} onClick={() => setReadToggle(!readToggle)}>{readToggle ? "Less" : "Read more"}</span></div>
            <hr className="title-hr-line"/>
        </div>
    </>)
}

export default ProductTitle