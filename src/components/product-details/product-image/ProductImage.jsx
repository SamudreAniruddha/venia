import React from "react";
import "./ProductImage.scss";

const ProductImage = (props) => {
    return (<>
        <div className="pro-img-main">
            <div className="pro-img-multiple">
                {
                    Array(5).fill(0).map((o,i) => {
                        return (
                            <img key={i} src={props.proImg} className="multi-product-image" alt={props.proImg} />
                        )
                    })
                }
            </div>
            <div className="pro-img-single">
                <img src={props.proImg} className="desk-single-product-image" alt={props.proImg} />
            </div>
        </div>

        <img src={props.proImg} className="mob-single-product-image" alt={props.proImg} />

    </>)
}

export default ProductImage