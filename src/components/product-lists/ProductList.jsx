import React, { useEffect, useState } from "react";
import "./ProductList.scss";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { getAllProducts } from "../../state/products/product.slice";
import Banner from "./banner/Banner";
import BreadCrumb from "../shared-components/bread-crumb/BreadCrumb";
import SideBarOption from "./side-bar-option/SideBarOption";
import ProductTiles from "./products-tiles/ProductTiles";
import { getFilterFlag } from "../../state/features/filter.slice";
import leftArrow from "../../images/svg/chevron-left.svg";
import rightArrow from "../../images/svg/chevron-right.svg";

const ProductList = () => {

    let [pageData, setPageData] = useState([]);
    let { ele } = useParams(); //fetch current ele from path
    let allProducts = useSelector(getAllProducts); // get all products form state
    let proCata = allProducts.filter(o => ele === 'All' ? true : ele === o.category); // filters product data on catagory
    let filFlag = useSelector(getFilterFlag); // to get filter flag for options toggle

    let catagoryData = []
    catagoryData = allProducts.map(o => o.category).filter((v, i, a) => a.indexOf(v) === i)
    catagoryData.push('All');
    let navigate = useNavigate();

    const pageLimitData = (pn) => {
        let a = [];
        proCata.map((o, i) => {
            return {
                pageNumber: Math.ceil((i + 1) / 12),
                data: o
            }
        }).reduce((p, c) => {
            if (c.pageNumber === pn)
                a.push(c.data)
            setPageData(a)
            return pageData
        }, []);
    }


    useEffect(() => {
        pageLimitData(1);
        if (!["Women", "Electronics", "Jewelery", "Men", "All"].includes(ele)) {
            navigate("*");
        }
    }, [ele, allProducts]);

    return (<>
        <section className="product-list-section">
            <Banner />
            {
                allProducts.length !== 0 ? <div className="main-product-listing">
                    <div className="product-listing-breadcrumb">
                        <BreadCrumb breadcrumbData={`Dashboard / Products / ${ele}`} />
                    </div>
                    {
                        filFlag ? <div className="mob-product-listing-sidebar"><SideBarOption /></div> : ""
                    }
                    <div className="desk-product-listing-sidebar">
                        <SideBarOption />
                    </div>
                    <div className="product-listing-tiles">
                        <ProductTiles productData={pageData} productDataLength={proCata.length} />
                        <div className="pageNavigation-outer">
                            <div className="pageNavigation-inner">
                                <span className="page-numbers">
                                    <img src={leftArrow} className="icon-left-arrow" alt="Icon Left" />
                                </span>
                                {
                                    Array(Math.ceil(proCata.length / 6)).fill(0).map((o, i) => {
                                        return (<span className="page-numbers" key={i} onClick={() => pageLimitData(i + 1)}>{i + 1}</span>)
                                    })
                                }
                                <span className="page-numbers">
                                    <img src={rightArrow} className="icon-right-arrow" alt="Icon Right" />
                                </span>
                            </div>
                        </div>
                    </div>
                </div> : ""

            }

        </section>

    </>)

}

export default ProductList