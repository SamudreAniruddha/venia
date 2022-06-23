import React from "react";
import "./ProductDescription.scss";

const ProductDescription = (props) => {
    return (
        <>
            <div className="main-product-desc">
                <div className="title-product-desc">{props.proDesc.title}</div>
                <div className="text-product-desc">Description</div>
                <div className="description-product-desc">{props.proDesc.description}</div>
            </div>
        </>
    )
}

export default ProductDescription
