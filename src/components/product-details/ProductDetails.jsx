import React, { useEffect } from "react";
import "./ProductDetails.scss";
import { useParams } from "react-router-dom";
import BreadCrumb from "../shared-components/bread-crumb/BreadCrumb"
import { useSelector } from "react-redux";
import { getAllProducts } from "../../state/products/product.slice";
import ProductImage from "./product-image/ProductImage";
import ProductTitle from "./product-title/ProductTitle";
import ProductFormat from "./product-format/ProductFormat";
import ProductCaution from "./product-caution/ProductCaution";
import ProductDescription from "./product-description/ProductDescription";
import ProductQuantity from "./product-quantity/ProductQuantity";
import { useNavigate } from "react-router-dom";

const ProductDetails = () => {

    const id = Number(useParams().id);
    let allProducts = useSelector(getAllProducts); // get all products form state
    let singleProduct = allProducts.filter(o => o.id === id)[0]; // filters product data on id
    let navigate = useNavigate();
    useEffect(() => {
        if (allProducts.length === 0) {
            navigate("/"); // navigate to home screen
        } else if (!singleProduct) {
            navigate("*"); // navigate to page not found screen
        }
    }, [])

    return (
        <>
            {
                singleProduct ?
                    <div className="main-product-details">
                        <div className="breadcrumb-product-details">
                            <BreadCrumb breadcrumbData={`Products / ${singleProduct.category} / ${singleProduct.title.slice(0, 4)}...`} />
                        </div>
                        <div className="image-section-product-details">
                            <ProductImage proImg={singleProduct.image} />
                        </div>
                        <div className="title-section-product-details">
                            <ProductTitle proTitle={singleProduct} />
                        </div>
                        <div className="format-section-product-details">
                            <ProductFormat />
                        </div>
                        <div className="quantity-section-product-details">
                            <ProductQuantity proQuantity={singleProduct} allPro={allProducts} />
                        </div>
                        <div className="description-section-product-details">
                            <ProductDescription proDesc={singleProduct} />
                        </div>
                        <div className="caution-section-product-details">
                            <ProductCaution />
                        </div>
                    </div>
                    : ""
            }
            <hr className="hr-primary-brand" />
        </>
    )




}

export default ProductDetails