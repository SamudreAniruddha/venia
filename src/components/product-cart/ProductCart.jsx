import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllProducts } from "../../state/products/product.slice";
import AddedProducts from "./added-products/AddedProducts";
import FeaturesCart from "./features-cart/FeaturesCart";
import PricingSummary from "./pricing-summary/PricingSummary";
import { featchProducts } from "../../state/products/product.slice";
import { useNavigate } from "react-router-dom";
import "./ProductCart.scss";

const ProductCart = () => {

    const dispatch = useDispatch();
    let allProducts = useSelector(getAllProducts); // get all products form state
    let [cartProducts, setCartProducts] = useState(allProducts.filter(o => o.addCart)) // filters add cart product data
    let navigate = useNavigate();

    useEffect(() => {
        if(allProducts.length === 0){        
            navigate("/"); // navigate to cart screen
        }
        setCartProducts(allProducts.filter(o => o.addCart));
    }, [allProducts])

    const updateItem = (removedObject, flag, qty) => {
        let updatedAllProducts = JSON.parse(JSON.stringify(allProducts)).map((o) => {
            if (o.id === removedObject.id) {
                o.quantity = qty;
                o.addCart = flag;
                o.totalAmount = o.quantity * o.price;
            }
            return o;
        })

        dispatch(featchProducts(updatedAllProducts)); //dispached response to action product
    }

    return (<>
        <div className="main-add-cart">
            <div className="title-add-cart">
                Your Shopping Bag
                <hr className="hr-add-cart" />
            </div>
            
            <div className="product-add-cart" style={{alignSelf:"center"}}>
                {cartProducts.length !== 0 ? <AddedProducts cartLits={cartProducts} updateCart={updateItem} /> : <div className="title-add-cart">No items added to Cart</div>}
            </div>

            <div className="features-add-cart">
                <FeaturesCart />
            </div>
            
            <div className="pricing-summary-add-cart">
                <PricingSummary cartLits={cartProducts} />
            </div>
        </div>
    </>)
}

export default ProductCart