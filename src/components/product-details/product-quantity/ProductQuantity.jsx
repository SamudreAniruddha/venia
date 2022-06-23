import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { featchProducts } from "../../../state/products/product.slice";
import "./ProductQuantity.scss";

const ProductQuantity = (props) => {
    const id = Number(useParams().id);
    const dispatch = useDispatch();
    let navigate = useNavigate();
    let allProQty = JSON.parse(JSON.stringify(props.allPro));
    let [proQnty, setProQty] = useState(props.proQuantity.quantity);
    let [saveFlag, setSaveFlag] = useState(false);

    const changeQtyFun = (ev) => {
        let val = ev.target.value;
        if (val >= 1 && !val.includes("."))
            setProQty(Number(val));
    }

    const addCart = () => {

        let updatedAllProducts = allProQty.map((o) => {
            if (o.id === id) {
                o.quantity = proQnty;
                o.addCart = true;
                o.totalAmount = o.quantity * o.price;
            }
            return o;
        })

        dispatch(featchProducts(updatedAllProducts)); //dispached response to action product
        navigate("/cart"); // navigate to cart screen

    }

    return (
        <>
            <div className="main-product-quantity">

                <div className="title-product-quantity">Quantity</div>

                <div className="qua-product-quantity">
                    <div className="remove-product-quantity">

                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="20" viewBox="0 0 22 22" onClick={() => proQnty > 1 ? setProQty(proQnty - 1) : false} >
                            <g id="minus-circle" transform="translate(-1 -1)">
                                <circle id="Ellipse_134" dataname="Ellipse 134" cx="10" cy="10" r="10" transform="translate(2 2)" fill={proQnty > 1 ? "none" : "#EAEBEB"} stroke="#91959C" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                                <line id="Line_520" dataname="Line 520" x2="8" transform="translate(8 12)" fill="none" stroke="#91959C" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                            </g>
                        </svg>

                    </div>

                    <div className="input-product-quantity">
                        <input type="number" id="name" name="quantity" value={proQnty} onChange={changeQtyFun} />
                    </div>

                    <div className="add-product-quantity">

                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="20" viewBox="0 0 22 22" onClick={() => setProQty(proQnty + 1)}>
                            <g id="plus-circle" transform="translate(-1 -1)">
                                <circle id="Ellipse_148" dataname="Ellipse 148" cx="10" cy="10" r="10" transform="translate(2 2)" fill="none" stroke="#91959C" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                                <line id="Line_537" dataname="Line 537" y2="8" transform="translate(12 8)" fill="none" stroke="#91959C" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                                <line id="Line_538" dataname="Line 538" x2="8" transform="translate(8 12)" fill="none" stroke="#91959C" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                            </g>
                        </svg>

                    </div>
                </div>

                <div className="add-cart-product-quantity">
                    <button type="submit" onClick={addCart} >ADD TO Cart</button>
                </div>

                <div className="save-share-product-quantity">
                    <div className="save-product-quantity">
                        <svg className="svg-save-product-quantity" xmlns="http://www.w3.org/2000/svg" width="22.903" height="20.232" viewBox="0 0 22.903 20.232" onClick={() => setSaveFlag(!saveFlag)}>
                            <path id="heart" d="M20.84,4.61a5.5,5.5,0,0,0-7.78,0L12,5.67,10.94,4.61a5.5,5.5,0,0,0-7.78,7.78l1.06,1.06L12,21.23l7.78-7.78,1.06-1.06a5.5,5.5,0,0,0,0-7.78Z" transform="translate(-0.549 -1.998)" fill={saveFlag ? "#333" : "none"} stroke="#172026" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                        </svg>
                        <div className="text-save-product-quantity">Save</div>
                    </div>
                    <div className="share-product-quantity">
                        <svg className="svg-share-product-quantity" xmlns="http://www.w3.org/2000/svg" width="20" height="22" viewBox="0 0 20 22">
                            <g id="share-2" transform="translate(-2 -1)">
                                <circle id="Ellipse_155" dataname="Ellipse 155" cx="3" cy="3" r="3" transform="translate(15 2)" fill="none" stroke="#172026" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                                <circle id="Ellipse_156" dataname="Ellipse 156" cx="3" cy="3" r="3" transform="translate(3 9)" fill="none" stroke="#172026" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                                <circle id="Ellipse_157" dataname="Ellipse 157" cx="3" cy="3" r="3" transform="translate(15 16)" fill="none" stroke="#172026" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                                <line id="Line_551" dataname="Line 551" x2="6.83" y2="3.98" transform="translate(8.59 13.51)" fill="none" stroke="#172026" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                                <line id="Line_552" dataname="Line 552" x1="6.82" y2="3.98" transform="translate(8.59 6.51)" fill="none" stroke="#172026" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                            </g>
                        </svg>
                        <div className="text-share-product-quantity">Share</div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default ProductQuantity